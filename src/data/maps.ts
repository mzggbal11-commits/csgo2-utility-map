export type UtilityType = '烟雾' | '闪光' | '燃烧弹' | '诱饵' | '侦察' | '爆破';

export interface UtilityPoint {
  id: string;
  map: string;
  area: string;
  name: string;
  type: UtilityType;
  position: string;
  throwPattern: string;
  description: string;
  steps: string[];
  tags: string[];
}

export interface MapMeta {
  id: string;
  name: string;
  short: string;
  regions: string[];
  difficulty: '新手' | '中等' | '进阶';
}

export const mapMeta: MapMeta[] = [
  { id: 'dust2', name: 'Dust2', short: 'Dust2', regions: ['A', 'B', 'Mid', 'Long'], difficulty: '新手' },
  { id: 'mirage', name: 'Mirage', short: 'Mirage', regions: ['A', 'B', 'Mid', 'CT'], difficulty: '中等' },
  { id: 'inferno', name: 'Inferno', short: 'Inferno', regions: ['A', 'B', 'Mid', 'CT'], difficulty: '中等' },
  { id: 'nuke', name: 'Nuke', short: 'Nuke', regions: ['A', 'B', 'Ramp', 'Outside'], difficulty: '进阶' },
  { id: 'ancient', name: 'Ancient', short: 'Ancient', regions: ['A', 'B', 'Mid', 'CT'], difficulty: '中等' },
  { id: 'overpass', name: 'Overpass', short: 'Overpass', regions: ['A', 'B', 'Mid', 'Long'], difficulty: '中等' },
  { id: 'vertigo', name: 'Vertigo', short: 'Vertigo', regions: ['A', 'B', 'Mid', 'CT'], difficulty: '进阶' },
  { id: 'anubis', name: 'Anubis', short: 'Anubis', regions: ['A', 'B', 'Mid', 'CT'], difficulty: '中等' },
  { id: 'train', name: 'Train', short: 'Train', regions: ['A', 'B', 'Mid', 'CT'], difficulty: '进阶' },
];

