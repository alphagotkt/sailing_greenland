import React from 'react';

// Reusable components
const PageContainer = ({ children, className = '' }) => (
  <div className={`relative w-full aspect-[210/297] bg-white overflow-hidden shadow-lg ${className}`}>
    {children}
  </div>
);

const Cover = ({ data }) => (
  <PageContainer className="text-white">
    <img src={data.background} alt="Cover" className="absolute inset-0 w-full h-full object-cover z-0" />
    <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12">
      {/* Top Header */}
      <div className="text-center mt-8 space-y-3">
         <p className="text-xl tracking-[0.4em] font-serif font-medium opacity-95">鲸 湾 探 索</p>
         <p className="text-[10px] tracking-[0.2em] font-sans opacity-80">
            [ <span className="font-light">Whalebay</span> <span className="font-bold">Expeditions</span> ]
         </p>
      </div>

      {/* Side Vertical Text & Bar */}
      <div className="absolute top-1/3 left-8 md:left-12 flex flex-col items-center gap-4">
          <div className="w-1 h-12 bg-expedition-red shadow-sm"></div>
          <div className="writing-vertical-rl text-[0.6rem] tracking-[0.5em] text-expedition-red font-bold opacity-90" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            SAILING GREENLAND
          </div>
      </div>

      {/* Main Title Area */}
      <div className="flex flex-col items-end mt-auto mb-20 space-y-6 mr-4">
        <h1 className="text-5xl md:text-6xl font-serif tracking-widest drop-shadow-lg">{data.content.title}</h1>
      </div>

      {/* Footer Info */}
      <div className="flex justify-between items-end w-full border-t border-white/20 pt-6">
         <p className="text-sm tracking-[0.2em] font-sans opacity-90 font-light">{data.content.bottomLeft}</p>
         <div className="text-right space-y-1">
             <p className="text-2xl font-serif">{data.content.bottomRight[0]}</p>
             <p className="text-[10px] tracking-[0.2em] opacity-80 font-light">{data.content.bottomRight[1]}</p>
         </div>
      </div>
    </div>
  </PageContainer>
);

const FullImage = ({ data }) => (
  <PageContainer className="bg-arctic-900">
    <img src={data.background} alt="Full Page" className="absolute inset-0 w-full h-full object-cover" />
    {data.overlay && (
      <div className="absolute bottom-8 left-8 text-white/80 text-xs tracking-wider">
        {data.overlay.text}
      </div>
    )}
  </PageContainer>
);

const Diary = ({ data }) => (
  <PageContainer className="bg-white text-arctic-900 p-12 flex flex-col">
    <div className="text-right text-xs text-gray-400 mb-8 uppercase tracking-wider">{data.text.header}</div>
    <div className="mb-12">
      <img src={data.images.top} alt="Diary Header" className="w-full h-48 object-cover shadow-sm" />
    </div>
    <div className="space-y-8 flex-1">
      <div className="flex justify-between items-baseline border-b border-blue-100 pb-2">
        <h2 className="text-2xl font-serif text-blue-900">航海日记</h2>
        <span className="text-sm font-sans text-gray-500">{data.text.date}</span>
      </div>
      <p className="text-xs text-blue-400 font-serif">{data.text.location}</p>
      <div className="space-y-4 text-sm font-serif leading-relaxed text-gray-700">
        {data.text.body.map((line, i) => (
          line === '*' ? 
            <div key={i} className="w-full text-center text-blue-200 my-4 text-lg">✻</div> :
            <p key={i} className={line === '睡了。' ? 'mt-8' : ''}>{line}</p>
        ))}
      </div>
    </div>
    <div className="mt-auto flex flex-col items-end">
       <img src={data.images.signature} alt="Signature" className="w-24 h-auto mb-2 opacity-80" />
       <p className="text-right text-xs text-gray-500 leading-tight whitespace-pre-line">{data.text.role}</p>
    </div>
    <div className="absolute bottom-6 right-6 text-gray-300 text-xs">{data.pageNumber}</div>
  </PageContainer>
);

