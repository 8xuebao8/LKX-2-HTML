/* 宝石选购卡 · 数据文件
 * 颜色、硬度参考 jewelry-index（GIA Gem Property Chart 转录数据）。
 * 价格、处理、优缺点、选购建议为编辑参考版，请自行校对修改。
 *
 * 字段说明：
 *  colors   可呈现的颜色（键见 COLORS）
 *  sig      默认展示色
 *  cut      facet 刻面 / cab 素面 / pearl 珍珠
 *  special  change 变色 / opal 变彩 / cat 猫眼
 *  hard     摩氏硬度
 *  dur      耐久度 1–5（综合硬度、韧性、稳定性）
 *  price    价格档位 1 入门(<$100/ct) 2 中等($100–1k) 3 较高($1k–5k) 4 收藏级(>$5k)
 *  treat    0 通常无处理 / 1 常见稳定处理（如加热） / 2 处理影响价值，必须问清
 *  natural  false 表示实验室合成 / 人造
 */

const COLORS = [
  { k: 'R',  zh: '红',   en: 'Red',        hex: '#c8102e' },
  { k: 'Pk', zh: '粉',   en: 'Pink',       hex: '#ef8fb4' },
  { k: 'O',  zh: '橙',   en: 'Orange',     hex: '#ea6f1a' },
  { k: 'Y',  zh: '黄',   en: 'Yellow',     hex: '#f0bf14' },
  { k: 'G',  zh: '绿',   en: 'Green',      hex: '#13915a' },
  { k: 'B',  zh: '蓝',   en: 'Blue',       hex: '#1d55c7' },
  { k: 'V',  zh: '蓝紫', en: 'Violet',     hex: '#5b45c9' },
  { k: 'P',  zh: '紫',   en: 'Purple',     hex: '#8d3bb0' },
  { k: 'Br', zh: '褐',   en: 'Brown',      hex: '#8b5a2b' },
  { k: 'C',  zh: '无色', en: 'Colourless', hex: '#dfe9ef' },
  { k: 'W',  zh: '白',   en: 'White',      hex: '#f3efe6' },
  { k: 'Gr', zh: '灰',   en: 'Gray',       hex: '#8b9096' },
  { k: 'Bl', zh: '黑',   en: 'Black',      hex: '#25262a' }
];

const PRICE_TIERS = {
  1: { zh: '入门', range: '< $100/ct' },
  2: { zh: '中等', range: '$100–1,000/ct' },
  3: { zh: '较高', range: '$1,000–5,000/ct' },
  4: { zh: '收藏级', range: '> $5,000/ct' }
};

const TREAT_LEVELS = {
  0: { zh: '通常无处理', tone: 'ok' },
  1: { zh: '常见稳定处理', tone: 'mid' },
  2: { zh: '处理影响价值', tone: 'warn' }
};