export const utilityPoints: UtilityPoint[] = [
  {
    id: 'dust2-long-smoke',
    map: 'Dust2',
    area: 'Long',
    name: 'Long 角烟',
    type: '烟雾',
    position: 'Long 角，站在雕像左侧',
    throwPattern: '从长路口向右侧上抛，打到右下方的墙角后弹回，覆盖长路入口。',
    description: '适用于压制敌人从长路移动，或给队友提供压住入口的视野。',
    steps: [
      '站在长路牙套附近，面向长路入口。',
      '收起步伐，开启一小步前冲。',
      '将烟雾从角色右侧抛出，落点靠近长路右角。',
      '观察烟雾在墙角回弹后覆盖长路。',
    ],
    tags: ['长路', '压制', '烟雾'],
  },
  {
    id: 'mirage-mid-smoke',
    map: 'Mirage',
    area: 'Mid',
    name: '中路双门烟',
    type: '烟雾',
    position: '中路双门口',
    throwPattern: '从站位瞄准中路绿门上方，以弧线穿过中路，封住敌方视野。',
    description: '非常适合中路推进时控制敌人站位，尤其是对付架点和高台压力。',
    steps: [
      '从中路双门站位走到最前方。',
      '不需要大步，用轻微转身补偿角度。',
      '烟雾抛到门框上方，让其落在中路右侧。',
      '等待烟雾展开后再推进。',
    ],
    tags: ['中路', '推进', '控制'],
  },
  {
    id: 'inferno-a-flash',
    map: 'Inferno',
    area: 'A',
    name: 'A 坑位闪光',
    type: '闪光',
    position: 'A 坑位入口',
    throwPattern: '快速向前抛出，以极短的抛射轨迹打到A坑前方。',
    description: '用来抢 A 大坑、打到入口前的敌人，帮助队友立刻接力。',
    steps: [
      '站在 A 坑前，朝着入口站位看齐。',
      '闪光不要甩太高，保持低抛。',
      '切到入口附近时正对着坑口。',
      '在敌人露出前及时释放。',
    ],
    tags: ['A区', '闪光', '快进'],
  },
  {
    id: 'nuke-b-molotov',
    map: 'Nuke',
    area: 'B',
    name: 'B 厂房燃烧',
    type: '燃烧弹',
    position: 'B 厂房入口',
    throwPattern: '从下方看向厂房入口，低抛，让燃烧弹贴住墙面扩散。',
    description: '用于封住 B 厂房的高压防守位，逼迫敌人退后或被烧死。',
    steps: [
      '站在 B 厂房前方，面朝入口。',
      '略微贴墙减少抛射偏差。',
      '燃烧弹低抛贴着门口墙面。',
      '观察燃烧扩散覆盖到站位与角落。',
    ],
    tags: ['B区', '燃烧', '压制'],
  },
  {
    id: 'ancient-b-utility',
    map: 'Ancient',
    area: 'B',
    name: 'B 反向诱饵',
    type: '诱饵',
    position: 'B 区长边',
    throwPattern: '向 B 区长边一侧抛掷，制造敌方巡逻被引导的假象。',
    description: '适合用来诱导敌人出位，抓住撤退或做预瞄。',
    steps: [
      '站在 B 区长边开口位置。',
      '保持斜角，沿长边抛掷。',
      '让诱饵停留在敌人常见动线。',
      '等待敌人步入后再做态势压制。',
    ],
    tags: ['B区', '诱饵', '信息'],
  },
  {
    id: 'overpass-mid-flash',
    map: 'Overpass',
    area: 'Mid',
    name: '中路穿透闪',
    type: '闪光',
    position: '中路双层通道',
    throwPattern: '快抛穿过通道，打到中路视角的关键帧。',
    description: '用于“盲打”进入中路的敌人，适合压制中路与桥头过渡。',
    steps: [
      '面向中路直线开口。',
      '抬手时不要过高，保持平抛。',
      '让闪光落在过道中心。',
      '后续即刻推进接收。',
    ],
    tags: ['中路', '闪光', '快压'],
  },
  {
    id: 'vertigo-ct-smoke',
    map: 'Vertigo',
    area: 'CT',
    name: 'CT 侧路烟',
    type: '烟雾',
    position: 'CT 侧路入口',
    throwPattern: '从 CT 侧路看向一侧墙角，饼型烟覆盖敌人高台。',
    description: '用于控制高地和侧路，确保进攻侧路时不被反压。',
    steps: [
      '站在 CT 侧路入口旁。',
      '瞄准高台棱角稍微上抬。',
      '让烟雾落至墙边和通道口。',
      '确保预判覆盖范围。',
    ],
    tags: ['CT', '控制', '烟雾'],
  },
  {
    id: 'anubis-a-smoke',
    map: 'Anubis',
    area: 'A',
    name: 'A 殿堂烟',
    type: '烟雾',
    position: 'A 殿堂门口',
    throwPattern: '沿着入口方向抛，到门口较高处，让烟覆盖后方。',
    description: '在A区做推进时非常有效，主要用于切断敌人拉线视野。',
    steps: [
      '站在 A 殿堂前的斜角。',
      '保持正前方向。',
      '抛到门框上方放大覆盖。',
      '等烟完全展开后再推进。',
    ],
    tags: ['A区', '推进', '烟雾'],
  },
  {
    id: 'train-mid-flash',
    map: 'Train',
    area: 'Mid',
    name: '中路爆闪',
    type: '闪光',
    position: '训练场中线',
    throwPattern: '从中线站位抛到通道尽头，让敌人被强制亮出。',
    description: '适合训练场和中路对压，帮助队友快速取位。',
    steps: [
      '守在中路站位，面朝对面通道。',
      '不要抛太远，尽量贴近中间。',
      '闪光释放的时机在敌人暴露前。',
      '一旦闪光生效立刻进攻。',
    ],
    tags: ['中路', '闪光', '压制'],
  },
];

export const utilityTypes: UtilityType[] = ['烟雾', '闪光', '燃烧弹', '诱饵', '侦察', '爆破'];