const Intro = ({ data }) => (
  <PageContainer className="bg-white flex flex-col relative">
     <div className="absolute bottom-0 w-full h-[55%] z-0">
         <img src={data.images.main} alt="Intro" className="w-full h-full object-cover" />
         <p className="absolute bottom-4 right-4 text-white/90 text-xs font-serif italic tracking-wider">{data.text.caption}</p>
     </div>
     <div className="relative z-10 p-12 h-[45%] bg-white flex flex-col justify-center">
         <div className="border-l-4 border-expedition-red pl-6 mb-8">
             <h2 className="text-3xl font-serif text-blue-900 mb-2">{data.text.header}</h2>
             <p className="text-sm text-blue-900/60 font-sans uppercase tracking-wider">{data.text.subHeader}</p>
         </div>
         <div className="grid grid-cols-2 gap-8">
             <div className="space-y-4 text-sm font-serif text-gray-600 leading-relaxed">
                 {data.text.body.map((line, i) => (
                     <p key={i}>{line}</p>
                 ))}
             </div>
             <div className="flex items-center justify-center">
                 <div className="text-right">
                     <p className="text-xl font-serif text-blue-300/90 leading-relaxed whitespace-pre-line">
                        {data.text.quote}
                     </p>
                 </div>
             </div>
         </div>
     </div>
      <div className="absolute bottom-6 left-6 text-white/50 text-xs z-20">{data.pageNumber}</div>
  </PageContainer>
);