const GEMS = [
  {
    id: 'diamond', zh: '钻石', en: 'Diamond', natural: true,
    colors: ['C', 'Y', 'Br', 'Pk', 'B', 'G', 'O', 'R', 'Bl'], sig: '#e6eef3', cut: 'facet',
    hard: '10', dur: 5, price: 4, priceText: '$3,000–20,000+/ct（1 克拉白钻，按 4C 差异极大）',
    treat: 1, treatments: ['激光打孔（去黑点）', '裂隙充填', 'HPHT 高温高压改色', '辐照改色（彩钻）'],
    line: '最硬的宝石，火彩强，流通性最好',
    intro: '钻石是最硬的天然物质，火彩和亮度出色，也是最容易转售、最标准化的宝石。白钻按 4C（切工、颜色、净度、克拉）定价，彩钻按颜色成因与浓度定价。',
    pros: ['硬度 10，日常佩戴几乎不怕磨', '分级体系成熟，证书好查', '火彩与亮度出色'],
    cons: ['价格高，品牌溢价大', '实验室培育钻石外观几乎一样，需要证书区分', '彩钻多有改色，价差极大'],
    quality: ['切工最影响闪耀，优先选 Excellent / Very Good', '颜色 D–J 肉眼都偏白，G–H 性价比高', '净度 VS2–SI1 通常肉眼干净'],
    ask: ['有没有 GIA / IGI / NGTC 等证书？证书编号能否查到？', '是天然钻石还是实验室培育？', '彩钻：颜色是天然的还是改色的？'],
    confuse: ['实验室培育钻石', '莫桑石', '立方氧化锆（CZ）', '白色蓝宝石'],
    use: '适合一切首饰，尤其是每天佩戴的戒指'
  },
  {
    id: 'lab-diamond', zh: '实验室培育钻石', en: 'Lab-grown diamond', natural: false,
    colors: ['C', 'Y', 'Pk', 'B'], sig: '#e3edf4', cut: 'facet',
    hard: '10', dur: 5, price: 2, priceText: '$200–1,500/ct（价格持续下降）',
    treat: 1, treatments: ['生长后 HPHT 处理（改善颜色）', '辐照改色（彩色）'],
    line: '成分与天然钻石相同，价格低很多',
    intro: '在实验室里用 CVD 或 HPHT 方法生长的钻石，化学成分、硬度、光学性质与天然钻石相同，不是仿品。缺点是几乎没有转售价值，价格还在快速下降。',
    pros: ['同样硬度 10，耐戴', '同预算可以买更大、更白、更干净的', '来源可追溯'],
    cons: ['几乎没有二手转售价值', '价格逐年下降', '必须看证书确认身份，以免被当天然钻石卖'],
    quality: ['与天然钻石一样看 4C', '看证书上是否注明 Laboratory-Grown', '腰棱通常有激光刻字'],
    ask: ['证书是否写明“实验室培育”？', '是 CVD 还是 HPHT？是否经过后处理？'],
    confuse: ['天然钻石（以培育冒充天然是主要风险）', '莫桑石'],
    use: '适合预算有限、重视大小和外观的订婚戒指'
  },
  {
    id: 'ruby', zh: '红宝石', en: 'Ruby', natural: true,
    colors: ['R', 'Pk'], sig: '#b5122e', cut: 'facet',
    hard: '9', dur: 5, price: 4, priceText: '$1,000–10,000+/ct（优质无烧更高）',
    treat: 2, treatments: ['加热（非常普遍，市场接受）', '铅玻璃充填（价值大幅降低）', '铍扩散'],
    line: '经典红色宝石，硬度仅次于钻石',
    intro: '红宝石是红色的刚玉，硬度 9，非常耐戴。市场上大部分红宝石都经过加热，这是可以接受的；但铅玻璃充填的低价“红宝石”耐久性差、价值很低，是新手最容易踩的坑。',
    pros: ['硬度 9，耐戴', '颜色经典，认知度高', '优质品保值'],
    cons: ['优质、无烧的价格非常高', '铅玻璃充填品很多，价格便宜得不正常时要警惕', '颜色偏粉时可能被归为粉色蓝宝石'],
    quality: ['颜色最重要：饱和、明亮的红，不发暗不发褐', '有丝状包体是正常的', '证书上注明产地与处理方式'],
    ask: ['是否加热？是否有铅玻璃充填？', '证书写的是 Ruby 还是 Pink Sapphire？', '产地是哪里？'],
    confuse: ['红色尖晶石', '红色碧玺', '红色石榴石', '合成红宝石', '铅玻璃充填红宝石'],
    use: '适合日常戒指'
  },
  {
    id: 'sapphire', zh: '蓝宝石', en: 'Sapphire', natural: true,
    colors: ['B', 'V', 'Pk', 'Y', 'O', 'G', 'P', 'C', 'Bl'], sig: '#1d4fb5', cut: 'facet',
    hard: '9', dur: 5, price: 3, priceText: '$300–5,000+/ct（蓝色）；彩色蓝宝石通常更低',
    treat: 1, treatments: ['加热（非常普遍，市场接受）', '铍扩散（改色，需披露）', '表面扩散', '玻璃充填'],
    line: '耐戴，颜色多，是最均衡的彩色宝石',
    intro: '除了红色以外，所有颜色的刚玉都叫蓝宝石，包括粉、黄、橙、绿和粉橙色的“帕帕拉恰”。硬度 9，非常适合日常佩戴，是彩色宝石里最均衡的选择。',
    pros: ['硬度 9，日常戒指首选的彩色宝石', '颜色选择非常多', '彩色蓝宝石性价比高'],
    cons: ['优质皇家蓝价格高', '深色的容易发黑', '扩散处理品价值低，需要证书'],
    quality: ['蓝色选中等到中深，不发黑、不发灰', '肉眼干净即可，有丝状包体正常', '注意窗口效应（台面中间发透、发空）'],
    ask: ['是否加热？是否有扩散处理？', '有没有权威证书（GIA / GRS / SSEF / NGTC）？'],
    confuse: ['蓝色尖晶石', '坦桑石', '堇青石', '合成蓝宝石', '蓝色玻璃'],
    use: '适合日常戒指'
  },
  {
    id: 'spinel', zh: '尖晶石', en: 'Spinel', natural: true,
    colors: ['R', 'Pk', 'O', 'P', 'V', 'B', 'Gr', 'Bl'], sig: '#d0244f', cut: 'facet',
    hard: '8', dur: 4, price: 2, priceText: '$150–3,000/ct（红色、钴蓝色更高）',
    treat: 0, treatments: ['极少处理'],
    line: '几乎都是天然未处理，比红宝石更实惠',
    intro: '历史上很多“红宝石”其实是尖晶石。它硬度 8，几乎没有处理，颜色鲜亮，是红宝石和蓝宝石的高性价比替代。',
    pros: ['几乎不做处理，买到的就是天然颜色', '硬度 8，可日常佩戴', '同颜色下比红宝石便宜很多'],
    cons: ['大颗优质的少', '合成尖晶石很常见，要看证书', '知名度不如红蓝宝石'],
    quality: ['颜色鲜艳、不发灰为佳', '净度通常较好', '“绝地武士”霓虹粉红价格最高'],
    ask: ['是天然还是合成尖晶石？', '有没有证书？'],
    confuse: ['红宝石', '蓝宝石', '合成尖晶石', '石榴石'],
    use: '适合日常戒指'
  },
  {
    id: 'emerald', zh: '祖母绿', en: 'Emerald', natural: true,
    colors: ['G'], sig: '#0f8a52', cut: 'facet',
    hard: '7.5–8', dur: 2, price: 3, priceText: '$500–8,000+/ct',
    treat: 2, treatments: ['注油（几乎全部）', '树脂充填（影响价值）', '染色（少见）'],
    line: '无可替代的绿色，但脆，几乎都有充填',
    intro: '祖母绿是绿色的绿柱石，颜色独一无二。它内部裂隙多，几乎都经过注油或充填，而且性脆，怕撞击、怕超声波清洗。',
    pros: ['颜色独一无二', '认知度高'],
    cons: ['性脆，撞击容易崩口', '几乎都有充填，充填程度决定价值', '不能用超声波或蒸汽清洗'],
    quality: ['颜色最重要：鲜艳的纯绿到略带蓝调', '有“花园”包体是正常的', '看证书上的充填程度：无 / 轻微 / 中等 / 明显'],
    ask: ['充填程度是多少？用的是油还是树脂？', '有没有证书？'],
    confuse: ['沙弗莱石', '绿色碧玺', '铬透辉石', '合成祖母绿', '绿色玻璃'],
    use: '建议吊坠、耳饰；做戒指要选包镶并小心佩戴'
  },
  {
    id: 'aquamarine', zh: '海蓝宝石', en: 'Aquamarine', natural: true,
    colors: ['B', 'G'], sig: '#6fb7d6', cut: 'facet',
    hard: '7.5–8', dur: 4, price: 2, priceText: '$50–800/ct（深蓝色更高）',
    treat: 1, treatments: ['加热（去除绿调，稳定）'],
    line: '清澈的海水蓝，净度高，大颗也不贵',
    intro: '海蓝宝石是蓝色的绿柱石，通常很干净，大颗也容易买到。颜色一般偏浅，颜色越浓价格越高。',
    pros: ['净度高，通透', '大颗价格友好', '硬度 7.5–8，日常佩戴可以'],
    cons: ['颜色偏浅，小颗不明显', '优质深蓝色价格上升快'],
    quality: ['颜色越浓的蓝越好，不带绿调更受欢迎', '应当肉眼干净'],
    ask: ['是否加热？', '是不是蓝色托帕石？（价格差很多）'],
    confuse: ['蓝色托帕石', '合成尖晶石', '蓝色玻璃'],
    use: '适合戒指与吊坠'
  },
  {
    id: 'morganite', zh: '摩根石', en: 'Morganite', natural: true,
    colors: ['Pk', 'O'], sig: '#f2b3a5', cut: 'facet',
    hard: '7.5–8', dur: 4, price: 2, priceText: '$50–400/ct',
    treat: 1, treatments: ['加热（去除黄调）', '辐照'],
    line: '温柔的蜜桃粉色，价格友好',
    intro: '摩根石是粉色的绿柱石，颜色柔和，常见蜜桃粉色。价格友好，常用于订婚戒指。',
    pros: ['颜色柔和，适合日常', '净度通常较好', '大颗价格友好'],
    cons: ['颜色偏浅，小颗不明显', '容易沾油污，显得发灰，要常清洁'],
    quality: ['颜色越饱和越好', '选肉眼干净的'],
    ask: ['是否加热或辐照？'],
    confuse: ['粉色托帕石', '粉色蓝宝石', '玻璃'],
    use: '适合戒指与吊坠'
  },
  {
    id: 'alexandrite', zh: '变石（亚历山大石）', en: 'Alexandrite', natural: true,
    colors: ['G', 'R', 'P'], sig: '#1f7d5b', cut: 'facet', special: 'change',
    hard: '8.5', dur: 5, price: 4, priceText: '$5,000–30,000+/ct（变色明显的优质品）',
    treat: 0, treatments: ['极少处理'],
    line: '日光下绿、灯光下红的变色宝石',
    intro: '变石是金绿宝石的一种，日光下呈绿色，白炽灯下呈红紫色。天然变色明显的非常稀少，市场上大量是合成品。',
    pros: ['变色效果独特', '硬度 8.5，耐戴', '通常不处理'],
    cons: ['天然优质品极贵', '合成变石和变色蓝宝石很多', '变色不明显的价值低很多'],
    quality: ['变色越明显、颜色越纯越好', '尽量选肉眼干净的'],
    ask: ['有没有证书确认天然？', '变色程度如何？能否现场对比日光和灯光？'],
    confuse: ['合成变石', '合成变色蓝宝石', '变色石榴石'],
    use: '适合戒指'
  },
  {
    id: 'chrysoberyl', zh: '金绿宝石（猫眼）', en: 'Chrysoberyl cat’s-eye', natural: true,
    colors: ['Y', 'G', 'Br'], sig: '#c9a227', cut: 'cab', special: 'cat',
    hard: '8.5', dur: 5, price: 3, priceText: '$300–3,000+/ct（猫眼越锐利越贵）',
    treat: 0, treatments: ['极少处理', '少量辐照（猫眼改色）'],
    line: '“猫眼”通常指它，眼线锐利、耐戴',
    intro: '珠宝行业说“猫眼”不加前缀时，指的就是金绿宝石猫眼。蜜黄色加一条锐利的亮线最受欢迎。',
    pros: ['硬度 8.5，耐戴', '猫眼效应明显', '通常不处理'],
    cons: ['石英猫眼、玻璃猫眼常冒充', '优质品价格较高'],
    quality: ['眼线要细、直、居中、灵活', '“蜜黄色、乳白开合”最受欢迎'],
    ask: ['是金绿宝石猫眼还是石英 / 玻璃猫眼？', '有没有证书？'],
    confuse: ['石英猫眼', '玻璃猫眼（纤维光学玻璃）', '碧玺猫眼'],
    use: '适合戒指'
  },
  {
    id: 'tanzanite', zh: '坦桑石', en: 'Tanzanite', natural: true,
    colors: ['V', 'B', 'P'], sig: '#4a3fb8', cut: 'facet',
    hard: '6–7', dur: 2, price: 2, priceText: '$200–1,000/ct',
    treat: 1, treatments: ['加热（几乎全部，稳定）'],
    line: '迷人的蓝紫色，但偏软，不适合天天戴',
    intro: '坦桑石只产于坦桑尼亚，是带紫调的蓝色，从不同角度看颜色会变化。价格比蓝宝石友好，但硬度较低，怕撞击和急剧温差。',
    pros: ['独特的蓝紫色', '同颜色下比蓝宝石便宜', '净度通常较好'],
    cons: ['硬度 6–7，戴久了会磨损', '有解理，撞击容易裂', '怕急剧温差与超声波'],
    quality: ['颜色越深、越饱和越好（AAA 级）', '选肉眼干净的'],
    ask: ['颜色等级？', '是否有镀膜（少见，但会磨掉）？'],
    confuse: ['蓝宝石', '堇青石', '合成镁橄榄石', '玻璃'],
    use: '建议吊坠、耳饰；戒指需小心佩戴'
  },
  {
    id: 'tourmaline', zh: '碧玺', en: 'Tourmaline', natural: true,
    colors: ['Pk', 'R', 'G', 'B', 'Y', 'O', 'Br', 'P', 'Bl', 'C'], sig: '#e0507e', cut: 'facet',
    hard: '7–7.5', dur: 4, price: 2, priceText: '$50–1,000/ct（帕拉伊巴可达数万）',
    treat: 1, treatments: ['加热', '辐照', '充填（少数）'],
    line: '颜色最丰富的宝石，还有双色“西瓜碧玺”',
    intro: '碧玺几乎有所有颜色，一颗石头里还可能有两三种颜色。霓虹蓝绿的“帕拉伊巴碧玺”是其中最贵的品种。',
    pros: ['颜色选择最多', '硬度 7–7.5，可日常佩戴', '大部分价格友好'],
    cons: ['红色、粉色的常有包体', '帕拉伊巴价差极大，需证书', '多色性明显，切工影响颜色'],
    quality: ['颜色鲜艳、不发暗', '绿色、蓝色的从侧面看可能更深，注意切向'],
    ask: ['是否加热、辐照或充填？', '帕拉伊巴：证书是否注明含铜？'],
    confuse: ['红宝石', '尖晶石', '祖母绿', '玻璃'],
    use: '适合戒指与吊坠'
  },
  {
    id: 'red-garnet', zh: '红色石榴石', en: 'Pyrope / Almandine', natural: true,
    colors: ['R', 'Br'], sig: '#7d1424', cut: 'facet',
    hard: '7–7.5', dur: 4, price: 1, priceText: '$10–100/ct',
    treat: 0, treatments: ['通常不处理'],
    line: '入门级红色宝石，便宜、耐戴、不处理',
    intro: '镁铝榴石和铁铝榴石是最常见的红色石榴石，酒红色，价格亲民，几乎不处理，非常适合入门。',
    pros: ['价格便宜', '通常不处理', '硬度 7–7.5，可日常佩戴'],
    cons: ['颜色常偏暗、偏褐', '大颗颜色更暗'],
    quality: ['选颜色明亮、不发黑的', '小颗颜色反而更好看'],
    ask: ['是什么品种的石榴石？'],
    confuse: ['红宝石', '红色尖晶石', '红色碧玺'],
    use: '适合日常首饰'
  },
  {
    id: 'rhodolite', zh: '玫瑰榴石（紫牙乌）', en: 'Rhodolite garnet', natural: true,
    colors: ['R', 'P', 'Pk'], sig: '#a3245d', cut: 'facet',
    hard: '7–7.5', dur: 4, price: 1, priceText: '$30–200/ct',
    treat: 0, treatments: ['通常不处理'],
    line: '玫红到紫红色，亮度好，不处理',
    intro: '玫瑰榴石是带紫调的石榴石，颜色比普通红色石榴石更明亮，价格仍然很友好。',
    pros: ['价格友好', '通常不处理', '净度通常很好'],
    cons: ['颜色偏紫，不是纯红'],
    quality: ['颜色明亮、不发暗的为佳'],
    ask: ['是否天然未处理？'],
    confuse: ['红宝石', '粉色蓝宝石', '尖晶石'],
    use: '适合日常首饰'
  },
  {
    id: 'spessartite', zh: '锰铝榴石（芬达石）', en: 'Spessartite garnet', natural: true,
    colors: ['O', 'R', 'Br'], sig: '#f0661a', cut: 'facet',
    hard: '7–7.5', dur: 4, price: 2, priceText: '$100–1,000/ct',
    treat: 0, treatments: ['通常不处理'],
    line: '鲜艳的橙色，俗称“芬达石”',
    intro: '锰铝榴石是橙色石榴石，鲜亮的橘子汽水色俗称“芬达石”。亮度高，不做处理。',
    pros: ['橙色鲜艳、亮度高', '通常不处理', '可日常佩戴'],
    cons: ['偏褐色的价值低', '优质鲜橙色价格上升快'],
    quality: ['纯正鲜橙色最好，偏褐、偏红价格降低'],
    ask: ['是否天然未处理？'],
    confuse: ['橙色蓝宝石', '黄晶', '锆石'],
    use: '适合日常首饰'
  },
  {
    id: 'tsavorite', zh: '沙弗莱石', en: 'Tsavorite', natural: true,
    colors: ['G'], sig: '#1aa05a', cut: 'facet',
    hard: '7–7.5', dur: 4, price: 3, priceText: '$500–4,000/ct（大颗更高）',
    treat: 0, treatments: ['通常不处理'],
    line: '亮绿色，比祖母绿耐戴、不充填',
    intro: '沙弗莱是绿色的钙铝榴石，亮度比祖母绿高，通常不做处理，也不像祖母绿那样脆。',
    pros: ['通常不处理', '比祖母绿耐戴、亮度更高', '颜色鲜艳'],
    cons: ['2 克拉以上稀少，价格跳涨', '知名度较低'],
    quality: ['鲜艳、不发暗的绿色最好', '选肉眼干净的'],
    ask: ['是否天然未处理？'],
    confuse: ['祖母绿', '铬透辉石', '绿色碧玺'],
    use: '适合戒指'
  },
  {
    id: 'demantoid', zh: '翠榴石', en: 'Demantoid garnet', natural: true,
    colors: ['G', 'Y'], sig: '#5aa82b', cut: 'facet',
    hard: '6.5–7', dur: 3, price: 3, priceText: '$500–5,000+/ct',
    treat: 0, treatments: ['通常不处理', '少数加热'],
    line: '火彩超过钻石的绿色石榴石',
    intro: '翠榴石是石榴石家族中最稀有的品种之一，色散比钻石还高。俄罗斯产的常有“马尾状”包体，反而被视为特征。',
    pros: ['火彩极强', '“马尾”包体有收藏价值', '通常不处理'],
    cons: ['硬度略低，棱角会磨损', '大颗稀少、价格高'],
    quality: ['颜色越绿、越鲜艳越好', '火彩明显'],
    ask: ['产地？是否有马尾包体？'],
    confuse: ['沙弗莱石', '橄榄石', '绿色锆石'],
    use: '适合吊坠、耳饰；戒指需小心佩戴'
  },
  {
    id: 'peridot', zh: '橄榄石', en: 'Peridot', natural: true,
    colors: ['G', 'Y'], sig: '#8cbf26', cut: 'facet',
    hard: '6.5–7', dur: 3, price: 1, priceText: '$30–300/ct',
    treat: 0, treatments: ['通常不处理'],
    line: '清新的黄绿色，价格亲民',
    intro: '橄榄石是黄绿色宝石，颜色明亮清新，价格很友好，通常不做处理。',
    pros: ['价格亲民', '通常不处理', '颜色清新'],
    cons: ['硬度不高，容易磨花', '怕酸、怕急剧温差'],
    quality: ['偏绿、少黄调的更受欢迎', '选肉眼干净的'],
    ask: ['是否天然？'],
    confuse: ['绿色碧玺', '翠榴石', '绿色玻璃'],
    use: '建议吊坠、耳饰'
  },
  {
    id: 'topaz', zh: '托帕石', en: 'Topaz', natural: true,
    colors: ['B', 'C', 'Y', 'O', 'Pk', 'Br', 'P'], sig: '#3aa3d8', cut: 'facet',
    hard: '8', dur: 3, price: 1, priceText: '$10–100/ct（蓝色）；帝王托帕 $500+/ct',
    treat: 1, treatments: ['辐照 + 加热（蓝色几乎全部）', '镀膜（彩虹托帕，会磨掉）'],
    line: '便宜又亮的蓝色宝石，但有解理',
    intro: '市面上的蓝色托帕石几乎都是无色托帕经辐照和加热改色的，非常便宜。天然橙粉色的“帝王托帕”则比较稀少昂贵。',
    pros: ['价格便宜', '硬度 8，净度高', '蓝色鲜艳'],
    cons: ['有完全解理，撞击可能裂开', '彩虹托帕的镀膜会磨损', '容易被当海蓝宝石卖'],
    quality: ['蓝色分天空蓝、瑞士蓝、伦敦蓝（深）', '帝王托帕看颜色饱和度'],
    ask: ['是否辐照、镀膜？', '是托帕石还是海蓝宝石？'],
    confuse: ['海蓝宝石', '黄晶', '蓝色玻璃'],
    use: '适合吊坠、耳饰；戒指注意不要撞击'
  },
  {
    id: 'citrine', zh: '黄晶', en: 'Citrine', natural: true,
    colors: ['Y', 'O', 'Br'], sig: '#e6a417', cut: 'facet',
    hard: '7', dur: 4, price: 1, priceText: '$10–50/ct',
    treat: 1, treatments: ['加热（多数由紫晶烧成）'],
    line: '便宜的金黄色宝石，适合入门',
    intro: '黄晶是黄色的石英，市场上大部分由紫晶加热而成。价格很便宜，大颗也容易买到。',
    pros: ['非常便宜', '大颗易得', '硬度 7，可日常佩戴'],
    cons: ['收藏价值低', '常被称为“黄水晶”“黄玉”混淆'],
    quality: ['金黄到橙黄、不发褐的为佳'],
    ask: ['是黄晶还是黄色托帕石？'],
    confuse: ['黄色托帕石', '黄色蓝宝石', '黄色玻璃'],
    use: '适合日常首饰'
  },
  {
    id: 'amethyst', zh: '紫晶', en: 'Amethyst', natural: true,
    colors: ['P', 'V'], sig: '#8a3fb5', cut: 'facet',
    hard: '7', dur: 4, price: 1, priceText: '$5–50/ct',
    treat: 0, treatments: ['通常不处理'],
    line: '最实惠的紫色宝石',
    intro: '紫晶是紫色的石英，价格便宜，颜色从淡紫到深紫都有。',
    pros: ['非常便宜', '通常不处理', '硬度 7，可日常佩戴'],
    cons: ['长期强光照射可能褪色', '合成紫晶很常见'],
    quality: ['深紫带红色闪光的最好（“西伯利亚”色）', '颜色要均匀'],
    ask: ['是天然还是合成？'],
    confuse: ['合成紫晶', '紫色蓝宝石', '紫色玻璃'],
    use: '适合日常首饰'
  },
  {
    id: 'rose-quartz', zh: '粉晶（芙蓉石）', en: 'Rose quartz', natural: true,
    colors: ['Pk'], sig: '#f2b8c6', cut: 'cab',
    hard: '7', dur: 4, price: 1, priceText: '$1–20/ct',
    treat: 1, treatments: ['染色（低档材料）', '镀膜'],
    line: '朦胧柔和的粉色，非常便宜',
    intro: '粉晶是粉色石英，通常半透明，多做成素面或珠子。',
    pros: ['非常便宜', '颜色温柔'],
    cons: ['透明度一般', '染色品存在'],
    quality: ['颜色均匀、通透的更好'],
    ask: ['是否染色？'],
    confuse: ['染色石英', '玻璃'],
    use: '适合手串、吊坠'
  },
  {
    id: 'zircon', zh: '锆石', en: 'Zircon', natural: true,
    colors: ['B', 'C', 'Y', 'O', 'Br', 'G', 'R'], sig: '#2f9fc4', cut: 'facet',
    hard: '6–7.5', dur: 3, price: 2, priceText: '$100–600/ct（蓝色）',
    treat: 1, treatments: ['加热（蓝色、无色几乎全部）'],
    line: '天然锆石，火彩接近钻石（不是 CZ）',
    intro: '天然锆石是一种古老的天然宝石，火彩强，与人造的“立方氧化锆（CZ）”完全不同。蓝色锆石最受欢迎，多为加热所致。',
    pros: ['火彩强、亮度高', '价格适中', '蓝色鲜艳'],
    cons: ['棱角容易磨损', '少数加热色在强光下可能回退', '名字常被和 CZ 混淆'],
    quality: ['蓝色越浓越好', '检查刻面棱线是否有磨损'],
    ask: ['是天然锆石还是立方氧化锆？', '是否加热？'],
    confuse: ['立方氧化锆（CZ）', '蓝色托帕石', '钻石'],
    use: '建议吊坠、耳饰；戒指需小心佩戴'
  },
  {
    id: 'moonstone', zh: '月光石', en: 'Moonstone', natural: true,
    colors: ['C', 'W', 'Gr', 'Pk', 'O'], sig: '#dfe6ef', cut: 'cab',
    hard: '6–6.5', dur: 2, price: 1, priceText: '$10–300/ct（蓝光优质更高）',
    treat: 0, treatments: ['通常不处理'],
    line: '会“发光”的月光效应',
    intro: '月光石是长石家族的成员，转动时表面会浮现一层蓝白色的光。蓝光越强、本体越透明越贵。',
    pros: ['月光效应独特', '通常不处理', '价格多数友好'],
    cons: ['有解理，撞击容易裂', '硬度较低，表面会磨花'],
    quality: ['蓝光强、本体透明的最好', '光要能随角度浮动'],
    ask: ['是月光石还是拉长石 / 玻璃？'],
    confuse: ['拉长石（彩虹月光）', '乳白玻璃', '合成尖晶石'],
    use: '建议吊坠、耳饰'
  },
  {
    id: 'opal', zh: '欧泊', en: 'Opal', natural: true,
    colors: ['W', 'Bl', 'O', 'B', 'G'], sig: '#cfe3ee', cut: 'cab', special: 'opal',
    hard: '5.5–6.5', dur: 1, price: 2, priceText: '$50–5,000+/ct（黑欧泊极贵）',
    treat: 1, treatments: ['拼合（二层、三层石）', '糖酸 / 烟熏处理（变黑）', '注塑'],
    line: '会变彩的宝石，但最娇贵',
    intro: '欧泊的魅力是“变彩”，转动时出现彩虹色斑块。黑欧泊最贵，白欧泊最常见，墨西哥火欧泊呈橙色。它含水、怕干燥和撞击，需要细心保养。',
    pros: ['变彩独一无二', '每颗都不一样'],
    cons: ['硬度低，容易磨损和裂开', '怕干燥、温差、化学品', '拼合欧泊常被当成实心卖'],
    quality: ['变彩越鲜艳、色斑越大越好', '底色越深变彩越显眼', '红色变彩最稀有'],
    ask: ['是实心（Solid）还是拼合（Doublet / Triplet）？', '产地？'],
    confuse: ['合成欧泊', '拼合欧泊', '玻璃 / 塑料仿品'],
    use: '建议吊坠、耳饰'
  },
  {
    id: 'jadeite', zh: '翡翠', en: 'Jadeite', natural: true,
    colors: ['G', 'W', 'P', 'Y', 'R', 'O', 'Bl'], sig: '#3fa86b', cut: 'cab',
    hard: '6.5–7', dur: 4, price: 2, priceText: '几百元到上千万元（价格跨度极大）',
    treat: 2, treatments: ['B 货：酸洗 + 充胶', 'C 货：染色', 'B+C 货', '浸蜡（常规，可接受）'],
    line: '东方最重要的玉石，A 货是关键',
    intro: '翡翠韧性极好，不易碎。价值看“种、水、色、底、工”。市场上处理品多，只有“A 货”是天然未经酸洗和染色的。',
    pros: ['韧性极好，耐戴', '文化价值高', '颜色和种水选择多'],
    cons: ['价格跨度极大，新手难判断', 'B 货、C 货非常多', '同等外观价差可以很大'],
    quality: ['种：结构越细越好（玻璃种 > 冰种 > 糯种）', '水：越透越好', '色：浓、阳、正、匀'],
    ask: ['是否 A 货？有没有国检 / NGTC 证书？', '证书上写的是“翡翠（A 货）”还是“翡翠（处理）”？'],
    confuse: ['染色石英岩（“马来玉”）', '和田玉', '葡萄石', '玻璃'],
    use: '适合手镯、吊坠、戒面'
  },
  {
    id: 'nephrite', zh: '和田玉', en: 'Nephrite', natural: true,
    colors: ['W', 'G', 'Y', 'Bl', 'Br', 'Gr'], sig: '#ece6d2', cut: 'cab',
    hard: '6–6.5', dur: 5, price: 2, priceText: '几百元到数十万元（白度、产状差异大）',
    treat: 1, treatments: ['浸蜡（常规）', '染色（仿籽料皮）', '充填（少见）'],
    line: '韧性最强的玉石，温润细腻',
    intro: '和田玉是透闪石玉，韧性是所有宝玉石里最高的之一。“和田玉”是品种名，不代表产地，俄料、青海料等都可以叫和田玉。',
    pros: ['韧性极高，几乎摔不坏', '质地温润', '适合雕刻'],
    cons: ['名称不代表产地，价格差异大', '籽料皮色常有人工染色'],
    quality: ['白度、细腻度、油润度最重要', '籽料要看皮色是否自然'],
    ask: ['产地是哪里（新疆、俄罗斯、青海）？', '籽料还是山料？皮色是否染色？'],
    confuse: ['石英岩', '大理石（“阿富汗玉”）', '玻璃'],
    use: '适合手镯、吊坠、把件'
  },
  {
    id: 'turquoise', zh: '绿松石', en: 'Turquoise', natural: true,
    colors: ['B', 'G'], sig: '#2fb3b0', cut: 'cab',
    hard: '5–6', dur: 2, price: 1, priceText: '几十元到上万元（高瓷原矿更高）',
    treat: 2, treatments: ['注胶稳定（非常普遍）', '染色', '扎克里处理', '再造（粉末压制）'],
    line: '天蓝色的玉石，市场上处理品极多',
    intro: '绿松石多孔、质地较软，市场上大部分经过注胶稳定或染色。“高瓷”且未处理的原矿价格高。',
    pros: ['颜色独特', '入门品价格低'],
    cons: ['质地软，怕油、怕汗、怕化学品', '处理品和仿品非常多', '会随时间变色'],
    quality: ['颜色越蓝、越均匀越好', '硬度高、瓷度高的更贵', '铁线自然的有特色'],
    ask: ['是原矿还是稳定处理？是否染色？', '有没有证书？'],
    confuse: ['染色菱镁矿', '染色羟硅硼钙石', '再造绿松石', '塑料'],
    use: '适合吊坠、手串'
  },
  {
    id: 'lapis', zh: '青金石', en: 'Lapis lazuli', natural: true,
    colors: ['B', 'V'], sig: '#24479e', cut: 'cab',
    hard: '5–5.5', dur: 2, price: 1, priceText: '$1–50/ct',
    treat: 1, treatments: ['染色（常见）', '浸蜡'],
    line: '深邃的群青色，带金色黄铁矿星点',
    intro: '青金石是由多种矿物组成的岩石，深蓝底色上常有金色的黄铁矿星点。价格亲民。',
    pros: ['颜色深邃', '价格亲民'],
    cons: ['硬度低，容易磨损', '染色品多'],
    quality: ['颜色深蓝均匀、白色方解石少为佳', '金色星点适量更好看'],
    ask: ['是否染色？（用酒精棉擦会掉色）'],
    confuse: ['方钠石', '染色碧玉（“瑞士青金”）', '合成仿品'],
    use: '适合吊坠、手串'
  },
  {
    id: 'iolite', zh: '堇青石', en: 'Iolite', natural: true,
    colors: ['V', 'B'], sig: '#4b4fae', cut: 'facet',
    hard: '7–7.5', dur: 3, price: 1, priceText: '$20–150/ct',
    treat: 0, treatments: ['通常不处理'],
    line: '“穷人的蓝宝石”，蓝紫色很实惠',
    intro: '堇青石的多色性非常强，从不同角度看是蓝紫色、淡黄色或无色。价格便宜，通常不处理。',
    pros: ['价格便宜', '通常不处理', '蓝紫色迷人'],
    cons: ['有解理，撞击要小心', '多色性强，切向不对颜色会偏灰'],
    quality: ['正面看起来饱和蓝紫的最好'],
    ask: ['是否天然？'],
    confuse: ['坦桑石', '蓝宝石'],
    use: '适合吊坠、耳饰'
  },
  {
    id: 'kunzite', zh: '紫锂辉石（孔赛石）', en: 'Kunzite', natural: true,
    colors: ['Pk', 'P'], sig: '#e3a3d4', cut: 'facet',
    hard: '6.5–7', dur: 2, price: 1, priceText: '$20–200/ct',
    treat: 1, treatments: ['辐照 + 加热（加深颜色）'],
    line: '淡粉紫色，大颗便宜，但会褪色',
    intro: '紫锂辉石是粉紫色的锂辉石，大颗也很便宜。缺点是长期强光照射会褪色，而且有解理。',
    pros: ['大颗便宜', '颜色柔和'],
    cons: ['阳光照射会褪色（俗称“夜宝石”）', '有完全解理，切磨和佩戴都要小心'],
    quality: ['颜色越深越好', '选肉眼干净的'],
    ask: ['是否辐照？'],
    confuse: ['摩根石', '粉色托帕石', '粉色碧玺'],
    use: '建议晚宴首饰、吊坠'
  },
  {
    id: 'pearl', zh: '珍珠', en: 'Pearl', natural: true,
    colors: ['W', 'Pk', 'Y', 'Bl', 'Gr'], sig: '#f4efe6', cut: 'pearl',
    hard: '2.5–4.5', dur: 1, price: 2, priceText: '淡水几十元起；海水（Akoya、南洋、大溪地）数千元到上万元',
    treat: 1, treatments: ['漂白（常规）', '染色（仿黑珍珠）', '辐照'],
    line: '有机宝石，光泽是关键，需要细心保养',
    intro: '珍珠分淡水和海水两大类：淡水珍珠价格低、多为无核；海水珍珠（日本 Akoya、南洋金珠白珠、大溪地黑珍珠）光泽好、价格高。',
    pros: ['温润优雅，百搭', '淡水珍珠很实惠'],
    cons: ['硬度很低，怕摩擦、怕酸、怕汗水和香水', '染色品冒充大溪地黑珍珠'],
    quality: ['光泽最重要：像镜面一样能照出影子', '表面越干净越好', '形状越圆越贵'],
    ask: ['是淡水还是海水？什么品种？', '是否染色？', '珠层厚度？'],
    confuse: ['贝壳珠', '玻璃珠 / 塑料珠', '染色淡水珍珠冒充大溪地黑珍珠'],
    use: '适合项链、耳饰；最后戴、最先摘'
  },
  {
    id: 'moissanite', zh: '莫桑石', en: 'Moissanite', natural: false,
    colors: ['C', 'G', 'Y'], sig: '#e8f0f2', cut: 'facet',
    hard: '9.25', dur: 5, price: 1, priceText: '$50–600（按钻石尺寸计）',
    treat: 0, treatments: ['实验室合成，不需处理'],
    line: '人造碳化硅，火彩比钻石还强',
    intro: '莫桑石是实验室合成的碳化硅，不是钻石。它非常耐戴、火彩比钻石还强，价格只有钻石的零头。',
    pros: ['硬度 9.25，耐戴', '火彩强', '价格低'],
    cons: ['不是天然宝石，没有稀缺性和转售价值', '大颗的火彩过于“彩”，与钻石不同'],
    quality: ['颜色选 D–F 无色级', '看品牌的保证书'],
    ask: ['是否明确标注为莫桑石？'],
    confuse: ['钻石（常被冒充为钻石）'],
    use: '适合日常戒指'
  }
];

