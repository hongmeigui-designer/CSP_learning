// 学习材料数据库
const LEARNING_DATA = {
    economy: {
        name: "经济领域",
        texts: [
            {
                id: "eco1",
                title: "供给与需求",
                chinese: "在市场上，一件商品的价格并不是卖家随意决定的，而是由供给和需求共同作用的结果。\n\n需求指的是消费者在某一价格水平下愿意并且有能力购买的数量。一般来说，价格越高，消费者的购买意愿越低，需求量就越小；价格下降，需求量上升。这种反向关系被称为需求定律。\n\n供给则相反。价格上涨时，生产者能获得更多利润，因此愿意扩大生产，供给量随之增加。\n\n当供给量和需求量相等时，市场达到均衡，这时的价格叫做均衡价格。如果实际价格高于均衡价格，就会出现供过于求，卖不出去的商品越积越多，卖家不得不降价；如果价格低于均衡价格，就会供不应求，消费者之间的竞争会把价格推上去。\n\n因此，价格在市场中起着调节作用：它像一只\"看不见的手\"，把资源引导到最需要的地方去。不过，这一机制的前提是市场足够自由——一旦政府限价或者出现垄断，价格信号就会失真。",
                english: "In the market, the price of a commodity is not arbitrarily determined by sellers, but is the result of the combined effect of supply and demand.\n\nDemand refers to the quantity that consumers are willing and able to purchase at a certain price level. Generally speaking, the higher the price, the lower consumers' willingness to buy, and the smaller the quantity demanded; when prices fall, quantity demanded rises. This inverse relationship is called the law of demand.\n\nSupply is the opposite. When prices rise, producers can make more profits, so they are willing to expand production, and the quantity supplied increases accordingly.\n\nWhen the quantity supplied equals the quantity demanded, the market reaches equilibrium, and the price at this time is called the equilibrium price. If the actual price is higher than the equilibrium price, there will be oversupply, unsold goods will pile up, and sellers will have to cut prices; if the price is lower than the equilibrium price, there will be shortage, and competition among consumers will push prices up.\n\nTherefore, price plays a regulatory role in the market: it is like an \"invisible hand\" that guides resources to where they are most needed. However, the premise of this mechanism is that the market is sufficiently free—once the government imposes price limits or a monopoly appears, price signals will be distorted.",
                vocabulary: [
                    {word: "供给", pinyin: "gōngjǐ", meaning: "生产者在某价格下愿意出售的数量", english: "supply", note: "⚠️ 同形异义"},
                    {word: "需求", pinyin: "xūqiú", meaning: "消费者愿意且有能力购买的数量", english: "demand", note: "⚠️ 同形异义"},
                    {word: "均衡", pinyin: "jūnhéng", meaning: "供求相等的稳定状态", english: "equilibrium", note: "⚠️ 同形异义"},
                    {word: "利润", pinyin: "lìrùn", meaning: "收入减去成本后的余额", english: "profit", note: ""},
                    {word: "意愿", pinyin: "yìyuàn", meaning: "主观上想做某事的倾向", english: "willingness", note: ""},
                    {word: "供过于求", pinyin: "gōngguòyúqiú", meaning: "供给量大于需求量", english: "oversupply", note: ""},
                    {word: "供不应求", pinyin: "gōngbùyìngqiú", meaning: "需求量大于供给量", english: "shortage", note: ""},
                    {word: "垄断", pinyin: "lǒngduàn", meaning: "独占市场、排除竞争", english: "monopoly", note: ""},
                    {word: "失真", pinyin: "shīzhēn", meaning: "偏离真实情况", english: "distortion", note: ""}
                ],
                exercises: {
                    matching: [
                        {cn: "供给", en: "supply"},
                        {cn: "需求", en: "demand"},
                        {cn: "均衡", en: "equilibrium"},
                        {cn: "供过于求", en: "oversupply"},
                        {cn: "供不应求", en: "shortage"}
                    ],
                    choice: {
                        question: "经济学中的\"需求\"与日常说的\"需要\"最大的区别是：",
                        options: [
                            "A. 需求指的是数量更大的需要",
                            "B. 需求必须同时具备购买意愿和购买能力",
                            "C. 需求只用于商品，不用于服务",
                            "D. 两者完全相同"
                        ],
                        answer: 1
                    },
                    fillBlanks: [
                        {question: "春节前后花价大幅上涨，是因为买花的人太多，市场出现了______。", answer: "供不应求"},
                        {question: "如果市场上只有一家企业提供某服务，别的企业进不来，这种情况叫______。", answer: "垄断"}
                    ]
                }
            },
            {
                id: "eco2",
                title: "市场竞争的类型",
                chinese: "在现实中，不同行业面对的竞争状况并不相同。经济学家根据竞争程度的高低，把市场分成几种类型。\n\n第一种是完全竞争，比如农产品市场：卖家很多，产品几乎没有差别，任何一家企业都没有定价权，只能接受市场价格。\n\n第二种是垄断竞争，比如餐饮业：企业数量多，但每家都通过品牌、口味等方式做差异化，因此在一定范围内拥有一点定价权。\n\n第三种是寡头市场，比如手机行业：只有少数几家大企业占据了大部分市场份额，它们的定价决策会互相影响。\n\n第四种是完全垄断，市场上只有一家企业——前面学过的\"垄断\"就属于这一种，通常是因为存在很高的进入壁垒，新企业很难加入竞争。\n\n竞争程度越低，企业就越容易主导价格，消费者的选择也就越少。因此，政府往往会通过法律限制垄断行为，以保护市场正常的供求关系和消费者利益。",
                english: "In reality, different industries face different competitive situations. Economists divide markets into several types based on the degree of competition.\n\nThe first type is perfect competition, such as the agricultural product market: there are many sellers, products are almost identical, no single company has pricing power, and they can only accept market prices.\n\nThe second type is monopolistic competition, such as the catering industry: there are many enterprises, but each differentiates itself through brands, flavors, etc., thus having some pricing power within a certain range.\n\nThe third type is oligopoly, such as the mobile phone industry: only a few large companies occupy most of the market share, and their pricing decisions affect each other.\n\nThe fourth type is complete monopoly, where there is only one enterprise in the market—the \"monopoly\" we learned earlier belongs to this type, usually because there are high barriers to entry, making it difficult for new enterprises to join the competition.\n\nThe lower the degree of competition, the easier it is for enterprises to dominate prices, and the fewer choices consumers have. Therefore, governments often restrict monopolistic behavior through laws to protect normal supply-demand relationships in the market and consumer interests.",
                vocabulary: [
                    {word: "完全竞争", pinyin: "wánquán jìngzhēng", meaning: "卖家众多、产品无差别、无定价权的市场", english: "perfect competition", note: ""},
                    {word: "垄断竞争", pinyin: "lǒngduàn jìngzhēng", meaning: "企业多但产品有差异化的市场", english: "monopolistic competition", note: "复现\"垄断\""},
                    {word: "寡头", pinyin: "guǎtóu", meaning: "少数几家企业主导的市场", english: "oligopoly", note: ""},
                    {word: "市场份额", pinyin: "shìchǎng fèn'é", meaning: "一家企业占市场总量的比例", english: "market share", note: ""},
                    {word: "进入壁垒", pinyin: "jìnrù bìlěi", meaning: "阻止新企业加入市场的因素", english: "barriers to entry", note: ""},
                    {word: "定价权", pinyin: "dìngjià quán", meaning: "自主决定商品价格的能力", english: "pricing power", note: ""},
                    {word: "差异化", pinyin: "chāyìhuà", meaning: "使产品有别于竞争对手", english: "differentiation", note: ""},
                    {word: "主导", pinyin: "zhǔdǎo", meaning: "在某方面起决定性作用", english: "dominate / lead", note: "可迁移：主导地位"}
                ],
                exercises: {
                    matching: [
                        {cn: "完全竞争", en: "perfect competition"},
                        {cn: "寡头", en: "oligopoly"},
                        {cn: "进入壁垒", en: "barriers to entry"},
                        {cn: "定价权", en: "pricing power"},
                        {cn: "差异化", en: "differentiation"}
                    ],
                    choice: {
                        question: "手机行业只有少数几家大企业占据大部分市场，这属于哪种竞争类型？",
                        options: [
                            "A. 完全竞争",
                            "B. 垄断竞争",
                            "C. 寡头",
                            "D. 完全垄断"
                        ],
                        answer: 2
                    },
                    fillBlanks: [
                        {question: "餐饮企业虽然数量多，但通过口味、品牌做出______，从而拥有一定的定价权。", answer: "差异化"},
                        {question: "新企业很难进入某个行业，是因为存在很高的______。", answer: "进入壁垒"}
                    ]
                }
            },
            {
                id: "eco3",
                title: "什么是GDP",
                chinese: "要了解一个国家的经济发展状况，最常用的指标就是国内生产总值，也就是我们常说的GDP。\n\nGDP指的是一个国家在一定时期内（通常是一年）生产的全部产品和服务的价值总量。GDP越高，通常说明这个国家的经济规模越大。\n\n但只看总量并不够全面，因为人口多的国家总量容易偏高。因此经济学家常常计算人均GDP，也就是总量除以人口数，用它来比较不同国家居民的平均生活水平。\n\n除此之外，GDP每年的变化幅度也很重要，这就是增长率。增长率为正，说明经济在扩大；如果连续下降，则可能意味着经济陷入困难。\n\n在核算GDP时，经济学家会把整个经济分成不同的产业：第一产业（农业）、第二产业（工业）、第三产业（服务业）。观察各产业占比的变化，可以反映一个国家经济结构的转型——比如从以农业为主，逐渐转向以服务业为主。",
                english: "To understand a country's economic development, the most commonly used indicator is Gross Domestic Product, commonly known as GDP.\n\nGDP refers to the total value of all goods and services produced within a country during a certain period (usually a year). The higher the GDP, generally the larger the country's economic scale.\n\nBut looking only at total volume is not comprehensive enough, because countries with large populations tend to have higher totals. Therefore, economists often calculate per capita GDP, which is the total divided by population, to compare the average living standards of residents in different countries.\n\nIn addition, the annual change in GDP is also very important—this is the growth rate. A positive growth rate means the economy is expanding; if it declines continuously, it may mean the economy is in trouble.\n\nWhen calculating GDP, economists divide the entire economy into different industries: primary industry (agriculture), secondary industry (manufacturing), and tertiary industry (services). Observing changes in the proportion of each industry can reflect the transformation of a country's economic structure—for example, gradually shifting from being agriculture-dominated to service-dominated.",
                vocabulary: [
                    {word: "国内生产总值", pinyin: "guónèi shēngchǎn zǒngzhí", meaning: "一国一定时期内生产的全部产品与服务价值", english: "GDP", note: "缩写 GDP"},
                    {word: "总量", pinyin: "zǒngliàng", meaning: "全部数量的总和", english: "aggregate / total", note: "可迁移"},
                    {word: "人均", pinyin: "rénjūn", meaning: "按人口平均计算", english: "per capita", note: ""},
                    {word: "增长率", pinyin: "zēngzhǎng lǜ", meaning: "某指标在一定时期内增长的比例", english: "growth rate", note: ""},
                    {word: "核算", pinyin: "hésuàn", meaning: "系统地计算、统计", english: "calculate / account for", note: ""},
                    {word: "产业", pinyin: "chǎnyè", meaning: "生产同类产品或服务的行业总称", english: "industry (sector)", note: "⚠️ 与\"行业\"相近但更宏观"},
                    {word: "反映", pinyin: "fǎnyìng", meaning: "通过某现象显示出内在情况", english: "reflect", note: "高频学术通用词"},
                    {word: "转型", pinyin: "zhuǎnxíng", meaning: "从一种结构或模式转变为另一种", english: "transformation", note: ""},
                    {word: "规模", pinyin: "guīmó", meaning: "事物所具有的形式、格局和范围的大小", english: "scale", note: ""}
                ],
                exercises: {
                    matching: [
                        {cn: "人均", en: "per capita"},
                        {cn: "增长率", en: "growth rate"},
                        {cn: "产业", en: "industry"},
                        {cn: "转型", en: "transformation"},
                        {cn: "规模", en: "scale"}
                    ],
                    choice: {
                        question: "为什么经济学家在比较不同国家生活水平时，常用\"人均GDP\"而不是GDP总量？",
                        options: [
                            "A. 人均GDP计算更简单",
                            "B. 总量容易受人口数量影响，人均更能反映个人平均水平",
                            "C. 人均GDP不需要核算产业结构",
                            "D. 两者其实没有区别"
                        ],
                        answer: 1
                    },
                    fillBlanks: [
                        {question: "一个国家的经济结构从以农业为主转向以服务业为主，这个过程叫做产业______。", answer: "转型"},
                        {question: "GDP每年增长或下降的比例，叫做______。", answer: "增长率"}
                    ]
                }
            },
            {
                id: "eco4",
                title: "物价水平与通货膨胀",
                chinese: "在宏观经济中，除了GDP，另一个人们非常关心的指标是物价水平——也就是市场上商品和服务价格的总体高低。\n\n当物价水平在一段时间内持续上涨，就叫做通货膨胀。经济学家通常用消费者价格指数来衡量通货膨胀的程度：如果这个指数上升，说明同样一笔钱能买到的东西变少了，也就是居民的购买力下降了。\n\n通货膨胀并不总是坏事。温和的通货膨胀（比如每年百分之二左右）通常被认为有利于经济增长；但如果涨幅过大，变成恶性通货膨胀，就会严重扰乱市场秩序，让价格信号失真，企业和消费者都难以做出正确的决策。\n\n与通货膨胀相反的情况叫做通货紧缩，也就是物价持续下跌。这听起来对消费者有利，但往往伴随着经济衰退，同样值得警惕。\n\n因此，各国政府通常都会努力将物价波动控制在一个温和、稳定的范围内。",
                english: "In macroeconomics, besides GDP, another indicator that people care about greatly is the price level—the overall level of prices of goods and services in the market.\n\nWhen the price level continues to rise over a period of time, it is called inflation. Economists usually use the Consumer Price Index to measure the degree of inflation: if this index rises, it means that the same amount of money can buy fewer things, that is, residents' purchasing power has declined.\n\nInflation is not always a bad thing. Mild inflation (such as around 2% per year) is generally considered beneficial to economic growth; but if the increase is too large, turning into hyperinflation, it will seriously disrupt market order, distort price signals, making it difficult for enterprises and consumers to make correct decisions.\n\nThe opposite situation to inflation is deflation, which is a continuous decline in prices. This sounds beneficial to consumers, but it is often accompanied by economic recession and is equally worthy of vigilance.\n\nTherefore, governments around the world usually strive to control price fluctuations within a mild and stable range.",
                vocabulary: [
                    {word: "物价水平", pinyin: "wùjià shuǐpíng", meaning: "市场商品与服务价格的总体高低", english: "price level", note: ""},
                    {word: "通货膨胀", pinyin: "tōnghuò péngzhàng", meaning: "物价持续上涨的现象", english: "inflation", note: ""},
                    {word: "消费者价格指数", pinyin: "xiāofèizhě jiàgé zhǐshù", meaning: "衡量物价变化的指标", english: "CPI", note: "课堂常直接说 CPI"},
                    {word: "购买力", pinyin: "gòumǎilì", meaning: "一定量货币能购买商品的能力", english: "purchasing power", note: ""},
                    {word: "温和", pinyin: "wēnhé", meaning: "程度适中、不剧烈", english: "mild / moderate", note: "⚠️ 日常义=性格温和"},
                    {word: "涨幅", pinyin: "zhǎngfú", meaning: "上涨的幅度", english: "rate of increase", note: ""},
                    {word: "恶性", pinyin: "èxìng", meaning: "情况严重、发展趋于失控", english: "malignant / severe", note: "⚠️ 日常义见\"恶性肿瘤\""},
                    {word: "通货紧缩", pinyin: "tōnghuò jǐnsuō", meaning: "物价持续下跌的现象", english: "deflation", note: "与通货膨胀对照记"},
                    {word: "波动", pinyin: "bōdòng", meaning: "数值不稳定地上下变化", english: "fluctuation", note: "高频学术通用词"}
                ],
                exercises: {
                    matching: [
                        {cn: "通货膨胀", en: "inflation"},
                        {cn: "购买力", en: "purchasing power"},
                        {cn: "通货紧缩", en: "deflation"},
                        {cn: "波动", en: "fluctuation"},
                        {cn: "涨幅", en: "rate of increase"}
                    ],
                    choice: {
                        question: "为什么\"恶性通货膨胀\"对经济有严重危害？",
                        options: [
                            "A. 因为物价完全不变，市场失去活力",
                            "B. 因为价格信号严重失真，企业和消费者难以做出正确决策",
                            "C. 因为购买力会大幅上升",
                            "D. 因为它会导致通货紧缩"
                        ],
                        answer: 1
                    },
                    fillBlanks: [
                        {question: "物价水平持续下跌、通常伴随经济衰退的现象叫做______。", answer: "通货紧缩"},
                        {question: "通货膨胀过高会让市场价格信号______，扰乱企业和消费者的判断。", answer: "失真"}
                    ]
                }
            },
            {
                id: "eco5",
                title: "宏观调控：货币政策与财政政策",
                chinese: "面对经济过热或衰退，政府通常不会袖手旁观，而是通过宏观调控来影响经济运行，其中最主要的两种手段是货币政策和财政政策。\n\n货币政策由央行（中央银行）负责实施。央行对货币发行拥有垄断权，可以通过调整利率来影响经济：当经济增长过快、通货膨胀压力上升时，央行会提高利率，抑制借贷和消费，这叫紧缩性货币政策；当经济增长率过低时，央行则会降低利率，鼓励借贷和投资，这叫扩张性货币政策。\n\n财政政策则由政府直接控制，主要通过调整财政支出和税收来实现。政府增加财政支出或降低税收，可以刺激经济，属于扩张性财政政策；反之，减少支出或提高税收，则属于紧缩性财政政策。\n\n这两种政策常常配合使用，共同帮助经济在增长与稳定物价之间保持均衡，避免经济陷入过热或衰退的极端状态。",
                english: "Faced with economic overheating or recession, governments usually do not stand idly by, but influence economic operation through macroeconomic control. The two most important means are monetary policy and fiscal policy.\n\nMonetary policy is implemented by the central bank. The central bank has a monopoly on currency issuance and can influence the economy by adjusting interest rates: when economic growth is too fast and inflationary pressure rises, the central bank will raise interest rates to curb borrowing and consumption, which is called contractionary monetary policy; when the economic growth rate is too low, the central bank will lower interest rates to encourage borrowing and investment, which is called expansionary monetary policy.\n\nFiscal policy is directly controlled by the government, mainly achieved by adjusting fiscal expenditure and taxation. Increasing fiscal expenditure or reducing taxes can stimulate the economy, which is expansionary fiscal policy; conversely, reducing expenditure or raising taxes is contractionary fiscal policy.\n\nThese two policies are often used together to help the economy maintain a balance between growth and price stability, avoiding the extreme states of overheating or recession.",
                vocabulary: [
                    {word: "宏观调控", pinyin: "hóngguān tiáokòng", meaning: "政府对宏观经济运行的干预与调节", english: "macroeconomic control", note: ""},
                    {word: "货币政策", pinyin: "huòbì zhèngcè", meaning: "央行通过货币手段调节经济的政策", english: "monetary policy", note: ""},
                    {word: "财政政策", pinyin: "cáizhèng zhèngcè", meaning: "政府通过支出与税收调节经济的政策", english: "fiscal policy", note: ""},
                    {word: "央行", pinyin: "yāngháng", meaning: "国家负责货币发行与调控的银行", english: "central bank", note: "\"中央银行\"的简称"},
                    {word: "利率", pinyin: "lìlǜ", meaning: "借贷资金所收取或支付的比率", english: "interest rate", note: ""},
                    {word: "扩张性", pinyin: "kuòzhāngxìng", meaning: "旨在刺激经济增长的（政策）", english: "expansionary", note: ""},
                    {word: "紧缩性", pinyin: "jǐnsuōxìng", meaning: "旨在抑制经济过热的（政策）", english: "contractionary", note: "与\"扩张性\"对照记"},
                    {word: "财政支出", pinyin: "cáizhèng zhīchū", meaning: "政府用于公共事务的资金支出", english: "fiscal expenditure", note: ""},
                    {word: "税收", pinyin: "shuìshōu", meaning: "政府依法向公民和企业征收的资金", english: "tax revenue", note: ""}
                ],
                exercises: {
                    matching: [
                        {cn: "央行", en: "central bank"},
                        {cn: "利率", en: "interest rate"},
                        {cn: "扩张性", en: "expansionary"},
                        {cn: "紧缩性", en: "contractionary"},
                        {cn: "税收", en: "tax revenue"}
                    ],
                    choice: {
                        question: "当通货膨胀压力上升、经济增长过快时，央行通常会采取什么措施？",
                        options: [
                            "A. 降低利率，鼓励借贷",
                            "B. 提高利率，抑制借贷和消费",
                            "C. 增加财政支出",
                            "D. 降低税收"
                        ],
                        answer: 1
                    },
                    fillBlanks: [
                        {question: "央行通过降低利率来刺激经济增长，这属于______货币政策。", answer: "扩张性"},
                        {question: "政府增加支出或降低税收以刺激经济，属于扩张性______。", answer: "财政政策"}
                    ]
                }
            }
        ]
    },
    medical: {
        name: "医学领域",
        texts: [
            {
                id: "med1",
                title: "人体与健康的基本概念",
                chinese: "人体是一个非常复杂的系统。为了维持正常的生命活动，人体由许多不同的器官组成，比如心脏、肺、肝脏和肾脏。这些器官并不是独立工作的，而是按照功能组合成不同的系统，比如呼吸系统、消化系统和循环系统。\n\n在更微观的层面，每个器官都是由组织构成的——组织是由结构和功能相似的细胞聚集在一起形成的。不同的组织按照一定方式组合，就形成了具有特定机能的器官。\n\n人体还有一套重要的防御机制，叫做免疫系统，它能够识别并清除进入体内的细菌、病毒等有害物质，保护身体健康。\n\n此外，人体每时每刻都在进行代谢活动：把食物转化为能量，同时排出体内不需要的废物。这种生理过程如果被打乱，就可能引发疾病。\n\n总的来说，健康指的是人体各个系统能够保持稳态——也就是在外界环境不断变化的情况下，仍然维持内部环境的相对稳定。",
                english: "The human body is a very complex system. To maintain normal life activities, the human body is composed of many different organs, such as the heart, lungs, liver, and kidneys. These organs do not work independently; instead, they are grouped into different systems according to their functions, such as the respiratory system, digestive system, and circulatory system.\n\nAt a more microscopic level, each organ is composed of tissues—tissues are formed by cells with similar structures and functions gathering together. Different tissues combine in specific ways to form organs with specific functions.\n\nThe human body also has an important defense mechanism called the immune system, which can recognize and eliminate harmful substances such as bacteria and viruses that enter the body, protecting physical health.\n\nIn addition, the human body carries out metabolic activities every moment: converting food into energy while eliminating unnecessary waste from the body. If this physiological process is disrupted, it may cause disease.\n\nGenerally speaking, health means that all systems of the human body can maintain homeostasis—that is, maintaining relative stability of the internal environment despite constant changes in the external environment.",
                vocabulary: [
                    {word: "器官", pinyin: "qìguān", meaning: "心脏、肺等具有特定功能的身体结构", english: "organ", note: ""},
                    {word: "组织", pinyin: "zǔzhī", meaning: "由结构相似细胞构成的生物学结构", english: "tissue", note: "⚠️ 同形异义：日常义=组织活动"},
                    {word: "系统", pinyin: "xìtǒng", meaning: "若干器官按功能组成的整体", english: "(body) system", note: "日常义基本相同"},
                    {word: "机能", pinyin: "jīnéng", meaning: "器官或系统所具有的功能", english: "(physiological) function", note: ""},
                    {word: "免疫", pinyin: "miǎnyì", meaning: "识别、清除有害物质的防御能力", english: "immunity", note: ""},
                    {word: "代谢", pinyin: "dàixiè", meaning: "转化能量、排出废物的生理过程", english: "metabolism", note: ""},
                    {word: "生理", pinyin: "shēnglǐ", meaning: "与身体机能运作有关的", english: "physiological", note: "高频学术通用词"},
                    {word: "稳态", pinyin: "wěntài", meaning: "内部环境保持相对稳定的状态", english: "homeostasis", note: "较抽象，建议放慢讲解"}
                ],
                exercises: {
                    matching: [
                        {cn: "器官", en: "organ"},
                        {cn: "免疫", en: "immunity"},
                        {cn: "代谢", en: "metabolism"},
                        {cn: "组织", en: "tissue"},
                        {cn: "稳态", en: "homeostasis"}
                    ],
                    choice: {
                        question: "医学中的\"组织\"和日常说的\"组织一场比赛\"中的\"组织\"意思一样吗？",
                        options: [
                            "A. 一样，都指安排、策划某件事",
                            "B. 不一样，医学中\"组织\"指由细胞构成的生物学结构",
                            "C. 一样，都指器官",
                            "D. 医学中不使用\"组织\"这个词"
                        ],
                        answer: 1
                    },
                    fillBlanks: [
                        {question: "人体识别并清除细菌、病毒等有害物质的防御系统叫做______系统。", answer: "免疫"},
                        {question: "人体把食物转化为能量、同时排出废物的生理过程叫做______。", answer: "代谢"}
                    ]
                }
            },
            {
                id: "med2",
                title: "常见疾病与症状",
                chinese: "当人体的正常机能受到破坏时，就会出现疾病。判断一个人是否患病，通常要看他有没有症状——也就是身体感觉到的不适，比如发烧、咳嗽、疼痛等。\n\n导致疾病发生的原因叫做病因。病因多种多样，有些疾病是由细菌、病毒引起的，具有传染性，可以通过接触、空气等方式在人与人之间传播；也有些疾病与遗传、生活习惯有关，并不传染。\n\n按照发展速度和持续时间，疾病还可以分为急性和慢性两类。急性疾病通常发病快、病程短，比如感冒；慢性疾病则发展缓慢，往往需要长期治疗和管理，比如高血压、糖尿病。\n\n对于一些传染性疾病，从病原体进入人体到出现明显症状之间，往往有一段潜伏期，在这段时间里，患者可能已经具有传染性，但自己却没有察觉。\n\n如果疾病没有得到及时治疗，病情可能恶化，甚至引发并发症——也就是在原有疾病基础上继发的新问题。",
                english: "When the body's normal functions are disrupted, disease occurs. To determine whether a person is ill, doctors usually look for symptoms—that is, physical discomfort the person feels, such as fever, cough, pain, etc.\n\nThe cause of a disease is called its etiology. There are various causes: some diseases are caused by bacteria or viruses, are contagious, and can spread between people through contact, air, etc.; other diseases are related to genetics or lifestyle habits and are not contagious.\n\nAccording to their development speed and duration, diseases can also be divided into two categories: acute and chronic. Acute diseases usually onset quickly and have a short course, such as the common cold; chronic diseases develop slowly and often require long-term treatment and management, such as hypertension and diabetes.\n\nFor some infectious diseases, there is often an incubation period between when the pathogen enters the body and when obvious symptoms appear. During this time, the patient may already be contagious without being aware of it.\n\nIf a disease is not treated in time, the condition may worsen and even cause complications—that is, new problems that develop secondary to the original disease.",
                vocabulary: [
                    {word: "症状", pinyin: "zhèngzhuàng", meaning: "身体感觉到的不适表现", english: "symptom", note: ""},
                    {word: "病因", pinyin: "bìngyīn", meaning: "导致疾病发生的原因", english: "cause / etiology", note: ""},
                    {word: "传染", pinyin: "chuánrǎn", meaning: "疾病在人与人之间传播", english: "infectious / contagious", note: ""},
                    {word: "急性", pinyin: "jíxìng", meaning: "发病快、病程短的（疾病）", english: "acute", note: ""},
                    {word: "慢性", pinyin: "mànxìng", meaning: "发展缓慢、需长期治疗的（疾病）", english: "chronic", note: "与\"急性\"对照记"},
                    {word: "潜伏期", pinyin: "qiánfúqī", meaning: "病原体入侵到出现症状之间的时间", english: "incubation period", note: ""},
                    {word: "恶化", pinyin: "èhuà", meaning: "病情向更严重的方向发展", english: "worsen / deteriorate", note: "与经济文本\"恶性\"同一语素"},
                    {word: "并发症", pinyin: "bìngfāzhèng", meaning: "在原有疾病基础上继发的新问题", english: "complication", note: ""}
                ],
                exercises: {
                    matching: [
                        {cn: "症状", en: "symptom"},
                        {cn: "传染", en: "infectious"},
                        {cn: "急性", en: "acute"},
                        {cn: "慢性", en: "chronic"},
                        {cn: "并发症", en: "complication"}
                    ],
                    choice: {
                        question: "感冒发病快、病程短，属于哪一类疾病？",
                        options: [
                            "A. 慢性",
                            "B. 急性",
                            "C. 传染性",
                            "D. 并发症"
                        ],
                        answer: 1
                    },
                    fillBlanks: [
                        {question: "从病原体进入人体到出现症状之间的这段时间叫做______。", answer: "潜伏期"},
                        {question: "疾病没有及时治疗，病情可能会______，甚至引发并发症。", answer: "恶化"}
                    ]
                }
            },
            {
                id: "med3",
                title: "疾病的诊断与治疗",
                chinese: "当患者因为症状到医院就诊时，医生首先要做的是诊断——也就是根据症状、体征和各项检查结果，判断患者患的是什么疾病。\n\n为了做出准确诊断，医生通常需要安排化验，比如血液化验、尿液化验，通过检测体内各项指标来获取客观依据。所有的检查结果和诊疗过程都会被记录在病历中，方便医生和患者今后查阅。\n\n确诊之后，医生会根据病情开具处方，说明患者需要服用哪些药物、剂量是多少。对于一些无法通过药物治愈的疾病，则可能需要进行手术治疗。\n\n治疗结束后，患者通常还需要经历一段康复期，逐渐恢复身体机能。医生也会根据疾病类型和治疗效果，对患者的预后做出判断——也就是预测疾病未来的发展趋势和恢复情况。\n\n对于慢性疾病患者，医生通常会要求定期复诊，以便及时调整治疗方案，防止病情恶化。",
                english: "When patients come to the hospital because of symptoms, the first thing doctors do is make a diagnosis—that is, determine what disease the patient has based on symptoms, signs, and various test results.\n\nTo make an accurate diagnosis, doctors usually need to arrange lab tests, such as blood tests and urine tests, to obtain objective evidence by detecting various indicators in the body. All test results and the diagnosis and treatment process will be recorded in the medical record for future reference by doctors and patients.\n\nAfter confirming the diagnosis, the doctor will prescribe medication based on the patient's condition, specifying which drugs the patient needs to take and the dosage. For some diseases that cannot be cured by medication, surgical treatment may be required.\n\nAfter treatment, patients usually need to go through a rehabilitation period to gradually recover physical functions. Doctors will also make a prognosis for patients based on disease type and treatment effect—that is, predict the future development trend and recovery of the disease.\n\nFor patients with chronic diseases, doctors usually require regular follow-up visits to adjust treatment plans in time and prevent the condition from worsening.",
                vocabulary: [
                    {word: "诊断", pinyin: "zhěnduàn", meaning: "根据症状和检查判断疾病种类", english: "diagnosis", note: ""},
                    {word: "化验", pinyin: "huàyàn", meaning: "通过检测体内指标辅助诊断", english: "lab test", note: ""},
                    {word: "病历", pinyin: "bìnglì", meaning: "记录诊疗过程的档案", english: "medical record", note: ""},
                    {word: "处方", pinyin: "chǔfāng", meaning: "医生开具的用药说明", english: "prescription", note: ""},
                    {word: "手术", pinyin: "shǒushù", meaning: "通过外科操作进行的治疗", english: "surgery", note: ""},
                    {word: "康复", pinyin: "kāngfù", meaning: "治疗后身体机能逐渐恢复", english: "recovery / rehabilitation", note: ""},
                    {word: "预后", pinyin: "yùhòu", meaning: "对疾病未来发展和恢复情况的预测", english: "prognosis", note: ""},
                    {word: "复诊", pinyin: "fùzhěn", meaning: "治疗后定期回医院复查", english: "follow-up visit", note: ""}
                ],
                exercises: {
                    matching: [
                        {cn: "诊断", en: "diagnosis"},
                        {cn: "处方", en: "prescription"},
                        {cn: "手术", en: "surgery"},
                        {cn: "康复", en: "recovery"},
                        {cn: "预后", en: "prognosis"}
                    ],
                    choice: {
                        question: "医生预测疾病未来的发展趋势和恢复情况，这叫做？",
                        options: [
                            "A. 诊断",
                            "B. 化验",
                            "C. 预后",
                            "D. 复诊"
                        ],
                        answer: 2
                    },
                    fillBlanks: [
                        {question: "医生记录检查结果和诊疗过程的文件叫做______。", answer: "病历"},
                        {question: "慢性疾病患者需要定期回医院复查，这叫做______。", answer: "复诊"}
                    ]
                }
            },
            {
                id: "med4",
                title: "药物与药理基础",
                chinese: "药理学研究的是药物进入人体后如何发挥作用，以及人体如何处理药物。了解基本的药理知识，有助于患者更安全、有效地用药。\n\n药物的剂量是影响疗效的关键因素之一：剂量过低可能起不到治疗作用，剂量过高则可能引发中毒或严重的副作用——也就是药物在治疗疾病的同时产生的其他不良反应。\n\n长期或不规范地使用某种药物，还可能导致耐药性，也就是病原体对药物的敏感度下降，原本有效的药物逐渐失去疗效，这在抗生素的使用中尤为常见。\n\n此外，不同患者对同一种药物的反应也不完全相同：有些人会对某些药物过敏，出现皮疹、呼吸困难等严重反应，因此用药前医生通常会询问患者的过敏史和禁忌情况。\n\n药物进入人体后，需要经过吸收才能进入血液并发挥作用，吸收的速度和程度会直接影响药效出现的快慢和强弱。",
                english: "Pharmacology studies how drugs work after entering the body and how the body processes drugs. Understanding basic pharmacological knowledge helps patients use medications more safely and effectively.\n\nDrug dosage is one of the key factors affecting therapeutic effect: too low a dosage may not have a therapeutic effect, while too high a dosage may cause poisoning or serious side effects—that is, other adverse reactions produced by the drug while treating the disease.\n\nLong-term or irregular use of certain drugs may also lead to drug resistance, meaning the pathogen's sensitivity to the drug decreases, and originally effective drugs gradually lose their efficacy, which is particularly common in the use of antibiotics.\n\nIn addition, different patients do not react exactly the same way to the same drug: some people are allergic to certain drugs, experiencing serious reactions such as rashes and difficulty breathing, so doctors usually ask patients about their allergy history and contraindications before prescribing medication.\n\nAfter entering the body, drugs need to be absorbed to enter the bloodstream and take effect. The speed and degree of absorption directly affect how quickly and strongly the drug takes effect.",
                vocabulary: [
                    {word: "药理", pinyin: "yàolǐ", meaning: "研究药物在人体内作用机制的学科", english: "pharmacology", note: ""},
                    {word: "剂量", pinyin: "jìliàng", meaning: "一次用药的分量", english: "dosage", note: ""},
                    {word: "疗效", pinyin: "liáoxiào", meaning: "药物或治疗方法的效果", english: "therapeutic effect", note: ""},
                    {word: "副作用", pinyin: "fùzuòyòng", meaning: "治疗之外产生的不良反应", english: "side effect", note: ""},
                    {word: "耐药性", pinyin: "nàiyàoxìng", meaning: "病原体对药物敏感度下降的现象", english: "drug resistance", note: ""},
                    {word: "过敏", pinyin: "guòmǐn", meaning: "对某物质产生异常强烈的反应", english: "allergy", note: ""},
                    {word: "禁忌", pinyin: "jìnjì", meaning: "用药时必须避免的情况", english: "contraindication", note: ""},
                    {word: "吸收", pinyin: "xīshōu", meaning: "药物进入血液发挥作用的过程", english: "absorption", note: ""}
                ],
                exercises: {
                    matching: [
                        {cn: "剂量", en: "dosage"},
                        {cn: "副作用", en: "side effect"},
                        {cn: "耐药性", en: "drug resistance"},
                        {cn: "过敏", en: "allergy"},
                        {cn: "吸收", en: "absorption"}
                    ],
                    choice: {
                        question: "长期不规范使用抗生素，可能导致病原体对药物的敏感度下降，这种现象叫做？",
                        options: [
                            "A. 副作用",
                            "B. 耐药性",
                            "C. 过敏",
                            "D. 禁忌"
                        ],
                        answer: 1
                    },
                    fillBlanks: [
                        {question: "药物在治疗疾病的同时产生的其他不良反应叫做______。", answer: "副作用"},
                        {question: "药物需要经过______才能进入血液并发挥作用。", answer: "吸收"}
                    ]
                }
            },
            {
                id: "med5",
                title: "医学研究方法：临床试验",
                chinese: "新药在正式上市之前，必须经过严格的临床试验，以验证其安全性和有效性。\n\n临床试验通常会招募一定数量的受试者——也就是自愿参与试验的健康人或患者。为了准确评估新药的效果，研究者会把受试者随机分成两组：一组服用真正的新药，另一组则作为对照组，服用没有实际药效的安慰剂，以便进行比较。\n\n为了避免主观因素影响结果的判断，很多临床试验还会采用双盲设计——也就是受试者和医生都不知道谁服用的是新药、谁服用的是安慰剂，只有研究的组织者掌握这一信息。\n\n此外，样本量也是决定临床试验结果是否可靠的重要因素：受试者数量太少，得出的结论就很难具有统计学上的显著性，也就难以说明药物的效果是真实的还是偶然的。\n\n整个临床试验的设计和实施，都必须遵守严格的伦理规范，充分保护受试者的知情权和身体健康。",
                english: "Before new drugs are officially launched, they must undergo rigorous clinical trials to verify their safety and effectiveness.\n\nClinical trials usually recruit a certain number of subjects—that is, healthy people or patients who voluntarily participate in the trial. To accurately evaluate the effect of the new drug, researchers randomly divide subjects into two groups: one group takes the real new drug, and the other serves as a control group taking a placebo with no actual medicinal effect for comparison.\n\nTo avoid subjective factors affecting the judgment of results, many clinical trials also adopt a double-blind design—that is, neither subjects nor doctors know who is taking the new drug and who is taking the placebo; only the study organizers have this information.\n\nIn addition, sample size is also an important factor determining whether clinical trial results are reliable: with too few subjects, it is difficult for conclusions to have statistical significance, making it hard to tell whether the drug's effect is real or coincidental.\n\nThe design and implementation of entire clinical trials must comply with strict ethical norms to fully protect subjects' right to know and physical health.",
                vocabulary: [
                    {word: "临床试验", pinyin: "línchuáng shìyàn", meaning: "新药上市前进行的人体验证试验", english: "clinical trial", note: ""},
                    {word: "受试者", pinyin: "shòushìzhě", meaning: "自愿参与试验的人", english: "subject / participant", note: ""},
                    {word: "对照组", pinyin: "duìzhàozǔ", meaning: "不接受试验药物、用于比较的一组", english: "control group", note: ""},
                    {word: "安慰剂", pinyin: "ānwèijì", meaning: "没有实际药效的对照用药物", english: "placebo", note: ""},
                    {word: "双盲", pinyin: "shuāngmáng", meaning: "受试者和医生都不知道分组信息的设计", english: "double-blind", note: ""},
                    {word: "样本量", pinyin: "yàngběnliàng", meaning: "参与试验的受试者数量", english: "sample size", note: ""},
                    {word: "显著性", pinyin: "xiǎnzhùxìng", meaning: "结果在统计学上是否可信的判定", english: "(statistical) significance", note: "可迁移到经济、社科领域"},
                    {word: "伦理", pinyin: "lúnlǐ", meaning: "保护受试者权益的道德规范", english: "ethics", note: ""}
                ],
                exercises: {
                    matching: [
                        {cn: "对照组", en: "control group"},
                        {cn: "安慰剂", en: "placebo"},
                        {cn: "双盲", en: "double-blind"},
                        {cn: "样本量", en: "sample size"},
                        {cn: "伦理", en: "ethics"}
                    ],
                    choice: {
                        question: "在临床试验中，受试者和医生都不知道谁服用新药、谁服用安慰剂，这种设计叫做？",
                        options: [
                            "A. 对照组",
                            "B. 双盲",
                            "C. 样本量",
                            "D. 显著性"
                        ],
                        answer: 1
                    },
                    fillBlanks: [
                        {question: "受试者数量太少，结论就很难具有统计学上的______。", answer: "显著性"},
                        {question: "临床试验的设计和实施必须遵守严格的______规范，保护受试者权益。", answer: "伦理"}
                    ]
                }
            }
        ]
    },
    computer: {
        name: "计算机领域",
        texts: [
            {
                id: "comp1",
                title: "计算机的基本组成",
                chinese: "一台计算机通常由硬件和软件两大部分组成。硬件是计算机中看得见、摸得着的物理部件，软件则是运行在硬件上的程序和数据。\n\n计算机的核心硬件之一是处理器，它负责执行各种运算和指令，是计算机的\"大脑\"。课堂上，老师常常直接用英文\"CPU\"来称呼它，而不说中文全称。\n\n计算机在运行程序时，需要把正在使用的数据临时存放在内存中，内存的读写速度很快，但断电后数据会丢失。相对地，存储器（比如硬盘）用来长期保存数据，即使关机，数据也不会消失。\n\n为了让硬件和软件协调工作，计算机需要一个操作系统来统一管理各种资源，比如Windows、macOS和Linux都是常见的操作系统。\n\n此外，计算机还需要输入设备（比如键盘、鼠标）来接收用户指令，以及输出设备（比如显示器、打印机）把处理结果呈现给用户。",
                english: "A computer usually consists of two major parts: hardware and software. Hardware is the physical components of a computer that you can see and touch, while software is the programs and data that run on the hardware.\n\nOne of the core hardware components of a computer is the processor, which is responsible for executing various operations and instructions, serving as the \"brain\" of the computer. In class, teachers often directly refer to it by its English abbreviation \"CPU\" instead of using the full Chinese name.\n\nWhen running programs, computers need to temporarily store data currently in use in memory. Memory has very fast read and write speeds, but data is lost when power is cut off. In contrast, storage devices (such as hard disks) are used to store data long-term—data does not disappear even when the computer is turned off.\n\nTo coordinate hardware and software, computers need an operating system to uniformly manage various resources. Windows, macOS, and Linux are all common operating systems.\n\nIn addition, computers require input devices (such as keyboards and mice) to receive user instructions, and output devices (such as monitors and printers) to present processing results to users.",
                vocabulary: [
                    {word: "硬件", pinyin: "yìngjiàn", meaning: "计算机的物理部件", english: "hardware", note: "中英文都常用"},
                    {word: "软件", pinyin: "ruǎnjiàn", meaning: "运行在硬件上的程序和数据", english: "software", note: "中英文都常用"},
                    {word: "处理器", pinyin: "chǔlǐqì", meaning: "负责运算和执行指令的核心部件", english: "processor / CPU", note: "课堂几乎只说 CPU"},
                    {word: "内存", pinyin: "nèicún", meaning: "临时存放正在使用数据的部件", english: "memory / RAM", note: "中英混用"},
                    {word: "存储器", pinyin: "cúnchǔqì", meaning: "长期保存数据的部件（如硬盘）", english: "storage", note: ""},
                    {word: "操作系统", pinyin: "cāozuò xìtǒng", meaning: "统一管理硬件软件资源的系统", english: "operating system", note: "常直接说 OS"},
                    {word: "输入设备", pinyin: "shūrù shèbèi", meaning: "接收用户指令的设备", english: "input device", note: ""},
                    {word: "输出设备", pinyin: "shūchū shèbèi", meaning: "呈现处理结果的设备", english: "output device", note: ""}
                ],
                exercises: {
                    matching: [
                        {cn: "硬件", en: "hardware"},
                        {cn: "处理器", en: "CPU"},
                        {cn: "内存", en: "memory"},
                        {cn: "操作系统", en: "operating system"},
                        {cn: "存储器", en: "storage"}
                    ],
                    choice: {
                        question: "计算机关机后，哪种部件里的数据会丢失？",
                        options: [
                            "A. 存储器",
                            "B. 内存",
                            "C. 操作系统",
                            "D. 输出设备"
                        ],
                        answer: 1
                    },
                    fillBlanks: [
                        {question: "计算机中看得见、摸得着的物理部件叫做______。", answer: "硬件"},
                        {question: "负责统一管理硬件和软件资源的系统叫做______。", answer: "操作系统"}
                    ]
                }
            },
            {
                id: "comp2",
                title: "编程语言与算法基础",
                chinese: "要让计算机完成特定任务，程序员需要通过编程语言编写指令，告诉计算机具体该怎么做。\n\n在编写程序时，程序员经常需要临时保存数据，这时就要用到变量——用来存放数据、并且数据可以随时改变的\"容器\"。课堂上，老师常常直接说英文\"variable\"，而不说中文。\n\n程序中还常常需要把一段可以重复使用的代码单独封装起来，这就是函数，课堂上同样常被直接称为\"function\"。\n\n如果某个操作需要重复执行多次，程序员会用循环来实现，比如把同一段代码执行100次，而不用手动写100遍。\n\n另外，程序常常需要根据不同情况执行不同的代码，这就要用到条件语句——比如\"如果......就......否则......\"的逻辑判断。\n\n写好的代码在运行前，通常需要先编译，把人能读懂的代码转换成计算机能直接执行的指令；如果程序运行出错，程序员就需要调试，逐步排查并修正代码中的问题。真正解决某类问题的清晰步骤，则被称为算法——比如排序算法、查找算法。",
                english: "To make computers complete specific tasks, programmers need to write instructions through programming languages to tell computers exactly what to do.\n\nWhen writing programs, programmers often need to temporarily store data, which requires variables—\"containers\" used to store data where values can change at any time. In class, teachers often directly use the English term \"variable\" instead of the Chinese word.\n\nPrograms often also need to encapsulate a segment of reusable code separately; this is called a function, and in class it is also often directly referred to as \"function\".\n\nIf an operation needs to be executed multiple times, programmers use loops to implement it—for example, executing the same code 100 times without writing it manually 100 times.\n\nIn addition, programs often need to execute different code according to different situations, which requires conditional statements—logical judgments such as \"if...then...otherwise...\".\n\nBefore written code runs, it usually needs to be compiled first, converting human-readable code into instructions that computers can directly execute; if a program runs with errors, programmers need to debug, gradually identify and fix problems in the code. Clear steps that actually solve a certain type of problem are called algorithms—such as sorting algorithms and search algorithms.",
                vocabulary: [
                    {word: "编程", pinyin: "biānchéng", meaning: "编写指令让计算机执行任务", english: "programming", note: ""},
                    {word: "变量", pinyin: "biànliàng", meaning: "存放数据、值可变化的容器", english: "variable", note: "课堂常直接说 variable"},
                    {word: "函数", pinyin: "hánshù", meaning: "封装起来、可重复调用的代码段", english: "function", note: "课堂常直接说 function"},
                    {word: "循环", pinyin: "xúnhuán", meaning: "重复执行某段代码", english: "loop", note: "课堂常直接说 loop"},
                    {word: "条件语句", pinyin: "tiáojiàn yǔjù", meaning: "根据条件执行不同代码的结构", english: "conditional statement", note: "常直接说 if else"},
                    {word: "编译", pinyin: "biānyì", meaning: "把源代码转换成可执行指令", english: "compile", note: ""},
                    {word: "调试", pinyin: "tiáoshì", meaning: "排查并修正代码中的错误", english: "debug", note: "课堂常直接说 debug"},
                    {word: "算法", pinyin: "suànfǎ", meaning: "解决某类问题的清晰步骤", english: "algorithm", note: ""}
                ],
                exercises: {
                    matching: [
                        {cn: "变量", en: "variable"},
                        {cn: "函数", en: "function"},
                        {cn: "循环", en: "loop"},
                        {cn: "调试", en: "debug"},
                        {cn: "算法", en: "algorithm"}
                    ],
                    choice: {
                        question: "把同一段代码重复执行多次，而不用手动写很多遍，这种结构叫做？",
                        options: [
                            "A. 变量",
                            "B. 循环",
                            "C. 函数",
                            "D. 编译"
                        ],
                        answer: 1
                    },
                    fillBlanks: [
                        {question: "把人能读懂的代码转换成计算机能直接执行的指令，这个过程叫做______。", answer: "编译"},
                        {question: "解决某类问题的清晰步骤，叫做______。", answer: "算法"}
                    ]
                }
            },
            {
                id: "comp3",
                title: "数据结构基础",
                chinese: "在编程中，如何组织和存储数据会直接影响程序的效率，这就涉及数据结构的选择。\n\n最基础的数据结构是数组——把相同类型的数据按顺序存放在一起，每个数据都可以通过位置直接访问。但数组的长度通常是固定的，如果需要频繁增删数据，程序员往往会选择链表，链表中的每个元素都指向下一个元素，长度可以灵活变化。\n\n还有两种常见的数据结构分别叫做栈和队列。栈的特点是\"后进先出\"，就像一摞盘子，最后放上去的最先被拿走；队列则是\"先进先出\"，就像排队买票，先来的人先办理。\n\n除此之外，还有树和图这两种更复杂的结构，用来表示带有层级或网络关系的数据，比如文件夹的目录结构就是一种树；社交网络中人与人之间的关系则常常用图来表示。这两个字本身是\"树木\"和\"图片\"的意思，在计算机领域里完全是另一套含义，是最容易造成误解的一组词。\n\n如果一个问题可以拆解成更小的相同问题来解决，程序员常常会用递归——也就是让函数在执行过程中调用自身。",
                english: "In programming, how data is organized and stored directly affects program efficiency, which involves the choice of data structures.\n\nThe most basic data structure is an array—data of the same type is stored together in order, and each piece of data can be accessed directly by position. However, array length is usually fixed. If frequent data addition and deletion is needed, programmers often choose linked lists, where each element points to the next element, and length can change flexibly.\n\nTwo other common data structures are called stacks and queues. The characteristic of a stack is \"last in, first out\"—like a stack of plates, the last one placed is the first to be taken; a queue is \"first in, first out\"—like queuing for tickets, people who come first are served first.\n\nIn addition, there are two more complex structures called trees and graphs, used to represent data with hierarchical or network relationships. For example, the directory structure of folders is a type of tree; relationships between people in social networks are often represented using graphs. These characters themselves mean \"tree\" and \"picture\" respectively, but they have completely different meanings in the computer field, making them one of the most easily misunderstood pairs of terms.\n\nIf a problem can be broken down into smaller identical subproblems to solve, programmers often use recursion—that is, letting a function call itself during execution.",
                vocabulary: [
                    {word: "数据结构", pinyin: "shùjù jiégòu", meaning: "组织和存储数据的方式", english: "data structure", note: ""},
                    {word: "数组", pinyin: "shùzǔ", meaning: "按顺序存放同类数据的结构", english: "array", note: ""},
                    {word: "链表", pinyin: "liànbiǎo", meaning: "元素间通过指针相连、长度可变的结构", english: "linked list", note: ""},
                    {word: "栈", pinyin: "zhàn", meaning: "后进先出的数据结构", english: "stack", note: "⚠️ 同形异义：日常义=客栈"},
                    {word: "队列", pinyin: "duìliè", meaning: "先进先出的数据结构", english: "queue", note: "⚠️ 日常义=排队的队伍"},
                    {word: "树", pinyin: "shù", meaning: "表示层级关系的数据结构", english: "tree", note: "⚠️ 同形异义：日常义=树木"},
                    {word: "图", pinyin: "tú", meaning: "表示网络关系的数据结构", english: "graph", note: "⚠️ 同形异义：日常义=图片"},
                    {word: "递归", pinyin: "dìguī", meaning: "函数在执行中调用自身", english: "recursion", note: ""}
                ],
                exercises: {
                    matching: [
                        {cn: "数组", en: "array"},
                        {cn: "链表", en: "linked list"},
                        {cn: "栈", en: "stack"},
                        {cn: "队列", en: "queue"},
                        {cn: "递归", en: "recursion"}
                    ],
                    choice: {
                        question: "\"后进先出\"，像一摞盘子，最后放上去的最先被拿走，这种数据结构是？",
                        options: [
                            "A. 数组",
                            "B. 链表",
                            "C. 栈",
                            "D. 队列"
                        ],
                        answer: 2
                    },
                    fillBlanks: [
                        {question: "每个元素都指向下一个元素、长度可以灵活变化的数据结构叫做______。", answer: "链表"},
                        {question: "让函数在执行过程中调用自身，这种方法叫做______。", answer: "递归"}
                    ]
                }
            },
            {
                id: "comp4",
                title: "数据库基础",
                chinese: "当一个系统需要长期保存大量数据（比如用户信息、订单记录）时，通常会使用数据库来统一管理，而不是把数据随意存放在文件里。\n\n最常见的数据库类型是关系型数据库，它把数据组织成一张张表，每张表由行和列构成，每一列叫做一个字段，用来描述数据的某一属性，比如\"姓名\"\"年龄\"\"邮箱\"都可以是字段。\n\n为了保证每一条数据都能被唯一识别，表中通常会设置一个主键，主键的值不能重复，也不能为空。\n\n当需要从数据库中查找特定数据时，程序员会编写查询语句，课堂上老师常直接说英文\"query\"，或者提到SQL这种专门用来查询数据库的语言。\n\n为了让查询速度更快，数据库还会为常用字段建立索引，索引的原理有点像书后面的目录，可以让系统不用逐条翻找，直接定位到数据的位置。\n\n设计数据库时，还要尽量避免冗余——也就是同样的数据在多个地方重复存储，这不仅浪费空间，还容易导致数据不一致。",
                english: "When a system needs to store large amounts of data long-term (such as user information and order records), databases are usually used for unified management, rather than storing data randomly in files.\n\nThe most common database type is the relational database, which organizes data into tables, each composed of rows and columns. Each column is called a field, used to describe an attribute of the data—for example, \"name\", \"age\", and \"email\" can all be fields.\n\nTo ensure that each piece of data can be uniquely identified, a primary key is usually set in the table. Primary key values cannot be duplicated or empty.\n\nWhen specific data needs to be retrieved from the database, programmers write query statements. In class, teachers often directly say the English word \"query\", or mention SQL, a language specifically used for querying databases.\n\nTo make queries faster, databases also create indexes for commonly used fields. The principle of indexes is somewhat like the table of contents at the back of a book, allowing the system to directly locate data without searching through every entry.\n\nWhen designing databases, redundancy should also be avoided as much as possible—that is, storing the same data repeatedly in multiple places, which not only wastes space but also easily leads to data inconsistency.",
                vocabulary: [
                    {word: "数据库", pinyin: "shùjùkù", meaning: "统一管理大量数据的系统", english: "database", note: ""},
                    {word: "关系型", pinyin: "guānxìxíng", meaning: "以表格形式组织数据的（数据库）", english: "relational", note: ""},
                    {word: "表", pinyin: "biǎo", meaning: "由行和列构成的数据组织形式", english: "table", note: ""},
                    {word: "字段", pinyin: "zìduàn", meaning: "表中的一列，描述数据的某一属性", english: "field", note: ""},
                    {word: "主键", pinyin: "zhǔjiàn", meaning: "唯一识别每条数据的字段", english: "primary key", note: ""},
                    {word: "查询", pinyin: "cháxún", meaning: "从数据库中查找特定数据", english: "query", note: "课堂常直接说 query"},
                    {word: "索引", pinyin: "suǒyǐn", meaning: "加快数据查找速度的辅助结构", english: "index", note: ""},
                    {word: "冗余", pinyin: "rǒngyú", meaning: "同样数据重复存储造成的浪费", english: "redundancy", note: ""}
                ],
                exercises: {
                    matching: [
                        {cn: "字段", en: "field"},
                        {cn: "主键", en: "primary key"},
                        {cn: "查询", en: "query"},
                        {cn: "索引", en: "index"},
                        {cn: "冗余", en: "redundancy"}
                    ],
                    choice: {
                        question: "表中用来保证每条数据都能被唯一识别、值不能重复的部分叫做？",
                        options: [
                            "A. 字段",
                            "B. 主键",
                            "C. 索引",
                            "D. 冗余"
                        ],
                        answer: 1
                    },
                    fillBlanks: [
                        {question: "数据库中把数据组织成行和列构成的______。", answer: "表"},
                        {question: "同样的数据在多个地方重复存储，造成浪费和不一致，这种问题叫做______。", answer: "冗余"}
                    ]
                }
            },
            {
                id: "comp5",
                title: "网络与信息安全基础",
                chinese: "计算机之间要互相通信，必须遵循共同的规则，这套规则叫做协议，比如我们上网时用到的HTTP、TCP/IP，都是常见的网络协议。\n\n网络通信的能力还受到带宽的限制——带宽越大，单位时间内能传输的数据就越多，网络速度通常也就越快。\n\n在网络环境中，数据面临被窃取或篡改的风险，因此常常需要加密，把原始数据转换成只有授权方才能读懂的形式，以保护信息安全。\n\n为了防止外部未经授权的访问，很多系统会在网络边界设置防火墙，用来监控和过滤进出的网络流量。\n\n此外，系统通常还需要身份验证机制，确认使用者的身份是否合法，比如输入密码、指纹或人脸识别；系统还会根据不同用户设置不同的权限，规定谁可以查看、修改或删除数据。\n\n如果软件或系统存在设计上的缺陷，就可能形成安全漏洞，一旦被恶意利用，攻击者就可能窃取数据或破坏系统——这与生物学中的\"病毒\"不同，计算机病毒指的是能够自我复制、专门破坏计算机系统的恶意程序。",
                english: "For computers to communicate with each other, they must follow common rules called protocols. For example, HTTP and TCP/IP, which we use when surfing the Internet, are common network protocols.\n\nNetwork communication capability is also limited by bandwidth—the greater the bandwidth, the more data can be transmitted per unit time, and the faster the network speed usually is.\n\nIn network environments, data faces the risk of being stolen or tampered with, so encryption is often used, converting original data into a form that only authorized parties can read, to protect information security.\n\nTo prevent external unauthorized access, many systems set up firewalls at network boundaries to monitor and filter incoming and outgoing network traffic.\n\nIn addition, systems usually require authentication mechanisms to confirm whether users' identities are legitimate, such as entering passwords, fingerprint or facial recognition; systems also set different permissions for different users, specifying who can view, modify, or delete data.\n\nIf there are design flaws in software or systems, security vulnerabilities may form. Once exploited maliciously, attackers may steal data or damage systems—this is different from biological \"viruses\"; computer viruses refer to malicious programs that can self-replicate and specifically damage computer systems.",
                vocabulary: [
                    {word: "协议", pinyin: "xiéyì", meaning: "计算机之间通信必须遵循的规则", english: "protocol", note: "⚠️ 日常义=协议、条约"},
                    {word: "带宽", pinyin: "dàikuān", meaning: "单位时间内能传输的数据量", english: "bandwidth", note: ""},
                    {word: "加密", pinyin: "jiāmì", meaning: "把数据转换成只有授权方能读懂的形式", english: "encryption", note: ""},
                    {word: "防火墙", pinyin: "fánghuǒqiáng", meaning: "监控过滤网络流量、防止未授权访问", english: "firewall", note: ""},
                    {word: "身份验证", pinyin: "shēnfèn yànzhèng", meaning: "确认使用者身份是否合法", english: "authentication", note: ""},
                    {word: "权限", pinyin: "quánxiàn", meaning: "规定用户可执行操作范围的设置", english: "permission", note: ""},
                    {word: "漏洞", pinyin: "lòudòng", meaning: "系统设计上可被恶意利用的缺陷", english: "vulnerability", note: "⚠️ 日常义=窟窿、缺口"},
                    {word: "病毒", pinyin: "bìngdú", meaning: "能自我复制、破坏计算机系统的程序", english: "(computer) virus", note: "⚠️ 日常义=生物学病毒"}
                ],
                exercises: {
                    matching: [
                        {cn: "协议", en: "protocol"},
                        {cn: "加密", en: "encryption"},
                        {cn: "防火墙", en: "firewall"},
                        {cn: "漏洞", en: "vulnerability"},
                        {cn: "权限", en: "permission"}
                    ],
                    choice: {
                        question: "软件或系统设计上的缺陷，一旦被恶意利用可能导致数据被窃取，这叫做？",
                        options: [
                            "A. 协议",
                            "B. 加密",
                            "C. 漏洞",
                            "D. 权限"
                        ],
                        answer: 2
                    },
                    fillBlanks: [
                        {question: "把原始数据转换成只有授权方才能读懂的形式，这个过程叫做______。", answer: "加密"},
                        {question: "确认使用者身份是否合法的机制叫做______。", answer: "身份验证"}
                    ]
                }
            }
        ]
    },
    space: {
        name: "天文学领域",
        texts: [
            {
                id: "sp1",
                title: "宇宙的基本概念",
                chinese: "从最宏观的角度看，我们所在的宇宙是由无数星系组成的，而银河系只是其中之一。星系内又包含大量的恒星，恒星是能够自己发光发热的天体，太阳就是离我们最近的一颗恒星。\n\n围绕恒星运行的天体叫做行星，比如地球就是太阳系中的一颗行星。而围绕行星运行的天体则叫做卫星，月球就是地球的卫星。\n\n宇宙中所有具有质量、占据空间的物体，都可以被统称为天体，恒星、行星、卫星都属于天体的一种。\n\n天体之间之所以能够相互吸引、按照一定规律运行，是因为存在引力——质量越大的天体，引力也越强。正是因为引力的作用，行星才会沿着固定的轨道围绕恒星运行，而不会飞离或坠入恒星。",
                english: "From the most macroscopic perspective, the universe we live in is composed of countless galaxies, and the Milky Way is just one of them. Galaxies contain a large number of stars—celestial bodies that can emit light and heat on their own. The Sun is the closest star to us.\n\nCelestial bodies that orbit stars are called planets; for example, Earth is a planet in the solar system. Celestial bodies that orbit planets are called satellites; the Moon is Earth's satellite.\n\nAll objects in the universe that have mass and occupy space can be collectively referred to as celestial bodies. Stars, planets, and satellites are all types of celestial bodies.\n\nThe reason celestial bodies can attract each other and move according to certain laws is gravity—the greater the mass of a celestial body, the stronger its gravity. It is precisely because of gravity that planets orbit stars along fixed paths, rather than flying away or falling into stars.",
                vocabulary: [
                    {word: "宇宙", pinyin: "yǔzhòu", meaning: "包含所有空间、时间、物质的整体", english: "universe", note: ""},
                    {word: "星系", pinyin: "xīngxì", meaning: "由大量恒星、气体组成的天体系统", english: "galaxy", note: ""},
                    {word: "恒星", pinyin: "héngxīng", meaning: "能自己发光发热的天体", english: "star", note: ""},
                    {word: "行星", pinyin: "xíngxīng", meaning: "围绕恒星运行的天体", english: "planet", note: ""},
                    {word: "卫星", pinyin: "wèixīng", meaning: "围绕行星运行的天体", english: "satellite / moon", note: ""},
                    {word: "天体", pinyin: "tiāntǐ", meaning: "宇宙中具有质量、占据空间的物体统称", english: "celestial body", note: "高频学术通用词"},
                    {word: "引力", pinyin: "yǐnlì", meaning: "天体间相互吸引的力", english: "gravity", note: ""},
                    {word: "轨道", pinyin: "guǐdào", meaning: "天体运行的固定路径", english: "orbit", note: "⚠️ 日常义=铁路轨道"}
                ],
                exercises: {
                    matching: [
                        {cn: "宇宙", en: "universe"},
                        {cn: "星系", en: "galaxy"},
                        {cn: "恒星", en: "star"},
                        {cn: "行星", en: "planet"},
                        {cn: "引力", en: "gravity"}
                    ],
                    choice: {
                        question: "围绕行星运行的天体，比如月球，叫做？",
                        options: [
                            "A. 恒星",
                            "B. 卫星",
                            "C. 星系",
                            "D. 天体"
                        ],
                        answer: 1
                    },
                    fillBlanks: [
                        {question: "能够自己发光发热的天体叫做______。", answer: "恒星"},
                        {question: "天体之间相互吸引、按规律运行，靠的是______。", answer: "引力"}
                    ]
                }
            },
            {
                id: "sp2",
                title: "太阳系与行星运动",
                chinese: "地球和其他七颗行星一起，共同围绕太阳运行，这个系统被称为太阳系。\n\n每颗行星除了围绕太阳运行之外，自身也在不停地旋转。行星围绕太阳运行的运动叫做公转，地球公转一周大约需要一年；行星围绕自身轴线旋转的运动则叫做自转，地球自转一周大约是一天，昼夜交替正是由自转造成的。\n\n行星运行的轨道并不是正圆形，而是接近椭圆形，太阳位于椭圆的一个焦点上。\n\n地球之所以适合生命存在，很大程度上得益于包裹在地球外部的大气层，它不仅提供了呼吸所需的氧气，还能阻挡大部分来自太空的陨石，减少其对地表的撞击。\n\n除了行星，太阳系中还有一些由冰和尘埃构成的彗星，它们沿着极为狭长的轨道运行，靠近太阳时会因为温度升高而拖出一条长长的尾巴。此外，月球对地球海洋的引力还会造成海水周期性涨落，这种现象叫做潮汐。",
                english: "Earth, together with seven other planets, orbits the Sun, and this system is called the solar system.\n\nEach planet not only orbits the Sun but also rotates continuously on its own. The movement of planets around the Sun is called revolution; one revolution of Earth takes about one year. The movement of planets rotating on their own axes is called rotation; one rotation of Earth takes about one day, and the alternation of day and night is precisely caused by rotation.\n\nPlanetary orbits are not perfect circles but are nearly elliptical, with the Sun located at one focus of the ellipse.\n\nEarth's suitability for life is largely due to the atmosphere surrounding it, which not only provides oxygen for breathing but also blocks most meteorites from space, reducing their impact on the surface.\n\nBesides planets, there are comets in the solar system composed of ice and dust, which orbit along extremely elongated paths. When approaching the Sun, they trail a long tail due to rising temperatures. In addition, the Moon's gravitational pull on Earth's oceans causes periodic rises and falls of seawater, a phenomenon called tides.",
                vocabulary: [
                    {word: "太阳系", pinyin: "tàiyángxì", meaning: "太阳及围绕它运行的行星系统", english: "solar system", note: ""},
                    {word: "公转", pinyin: "gōngzhuàn", meaning: "行星围绕恒星运行的运动", english: "revolution (orbiting)", note: "与\"自转\"对照记"},
                    {word: "自转", pinyin: "zìzhuàn", meaning: "天体围绕自身轴线旋转的运动", english: "rotation", note: ""},
                    {word: "椭圆", pinyin: "tuǒyuán", meaning: "接近扁圆形的几何形状", english: "ellipse", note: ""},
                    {word: "大气层", pinyin: "dàqìcéng", meaning: "包裹行星外部的气体层", english: "atmosphere", note: ""},
                    {word: "陨石", pinyin: "yǔnshí", meaning: "坠落到地面的宇宙岩石碎片", english: "meteorite", note: ""},
                    {word: "彗星", pinyin: "huìxīng", meaning: "由冰和尘埃构成、拖有长尾的天体", english: "comet", note: ""},
                    {word: "潮汐", pinyin: "cháoxī", meaning: "月球引力造成的海水周期性涨落", english: "tide", note: ""}
                ],
                exercises: {
                    matching: [
                        {cn: "公转", en: "revolution"},
                        {cn: "自转", en: "rotation"},
                        {cn: "大气层", en: "atmosphere"},
                        {cn: "彗星", en: "comet"},
                        {cn: "潮汐", en: "tide"}
                    ],
                    choice: {
                        question: "地球自转一周大约是一天，这个运动直接造成了什么现象？",
                        options: [
                            "A. 四季变化",
                            "B. 昼夜交替",
                            "C. 海水涨落",
                            "D. 陨石撞击"
                        ],
                        answer: 1
                    },
                    fillBlanks: [
                        {question: "行星围绕太阳运行的运动叫做______，围绕自身轴线旋转的运动叫做______。", answer: "公转 / 自转"},
                        {question: "包裹地球外部、提供氧气并阻挡陨石的气体层叫做______。", answer: "大气层"}
                    ]
                }
            },
            {
                id: "sp3",
                title: "恒星的演化",
                chinese: "恒星并不是永恒不变的，它们也会经历诞生、成长、衰老和死亡的演化过程，只是这个过程通常需要几百万到几十亿年的时间。\n\n恒星之所以能够持续发光发热，是因为内部在不断进行核聚变反应——轻的原子核在极高的温度和压力下结合成更重的原子核，同时释放出巨大的能量。\n\n当恒星内部的核燃料逐渐耗尽，它会膨胀成体积巨大、温度相对较低的红巨星；对于像太阳这样质量中等的恒星，红巨星阶段之后，外层物质会逐渐散去，只留下一个体积小、密度极高的白矮星。\n\n而对于质量远大于太阳的恒星，它们生命的终点则会更加剧烈——发生一次被称为超新星的猛烈爆炸，爆炸之后，核心可能坍缩成密度极高的中子星，甚至形成黑洞。\n\n天文学家通过分析恒星发出光线的光谱，可以推断出恒星的温度、成分和运动状态等信息。",
                english: "Stars are not eternal and unchanging; they also go through an evolutionary process of birth, growth, aging, and death, though this process usually takes millions to billions of years.\n\nThe reason stars can continuously emit light and heat is that nuclear fusion reactions constantly occur inside them—light atomic nuclei combine into heavier nuclei under extremely high temperatures and pressures, releasing enormous energy simultaneously.\n\nWhen the nuclear fuel inside a star is gradually exhausted, it expands into a red giant with a huge volume and relatively low temperature. For medium-mass stars like the Sun, after the red giant phase, outer layers gradually disperse, leaving only a white dwarf with small volume and extremely high density.\n\nFor stars with much greater mass than the Sun, the end of their lives is even more violent—a massive explosion called a supernova occurs. After the explosion, the core may collapse into an extremely dense neutron star, or even form a black hole.\n\nBy analyzing the spectrum of light emitted by stars, astronomers can deduce information such as stellar temperature, composition, and motion state.",
                vocabulary: [
                    {word: "演化", pinyin: "yǎnhuà", meaning: "事物逐渐发展变化的过程", english: "evolution", note: "高频学术通用词，可迁移"},
                    {word: "核聚变", pinyin: "héjùbiàn", meaning: "轻原子核结合成重原子核并释放能量", english: "nuclear fusion", note: ""},
                    {word: "红巨星", pinyin: "hóngjùxīng", meaning: "恒星晚期膨胀成的体积巨大天体", english: "red giant", note: ""},
                    {word: "白矮星", pinyin: "báiǎixīng", meaning: "中等质量恒星死亡后留下的致密天体", english: "white dwarf", note: ""},
                    {word: "超新星", pinyin: "chāoxīnxīng", meaning: "大质量恒星死亡时的猛烈爆炸", english: "supernova", note: ""},
                    {word: "坍缩", pinyin: "tānsuō", meaning: "天体因引力向中心急剧收缩", english: "collapse", note: ""},
                    {word: "中子星", pinyin: "zhōngzǐxīng", meaning: "超新星爆炸后坍缩形成的致密天体", english: "neutron star", note: ""},
                    {word: "光谱", pinyin: "guāngpǔ", meaning: "光按波长分解后呈现的谱线", english: "spectrum", note: ""}
                ],
                exercises: {
                    matching: [
                        {cn: "核聚变", en: "nuclear fusion"},
                        {cn: "红巨星", en: "red giant"},
                        {cn: "超新星", en: "supernova"},
                        {cn: "坍缩", en: "collapse"},
                        {cn: "光谱", en: "spectrum"}
                    ],
                    choice: {
                        question: "恒星之所以能持续发光发热，主要依靠内部发生的什么过程？",
                        options: [
                            "A. 坍缩",
                            "B. 核聚变",
                            "C. 演化",
                            "D. 光谱分析"
                        ],
                        answer: 1
                    },
                    fillBlanks: [
                        {question: "大质量恒星死亡时发生的猛烈爆炸叫做______。", answer: "超新星"},
                        {question: "恒星核心因引力向中心急剧收缩的过程叫做______。", answer: "坍缩"}
                    ]
                }
            },
            {
                id: "sp4",
                title: "黑洞与宇宙的结构",
                chinese: "如果一颗恒星的质量足够大，在超新星爆炸后，核心坍缩产生的引力会强大到连光都无法逃脱，这样的天体就是黑洞。\n\n黑洞周围存在一个被称为事件视界的边界，一旦任何物质或光线越过这个边界，就再也无法逃离黑洞的引力。\n\n黑洞的存在也证明了：引力并不只是物体之间简单的相互吸引，而是会使时空本身发生弯曲——质量越大的天体，周围的时空弯曲程度就越明显，这正是爱因斯坦广义相对论的核心思想之一。\n\n除了黑洞，宇宙中还散布着由气体和尘埃组成的星云，恒星常常就诞生于星云之中；大量恒星因引力聚集在一起，则会形成星团。\n\n天文学家发现，宇宙中还存在大量无法直接观测到、但确实通过引力影响着星系运动的暗物质，以及推动宇宙加速膨胀的神秘暗能量，这两者的本质至今仍是天文学最大的谜题之一。",
                english: "If a star has sufficient mass, after a supernova explosion, the gravity produced by core collapse will be so strong that not even light can escape; such celestial bodies are black holes.\n\nAround a black hole there exists a boundary called the event horizon. Once any matter or light crosses this boundary, it can never escape the black hole's gravity.\n\nThe existence of black holes also proves that gravity is not simply mutual attraction between objects; it actually causes spacetime itself to curve—the greater the mass of a celestial body, the more obvious the curvature of spacetime around it, which is one of the core ideas of Einstein's general theory of relativity.\n\nBesides black holes, nebulae composed of gas and dust are scattered throughout the universe, and stars are often born within nebulae; large numbers of stars gathering together due to gravity form star clusters.\n\nAstronomers have discovered that there is also a large amount of dark matter in the universe that cannot be directly observed but does affect galaxy motion through gravity, as well as mysterious dark energy that drives the accelerated expansion of the universe. The nature of both remains one of the biggest mysteries in astronomy to this day.",
                vocabulary: [
                    {word: "黑洞", pinyin: "hēidòng", meaning: "引力强大到连光都无法逃脱的天体", english: "black hole", note: ""},
                    {word: "事件视界", pinyin: "shìjiàn shìjiè", meaning: "黑洞周围物质无法逃离的边界", english: "event horizon", note: ""},
                    {word: "时空", pinyin: "shíkōng", meaning: "时间与空间结合成的统一概念", english: "space-time", note: ""},
                    {word: "弯曲", pinyin: "wānqū", meaning: "因质量存在而使时空发生的扭曲", english: "curvature", note: "⚠️ 日常义=弯曲的道路"},
                    {word: "星云", pinyin: "xīngyún", meaning: "由气体和尘埃组成、恒星诞生地", english: "nebula", note: ""},
                    {word: "星团", pinyin: "xīngtuán", meaning: "因引力聚集在一起的大量恒星", english: "star cluster", note: ""},
                    {word: "暗物质", pinyin: "ànwùzhì", meaning: "无法直接观测但通过引力显现的物质", english: "dark matter", note: ""},
                    {word: "暗能量", pinyin: "ànnéngliàng", meaning: "推动宇宙加速膨胀的神秘能量", english: "dark energy", note: ""}
                ],
                exercises: {
                    matching: [
                        {cn: "黑洞", en: "black hole"},
                        {cn: "时空", en: "space-time"},
                        {cn: "星云", en: "nebula"},
                        {cn: "暗物质", en: "dark matter"},
                        {cn: "暗能量", en: "dark energy"}
                    ],
                    choice: {
                        question: "黑洞周围一旦物质或光线越过哪个边界，就再也无法逃离？",
                        options: [
                            "A. 星云",
                            "B. 事件视界",
                            "C. 星团",
                            "D. 时空"
                        ],
                        answer: 1
                    },
                    fillBlanks: [
                        {question: "时间与空间结合成的统一概念叫做______。", answer: "时空"},
                        {question: "恒星常常诞生于由气体和尘埃组成的______之中。", answer: "星云"}
                    ]
                }
            },
            {
                id: "sp5",
                title: "宇宙的起源：大爆炸理论",
                chinese: "关于宇宙是如何起源的，目前科学界最广泛接受的理论是大爆炸理论。这一理论认为，宇宙起初是一个体积无限小、密度和温度都无限高的奇点，大约在138亿年前，这个奇点发生了急剧的膨胀，逐渐演化出我们今天所看到的空间、时间、物质，以及各种星系。\n\n支持大爆炸理论的重要证据之一，是天文学家通过观测发现，几乎所有遥远星系发出的光都存在红移现象——也就是光的波长被拉长，这说明这些星系正在远离我们，整个宇宙仍在不断膨胀。\n\n另一个关键证据是宇宙背景辐射的发现——这是一种均匀分布在整个宇宙空间中的微弱辐射，被认为是大爆炸留下的\"余温\"。\n\n结合星系的演化过程以及暗物质对宇宙结构形成的影响，天文学家正在不断完善我们对宇宙起源的理解。",
                english: "Regarding the origin of the universe, the most widely accepted theory in the scientific community today is the Big Bang theory. This theory holds that the universe initially existed as a singularity with infinitely small volume and infinitely high density and temperature. Approximately 13.8 billion years ago, this singularity underwent rapid expansion, gradually evolving into the space, time, matter, and various galaxies we see today.\n\nOne of the key pieces of evidence supporting the Big Bang theory is the astronomical observation that light from almost all distant galaxies exhibits redshift—that is, the wavelength of light is stretched, indicating these galaxies are moving away from us and the entire universe is still expanding.\n\nAnother key piece of evidence is the discovery of cosmic background radiation—a faint radiation uniformly distributed throughout cosmic space, considered the \"afterheat\" left by the Big Bang.\n\nCombined with the evolutionary processes of galaxies and the influence of dark matter on cosmic structure formation, astronomers are continuously improving our understanding of the universe's origin.",
                vocabulary: [
                    {word: "大爆炸", pinyin: "dàbàozhà", meaning: "宇宙起源于奇点急剧膨胀的理论", english: "Big Bang", note: ""},
                    {word: "奇点", pinyin: "qídiǎn", meaning: "体积无限小、密度无限高的初始状态", english: "singularity", note: ""},
                    {word: "膨胀", pinyin: "péngzhàng", meaning: "体积或空间不断扩大", english: "expansion", note: "与经济领域\"通货膨胀\"同字不同义"},
                    {word: "证据", pinyin: "zhèngjù", meaning: "支持某一结论或理论的依据", english: "evidence", note: "高频学术通用词"},
                    {word: "观测", pinyin: "guāncè", meaning: "通过仪器等手段对天体进行观察测量", english: "observation", note: ""},
                    {word: "红移", pinyin: "hóngyí", meaning: "光波长被拉长、说明天体正在远离", english: "redshift", note: ""},
                    {word: "背景辐射", pinyin: "bèijǐng fúshè", meaning: "均匀分布于宇宙空间的微弱辐射", english: "background radiation", note: ""}
                ],
                exercises: {
                    matching: [
                        {cn: "大爆炸", en: "Big Bang"},
                        {cn: "奇点", en: "singularity"},
                        {cn: "膨胀", en: "expansion"},
                        {cn: "红移", en: "redshift"},
                        {cn: "观测", en: "observation"}
                    ],
                    choice: {
                        question: "天文学家发现遥远星系发出的光普遍存在红移现象，这说明了什么？",
                        options: [
                            "A. 星系正在远离我们，宇宙仍在膨胀",
                            "B. 星系正在靠近我们",
                            "C. 星系内部正在发生核聚变",
                            "D. 星系的质量在不断增加"
                        ],
                        answer: 0
                    },
                    fillBlanks: [
                        {question: "宇宙起初是一个体积无限小、密度无限高的状态，这个状态叫做______。", answer: "奇点"},
                        {question: "天文学家通过______发现宇宙背景辐射，作为大爆炸理论的重要证据。", answer: "观测"}
                    ]
                }
            }
        ]
    }
};