const VesselSpecs = ({ data }) => (
  <PageContainer className="bg-white p-12 text-arctic-900 font-sans">
      <div className="mb-8">
        <h2 className="text-3xl font-serif text-blue-900 mb-2">{data.text.header}</h2>
        <p className="text-sm text-blue-900/60 font-sans uppercase tracking-wider">{data.text.subHeader}</p>
      </div>

      <div className="space-y-4 text-sm font-serif text-gray-600 leading-relaxed mb-12">
         {data.text.body.map((line, i) => (
             <p key={i}>{line}</p>
         ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-sm">
          <table className="w-full text-xs text-left">
              <thead>
                  <tr className="border-b border-gray-200">
                      <th className="pb-2 font-bold text-gray-500">指标</th>
                      <th className="pb-2 font-bold text-gray-500">特性</th>
                  </tr>
              </thead>
              <tbody className="font-serif text-gray-700">
                  {data.specs.map((row, i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                          <td className="py-2 pr-4 font-bold text-gray-900 whitespace-nowrap">{row.label}</td>
                          <td className="py-2 text-gray-600">{row.value}</td>
                  
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
       <div className="absolute bottom-6 left-6 text-gray-300 text-xs">{data.pageNumber}</div>
  </PageContainer>
);

const Moments = ({ data }) => (
    <PageContainer className="bg-white p-0 relative text-arctic-900">
        <div className="h-[50%] w-full relative">
            <img src={data.images.main} alt="Moments" className="w-full h-full object-cover" />
            <div className="absolute top-12 left-12 text-white drop-shadow-md">
                 <h2 className="text-3xl font-serif mb-1">{data.text.header}</h2>
                 <p className="text-xs uppercase tracking-wider opacity-80">{data.text.subHeader}</p>
            </div>
        </div>
        <div className="h-[50%] p-12 flex flex-col justify-center bg-white relative">
             <div className="absolute right-12 top-[-2rem] bg-white p-4 shadow-lg max-w-xs z-10">
                 <div className="border-l-2 border-expedition-red pl-4">
                     <h3 className="text-lg font-serif text-blue-900 mb-1">| {data.text.sectionTitle}</h3>
                     <p className="text-xs text-gray-500 leading-relaxed">{data.text.sectionBody}</p>
                 </div>
             </div>
             <div className="mt-12 space-y-4 text-sm font-serif text-gray-600 leading-relaxed">
                 <p className="font-bold text-blue-900">{data.text.highlight}</p>
                 {data.text.body.map((line, i) => (
                     <p key={i}>{line}</p>
                 ))}
             </div>
        </div>
         <div className="absolute bottom-6 left-6 text-gray-300 text-xs">{data.pageNumber}</div>
    </PageContainer>
);

const DoubleFeature = ({ data }) => (
    <PageContainer className="bg-white flex flex-col">
        {/* Top Section */}
        <div className="flex-1 relative">
            <img src={data.top.image} alt={data.top.title} className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute bottom-8 right-8 text-right text-white drop-shadow-md">
                <h3 className="text-xl font-serif">| {data.top.title}</h3>
                <p className="text-xs font-serif opacity-90 max-w-[200px] mt-2 leading-relaxed">{data.top.desc}</p>
            </div>
        </div>
        {/* Bottom Section */}
        <div className="flex-1 relative flex flex-row-reverse">
             <div className="w-1/2 relative">
                <img src={data.bottom.image} alt={data.bottom.title} className="absolute inset-0 w-full h-full object-cover" />
             </div>
             <div className="w-1/2 p-8 flex flex-col justify-center bg-white text-arctic-900">
                <h3 className="text-xl font-serif text-blue-900 mb-4">| {data.bottom.title}</h3>
                <div className="text-xs font-serif text-gray-600 space-y-2 leading-relaxed">
                    {data.bottom.body.map((line, i) => <p key={i}>{line}</p>)}
                </div>
             </div>
        </div>
        <div className="absolute bottom-6 right-6 text-gray-300 text-xs">{data.pageNumber}</div>
    </PageContainer>
);

const WhaleWatching = ({ data }) => (
    <PageContainer className="bg-white p-12 flex flex-col">
        <div className="mb-8">
            <h3 className="text-2xl font-serif text-blue-900 mb-4">| {data.text.title}</h3>
            <div className="text-sm font-serif text-gray-600 space-y-4 leading-relaxed">
                {data.text.body.map((line, i) => <p key={i}>{line}</p>)}
            </div>
        </div>
        
        <div className="flex-1 grid grid-cols-1 gap-4">
             <div className="relative h-48 overflow-hidden">
                <img src={data.images[0].src} className="w-full h-full object-cover" />
                <p className="text-[10px] text-gray-400 mt-1">{data.images[0].caption}</p>
             </div>
             <div className="relative h-48 overflow-hidden">
                <img src={data.images[1].src} className="w-full h-full object-cover" />
                <p className="text-[10px] text-gray-400 mt-1">{data.images[1].caption}</p>
             </div>
        </div>
        <div className="absolute bottom-6 left-6 text-gray-300 text-xs">{data.pageNumber}</div>
    </PageContainer>
);

const ImageGrid = ({ data }) => (
    <PageContainer className="bg-white p-12 flex flex-col">
        <div className="mb-8">
            <h3 className="text-2xl font-serif text-blue-900 mb-4">| {data.header}</h3>
            <div className="text-sm font-serif text-gray-600 space-y-2 leading-relaxed">
                {data.body.map((line, i) => <p key={i}>{line}</p>)}
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 flex-1 content-start">
            {data.images.map((img, i) => (
                <div key={i} className={i === 0 ? "col-span-2 aspect-video overflow-hidden" : "aspect-square overflow-hidden"}>
                    <img src={img.src} className="w-full h-full object-cover" />
                    <p className="text-[10px] text-gray-400 mt-1 text-center">{img.caption}</p>
                </div>
            ))}
        </div>
        <div className="absolute bottom-6 left-6 text-gray-300 text-xs">{data.pageNumber}</div>
    </PageContainer>
);

const FeatureGrid = ({ data }) => (
    <PageContainer className="bg-white text-arctic-900">
        <div className="h-[40%] relative">
             <img src={data.heroImage} className="w-full h-full object-cover" />
             <div className="absolute top-8 left-8 text-white drop-shadow-md">
                 <h2 className="text-2xl font-serif font-bold">{data.header}</h2>
                 <p className="text-xs opacity-90">{data.subHeader}</p>
             </div>
        </div>
        <div className="p-8 grid grid-cols-2 gap-6">
            {data.features.map((feat, i) => (
                <div key={i} className="flex flex-col gap-2">
                    <div className="aspect-video overflow-hidden bg-gray-100">
                        <img src={feat.image} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs font-serif text-center text-blue-900">{feat.title}</p>
                    <p className="text-[10px] text-gray-500 leading-tight text-center">{feat.desc}</p>
                </div>
            ))}
        </div>
        <div className="absolute bottom-6 right-6 text-gray-300 text-xs">{data.pageNumber}</div>
    </PageContainer>
);

const CharterInfo = ({ data }) => (
    <PageContainer className="bg-white p-12 flex flex-col justify-center text-center">
         <div className="mb-8">
             <img src={data.heroImage} className="w-full h-48 object-cover mb-6" />
             <div className="border-y border-expedition-red py-4 inline-block px-8">
                 <h2 className="text-xl font-serif text-expedition-red font-bold">{data.title}</h2>
                 <p className="text-sm text-expedition-red">{data.subTitle}</p>
             </div>
         </div>
         <div className="space-y-2 text-sm font-serif text-blue-900 mb-8">
             {data.intro.map((l, i) => <p key={i}>{l}</p>)}
         </div>
         <div className="grid grid-cols-2 gap-8 text-left">
             {data.sections.map((sec, i) => (
                 <div key={i}>
                     <div className="aspect-video bg-gray-100 mb-2 overflow-hidden">
                         <img src={sec.image} className="w-full h-full object-cover" />
                     </div>
                     <h4 className="text-sm font-bold text-blue-900 mb-1">{sec.title}</h4>
                     <p className="text-xs text-gray-500 leading-relaxed">{sec.desc}</p>
                 </div>
             ))}
         </div>
         <div className="absolute bottom-6 right-6 text-gray-300 text-xs">{data.pageNumber}</div>
    </PageContainer>
);

const ActivityGrid = ({ data }) => (
    <PageContainer className="bg-white p-12">
        <h2 className="text-3xl font-serif text-blue-900 mb-2">{data.title}</h2>
        <p className="text-xs uppercase text-gray-400 tracking-widest mb-8">{data.subTitle}</p>
        
        <div className="flex gap-8 h-[75%]">
            {/* Left Column - Custom List if present */}
            {data.customList && (
                <div className="w-1/4 flex flex-col gap-6 pt-4 border-r border-gray-100 pr-4">
                    {data.customList.map((item, i) => (
                         <div key={i} className="text-center">
                             <p className="text-sm font-serif text-gray-600">- {item} -</p>
                         </div>
                    ))}
                </div>
            )}

            {/* Right Column - Images Grid */}
            <div className={`grid gap-4 ${data.customList ? 'w-3/4 grid-cols-2' : 'w-full grid-cols-2'}`}>
                {data.activities.map((act, i) => (
                    <div key={i} className="relative group overflow-hidden h-full">
                        <img src={act.image} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-center">
                            <p className="text-white text-xs font-serif">{act.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="absolute bottom-6 right-6 text-gray-300 text-xs">{data.pageNumber}</div>
    </PageContainer>
);

const TeamPhilosophy = ({ data }) => (
    <PageContainer className="bg-white text-arctic-900">
        <div className="h-[45%] relative">
            <img src={data.heroImage} className="w-full h-full object-cover" />
            <div className="absolute top-8 left-8 text-white">
                <h2 className="text-3xl font-serif">{data.header}</h2>
                <p className="text-sm opacity-80">{data.subHeader}</p>
            </div>
        </div>
        <div className="p-12 flex flex-col h-[55%]">
            <h3 className="text-lg font-serif text-blue-900 mb-6 italic">{data.quote}</h3>
            <div className="flex gap-6">
                <div className="w-2/3 text-xs font-serif text-gray-600 space-y-4 leading-relaxed">
                     {data.body.map((l, i) => <p key={i} className={l.includes('但最坚固') ? 'font-bold text-blue-900' : ''}>{l}</p>)}
                </div>
                <div className="w-1/3">
                    <img src={data.sideImage} className="w-full h-auto object-cover rounded-sm shadow-md" />
                    <p className="text-[10px] text-gray-400 mt-1 text-center">{data.sideCaption}</p>
                </div>
            </div>
        </div>
        <div className="absolute bottom-6 left-6 text-gray-300 text-xs">{data.pageNumber}</div>
    </PageContainer>
);

const TeamBios = ({ data }) => (
    <PageContainer className="bg-white p-12 flex flex-col justify-center">
         {/* Top Section */}
         <div className="flex h-[35%] mb-8">
             {/* Left: Porthole */}
             <div className="w-1/3 flex flex-col items-center">
                 <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-inner mb-2">
                     <img src={data.portholeImage} className="w-full h-full object-cover" />
                 </div>
                 <p className="text-[10px] text-gray-400">帆船舷窗</p>
             </div>
             
             {/* Center: Red Text */}
             <div className="w-1/3 flex items-center justify-center p-4">
                 <div className="border-l-2 border-expedition-red pl-4 py-2">
                     {data.stats.map((s, i) => (
                         <p key={i} className={`font-serif leading-relaxed ${i < 2 ? 'text-expedition-red font-bold text-sm' : 'hidden'}`}>{s}</p>
                     ))}
                 </div>
             </div>

             {/* Right: Zodiac & List */}
             <div className="w-1/3 flex flex-col items-end">
                 <div className="text-right text-[10px] text-gray-600 mb-4 space-y-1">
                     <p className="font-bold text-blue-900 mb-1">| 团队组成</p>
                     {data.stats.slice(2).map((s, i) => (
                         <p key={i}>{s}</p>
                     ))}
                 </div>
                 <div className="w-full h-24 overflow-hidden rounded-sm relative">
                     <img src={data.zodiacImage} className="w-full h-full object-cover" />
                     <p className="absolute bottom-1 right-2 text-white text-[9px] drop-shadow-md">冲锋舟</p>
                 </div>
             </div>
         </div>

         {/* Bottom Section: Members */}
         <div className="space-y-8 mt-auto">
             <div className="border-l-2 border-blue-900 pl-4">
                 <h3 className="text-sm font-bold text-blue-900 mb-4">| 核心成员</h3>
                 {data.members.map((m, i) => (
                     <div key={i} className="flex gap-4 mb-6 last:mb-0">
                         <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
                             <img src={m.image} className="w-full h-full object-cover" />
                         </div>
                         <div>
                             <p className="text-sm font-bold text-blue-900">{m.name} <span className="font-normal text-xs text-gray-500">{m.title}</span></p>
                             <ul className="text-[10px] text-gray-600 mt-1 space-y-1 list-disc list-inside">
                                 {m.desc.map((d, j) => <li key={j}>{d}</li>)}
                             </ul>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
         <div className="absolute bottom-6 right-6 text-gray-300 text-xs">{data.pageNumber}</div>
    </PageContainer>
);

const Itinerary = ({ data }) => (
    <PageContainer className="bg-white flex">
        <div className="w-1/2 p-8 bg-gray-50 flex flex-col">
            <h2 className="text-2xl font-serif text-blue-900 mb-1">{data.header}</h2>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">{data.subHeader}</p>
            <div className="space-y-6 overflow-y-auto pr-2 scrollbar-thin">
                {data.days.map((day, i) => (
                    <div key={i} className="relative pl-6 border-l border-gray-300">
                        <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-expedition-red rounded-full"></div>
                        <p className="text-[10px] font-bold text-expedition-red tracking-widest uppercase">DAY {day.day} | {day.loc}</p>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">{day.desc}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-1/2 relative">
             <div className="h-1/2 w-full">
                 <img src={data.images[0].src} className="w-full h-full object-cover" />
             </div>
             <div className="h-1/2 w-full bg-white p-4 flex items-center justify-center">
                 <img src={data.images[1].src} className="w-full h-auto opacity-80" />
             </div>
        </div>
        <div className="absolute bottom-6 left-6 text-gray-300 text-xs">{data.pageNumber}</div>
    </PageContainer>
);

const BackCover = ({ data }) => (
  <PageContainer className="bg-white flex flex-col text-arctic-900 h-full relative px-8 py-5">
     {/* Top Section - Compact */}
     <div className="flex flex-col items-center z-10 shrink-0">
         <div className="text-center space-y-0.5 mb-1">
             <p className="text-base font-sans tracking-[0.1em] ml-1 text-gray-900">
                <span className="font-bold">鲸 湾</span> 探 索
             </p>
             <p className="text-[10px] tracking-[0.15em] text-gray-400" style={{ transform: 'scaleY(1.15)', transformOrigin: 'top center' }}>
                [ <span className="font-light text-gray-500">Whalebay</span> <span className="font-bold text-gray-800">Expeditions</span> ]
             </p>
         </div>
         
         <div className="w-24 h-24 p-1 mt-2 mb-2">
             {/* QR Code */}
             <img src="/assets/images/img_p23_3.png" className="w-full h-full object-contain" alt="QR Code" /> 
         </div>
         
         <div className="text-center space-y-0.5">
             <p className="text-lg font-sans font-light text-[#94a3b8] tracking-widest">2026</p>
             <p className="text-[10px] tracking-[0.3em] text-[#94a3b8] font-light">北极私属航季</p>
         </div>
     </div>
     
     {/* Middle Image Section - Fixed Height */}
     <div className="w-full relative h-32 my-4 overflow-hidden shrink-0">
          <img src={data.image} className="absolute inset-0 w-full h-full object-cover object-center" alt="Sailing Boat" />
     </div>

     {/* Bottom Text Section */}
     <div className="shrink-0 z-10 flex flex-col justify-end mt-auto">
         <div className="text-left text-[11px] font-serif text-gray-700 space-y-1 leading-relaxed mb-4">
             <p>这一程，</p>
             <p>是一段轻拿轻放的史诗 ——</p>
             <p>留给下一顿年夜饭桌上的故事......</p>
         </div>

         <div className="space-y-3">
             <div className="text-[9px] text-[#8B9BB4] space-y-1 leading-relaxed font-light">
                  <div className="space-y-0.5">
                    <p>仅四期航次，每期仅八至十二席。</p>
                    <p>你的故事，准备好在世界尽头书写了吗？</p>
                  </div>
                  <div className="font-sans tracking-wide opacity-90 pt-2">
                    <p>Only four departures. Only eight to twelve souls per voyage.</p>
                    <p>Is your story ready to be written on the edge of the world?</p>
                  </div>
             </div>
             
             <div className="border-t border-gray-200 pt-3">
                <p className="text-[9px] text-gray-500 tracking-wider font-sans">
                    上海鲸湾探索邮轮管理有限公司 <span className="ml-3">Tel: 18800381762</span>
                </p>
             </div>
         </div>
     </div>
  </PageContainer>
);

const PageRenderer = ({ page }) => {
  switch (page.type) {
    case 'cover': return <Cover data={page} />;
    case 'full-image': return <FullImage data={page} />;
    case 'diary': return <Diary data={page} />;
    case 'intro': return <Intro data={page} />;
    case 'vessel-specs': return <VesselSpecs data={page} />;
    case 'moments': return <Moments data={page} />;
    case 'double-feature': return <DoubleFeature data={page} />;
    case 'whale-watching': return <WhaleWatching data={page} />;
    case 'image-grid': return <ImageGrid data={page} />;
    case 'feature-grid': return <FeatureGrid data={page} />;
    case 'charter-info': return <CharterInfo data={page} />;
    case 'activity-grid': return <ActivityGrid data={page} />;
    case 'team-philosophy': return <TeamPhilosophy data={page} />;
    case 'team-bios': return <TeamBios data={page} />;
    case 'itinerary': return <Itinerary data={page} />;
    case 'back-cover': return <BackCover data={page} />;
    default: return <PageContainer><div className="p-10">Unknown Page Type: {page.type}</div></PageContainer>;
  }
};

export default PageRenderer;