/* ---------- 宝石档案补充：品种、切工、处理类型、内含物 ----------
 * family  品种（矿物家族）
 * cuts    常见切工：facet 刻面 / cab 素面 / bead 珠子 / carving 雕件
 * t       市场上常见的处理（筛选“排除处理”时以此为准）
 * t2      偶尔会遇到的处理
 * incl    典型内含物与放大特征
 * fx      光学效应（没有 GIA 记录时手动填写）
 */
const GEM_PROFILE = {
  'diamond':     { family: '钻石',   cuts: ['facet'], t: [], t2: ['laser', 'fill', 'hpht', 'irradiation', 'coating'], incl: '晶体、羽状纹、云状物；腰棱可见原始晶面' },
  'lab-diamond': { family: '钻石',   cuts: ['facet'], t: ['hpht'], t2: ['irradiation'], incl: 'CVD：针点、层状生长纹；HPHT：金属包体（可能带磁性）', fx: '与天然钻石相同：强亮度、中等色散' },
  'ruby':        { family: '刚玉',   cuts: ['facet', 'cab'], t: ['heat', 'fill'], t2: ['diffusion', 'oil'], incl: '丝状金红石（“丝绢”）、指纹状包体、平直色带；加热后丝状物会断续' },
  'sapphire':    { family: '刚玉',   cuts: ['facet', 'cab'], t: ['heat'], t2: ['diffusion', 'fill', 'irradiation'], incl: '丝状金红石、指纹状包体、平直六边形色带' },
  'spinel':      { family: '尖晶石', cuts: ['facet'], t: [], t2: ['heat'], incl: '成排的八面体小晶体、指纹状包体' },
  'emerald':     { family: '绿柱石', cuts: ['facet', 'cab', 'bead'], t: ['oil', 'fill'], t2: ['dye'], incl: '“花园”：三相包体、裂隙、晶体；哥伦比亚产可见锯齿状三相包体' },
  'aquamarine':  { family: '绿柱石', cuts: ['facet'], t: ['heat'], t2: [], incl: '通常干净；可能有平行的“雨丝”状管状包体' },
  'morganite':   { family: '绿柱石', cuts: ['facet'], t: ['heat'], t2: ['irradiation'], incl: '通常干净；可能有液体包体' },
  'alexandrite': { family: '金绿宝石', cuts: ['facet'], t: [], t2: [], incl: '指纹状、丝状包体；合成品可能有助熔剂残余或弯曲生长纹' },
  'chrysoberyl': { family: '金绿宝石', cuts: ['cab'], t: [], t2: ['irradiation'], incl: '大量平行排列的细针状包体（形成猫眼）' },
  'tanzanite':   { family: '黝帘石', cuts: ['facet'], t: ['heat'], t2: ['coating'], incl: '通常干净；可能有管状、液体包体；强三色性' },
  'tourmaline':  { family: '碧玺',   cuts: ['facet', 'cab', 'bead', 'carving'], t: ['heat'], t2: ['irradiation', 'fill'], incl: '扁平液体包体、管状“气液”包体；红粉色常见裂隙' },
  'red-garnet':  { family: '石榴石', cuts: ['facet', 'cab', 'bead'], t: [], t2: ['assembled'], incl: '针状金红石（可形成星光）、晶体包体' },
  'rhodolite':   { family: '石榴石', cuts: ['facet'], t: [], t2: [], incl: '通常干净；可有针状、晶体包体' },
  'spessartite': { family: '石榴石', cuts: ['facet'], t: [], t2: [], incl: '波纹状液体包体（特征）' },
  'tsavorite':   { family: '石榴石', cuts: ['facet'], t: [], t2: [], incl: '短针状、晶体包体' },
  'demantoid':   { family: '石榴石', cuts: ['facet'], t: [], t2: ['heat'], incl: '“马尾状”纤维包体（俄罗斯产特征）' },
  'peridot':     { family: '橄榄石', cuts: ['facet', 'bead'], t: [], t2: [], incl: '“睡莲叶”状盘状包体（特征）、明显重影' },
  'topaz':       { family: '托帕石', cuts: ['facet'], t: ['irradiation', 'heat'], t2: ['coating'], incl: '液体包体、两相包体；可见解理纹' },
  'citrine':     { family: '石英',   cuts: ['facet', 'bead', 'carving'], t: ['heat'], t2: [], incl: '通常干净；加热品颜色常带红橙调' },
  'amethyst':    { family: '石英',   cuts: ['facet', 'bead', 'carving'], t: [], t2: ['heat'], incl: '角状色带、“虎纹”状指纹包体' },
  'rose-quartz': { family: '石英',   cuts: ['cab', 'bead', 'carving'], t: [], t2: ['dye', 'coating'], incl: '细微针状包体使其朦胧（可产生星光）' },
  'zircon':      { family: '锆石',   cuts: ['facet'], t: ['heat'], t2: [], incl: '明显重影（双折射）、刻面棱线磨损' },
  'moonstone':   { family: '长石',   cuts: ['cab', 'bead'], t: [], t2: ['coating'], incl: '“蜈蚣状”包体（特征）、解理纹' },
  'opal':        { family: '欧泊',   cuts: ['cab', 'bead', 'carving'], t: [], t2: ['assembled', 'dye', 'fill'], incl: '变彩色斑；可带有围岩' },
  'jadeite':     { family: '玉石',   cuts: ['cab', 'bead', 'carving'], t: ['wax'], t2: ['bleach', 'fill', 'dye'], incl: '“翠性”（苍蝇翅闪光）、棉絮、石纹' },
  'nephrite':    { family: '玉石',   cuts: ['cab', 'bead', 'carving'], t: ['wax'], t2: ['dye'], incl: '毡状交织纤维结构、黑点、石花' },
  'turquoise':   { family: '玉石',   cuts: ['cab', 'bead', 'carving'], t: ['stabilize'], t2: ['dye', 'wax'], incl: '褐黑色铁线网脉、白色斑点' },
  'lapis':       { family: '玉石',   cuts: ['cab', 'bead', 'carving'], t: ['wax'], t2: ['dye'], incl: '金色黄铁矿星点、白色方解石斑块' },
  'iolite':      { family: '堇青石', cuts: ['facet'], t: [], t2: [], incl: '强多色性；可有片状赤铁矿包体' },
  'kunzite':     { family: '锂辉石', cuts: ['facet'], t: ['irradiation', 'heat'], t2: [], incl: '平行管状包体、解理纹' },
  'pearl':       { family: '有机宝石', cuts: ['bead'], t: ['bleach'], t2: ['dye', 'irradiation', 'coating'], incl: '表面生长纹、瑕疵；钻孔处可见珠层与珠核' },
  'moissanite':  { family: '合成宝石', cuts: ['facet'], t: [], t2: [], incl: '平行针状包体；明显重影（从台面斜看棱线成双）', fx: '强色散（0.104，约为钻石 2.5 倍）、明显重影' }
};
GEMS.forEach(g => Object.assign(g, GEM_PROFILE[g.id] || {}));

/* ---------- 预算换算用的每克拉参考价（美元，约 1 克拉的商业级品质） ----------
 * [低, 高]；换算时取两者的几何平均。没有列出的宝石（翡翠、和田玉、绿松石、珍珠）按件计价，不参与换算。
 */
const USD_CNY = 7.2;   // 参考汇率，可自行修改
const PRICE_PER_CT = {
  'diamond': [3000, 15000], 'lab-diamond': [200, 1000], 'ruby': [1000, 8000], 'sapphire': [400, 4000],
  'spinel': [200, 2000], 'emerald': [500, 6000], 'aquamarine': [80, 600], 'morganite': [60, 300],
  'alexandrite': [5000, 20000], 'chrysoberyl': [300, 2500], 'tanzanite': [250, 900], 'tourmaline': [60, 600],
  'red-garnet': [10, 80], 'rhodolite': [30, 150], 'spessartite': [100, 700], 'tsavorite': [500, 3000],
  'demantoid': [500, 4000], 'peridot': [30, 250], 'topaz': [10, 60], 'citrine': [10, 40],
  'amethyst': [5, 40], 'rose-quartz': [2, 15], 'zircon': [100, 500], 'moonstone': [15, 200],
  'opal': [50, 1500], 'lapis': [2, 30], 'iolite': [20, 120], 'kunzite': [20, 150], 'moissanite': [100, 500]
};
