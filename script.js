// Data Definitions

const questions = [
    {
        q: "你的对象突然5小时没回消息，最后甩来一句“刚才窜稀了”，你的真实反应是：",
        options: [
            { text: "窜稀能窜5小时？马上查ta定位，要是撒谎直接家法伺候写检讨。", dom: 1, mental: 1, hardcore: -1, order: 1 },
            { text: "哈哈哈笑死我了，要求ta立刻拍个马桶的照片发过来鉴定成色。", dom: 1, mental: -1, hardcore: 1, order: -1 },
            { text: "完了，ta是不是嫌我烦才故意这么说的？我是不是又做错什么了？", dom: -1, mental: 1, hardcore: -1, order: 1 },
            { text: "窜稀好可怜，立马打车过去给ta揉肚子，顺便想在门外听个响。", dom: -1, mental: -1, hardcore: 1, order: -1 }
        ]
    },
    {
        q: "被拉去玩剧本杀，你抽到了一个全程被骂、还要给人下跪的“大冤种”角色，你：",
        options: [
            { text: "直接掀桌，什么破本，老子花钱是来当大爷的，立马强行篡改剧情。", dom: 1, mental: -1, hardcore: 1, order: -1 },
            { text: "表面不爽，但其实心里有一丝丝诡异的爽感。", dom: -1, mental: -1, hardcore: 1, order: 1 },
            { text: "发挥毕生演技，把这冤种演得催人泪下，享受所有人同情的目光。", dom: -1, mental: 1, hardcore: -1, order: 1 },
            { text: "满嘴跑火车，把剧本里的仇人都气死，强行把悲剧演成喜剧。", dom: 1, mental: 1, hardcore: -1, order: -1 }
        ]
    },
    {
        q: "如果给你一个合法把人关起来的地下室，你会怎么装修？",
        options: [
            { text: "布满最精密复杂的铁处女和审讯椅，每个角度都透着工业审美的严谨。", dom: 1, mental: -1, hardcore: 1, order: 1 },
            { text: "搞成一个完美的心理咨询室，我要在这里一点点瓦解ta的认知框架。", dom: 1, mental: 1, hardcore: 1, order: -1 },
            { text: "为什么是我关别人？我更希望自己被关在一个只有床和软包墙壁的笼子里。", dom: -1, mental: -1, hardcore: -1, order: 1 },
            { text: "搞成电竞房或者游乐园，把人骗进来然后天天一起打游戏到天亮。", dom: 1, mental: 1, hardcore: -1, order: -1 }
        ]
    },
    {
        q: "玩游戏时队友菜得抠脚，疯狂送人头，你的操作是：",
        options: [
            { text: "毫不留情地开启祖安模式，从操作到智商给ta进行全方位降维打击。", dom: 1, mental: 1, hardcore: 1, order: 1 },
            { text: "顺着网线过去真人PK，能动手绝不BB。", dom: 1, mental: -1, hardcore: 1, order: -1 },
            { text: "卑微祈求：“大佬别送了，我给你当狗还不行吗，求求了。”", dom: -1, mental: 1, hardcore: 1, order: 1 },
            { text: "直接开摆，跟着ta一起送，还要在语音里比谁笑得更大声。", dom: -1, mental: -1, hardcore: -1, order: -1 }
        ]
    },
    {
        q: "如果在恋爱中，你意外获得了一张“伴侣无条件服从你24小时”的特权卡，你会怎么用？",
        options: [
            { text: "让ta穿上正装，给我手写一份3000字的情书，还要声情并茂地朗读。", dom: 1, mental: 1, hardcore: -1, order: 1 },
            { text: "立刻化身无情监工，让ta包揽全屋大扫除，自己舒舒服服躺在沙发上吃瓜子。", dom: 1, mental: -1, hardcore: -1, order: 1 },
            { text: "拿着卡反而开始心虚手抖，卑微地问ta：“你其实不开心对吧？要不你还是凶我两句吧。”", dom: -1, mental: 1, hardcore: 1, order: -1 },
            { text: "把卡撕了，主动递上绳子或眼罩说：“我觉得还是由你来支配我比较舒服。”", dom: -1, mental: -1, hardcore: -1, order: -1 }
        ]
    },
    {
        q: "半夜三更，朋友突然发神经说要出去裸奔，你：",
        options: [
            { text: "立刻制定详细的裸奔路线图，并在前面开路指挥。", dom: 1, mental: 1, hardcore: -1, order: 1 },
            { text: "比ta脱得还快，并且提议两人互殴一场助助兴。", dom: 1, mental: -1, hardcore: 1, order: -1 },
            { text: "疯狂劝阻，但在ta真的跑出去后，一边害怕一边激动地帮忙拿衣服。", dom: -1, mental: 1, hardcore: -1, order: 1 },
            { text: "虽然觉得有病，但觉得如果能被ta在大街上遛一圈好像也挺刺激的。", dom: -1, mental: -1, hardcore: 1, order: -1 }
        ]
    },
    {
        q: "别人怎么夸你，会让你心里爽到内伤？",
        options: [
            { text: "“你是规则的制定者，我只配做你脚下的蝼蚁。”", dom: 1, mental: 1, hardcore: 1, order: 1 },
            { text: "“你的眼神好可怕，感觉下一秒就会把我撕碎。”", dom: 1, mental: -1, hardcore: 1, order: -1 },
            { text: "“除了我，世界上绝对不可能有第二个人能忍受你这种糟糕透顶的性格了。”", dom: -1, mental: 1, hardcore: 1, order: -1 },
            { text: "“乖狗狗，这是给你的奖励。”", dom: -1, mental: -1, hardcore: -1, order: 1 }
        ]
    },
    {
        q: "去看脱口秀，喜剧演员疯狂吐槽你是个单身狗，你：",
        options: [
            { text: "脑子里瞬间闪过100种回怼话术，直接把喜剧演员说到破防下跪。", dom: 1, mental: 1, hardcore: 1, order: 1 },
            { text: "冲上台把麦克风抢过来自己讲，主打一个全场只有我能控场。", dom: 1, mental: -1, hardcore: -1, order: -1 },
            { text: "脸红到脖子根，虽然被当众处刑，但其实暗爽这种被全场凝视的屈辱感。", dom: -1, mental: 1, hardcore: 1, order: -1 },
            { text: "跟着大家一起哈哈哈，觉得无所谓。", dom: -1, mental: -1, hardcore: -1, order: -1 }
        ]
    },
    {
        q: "逛超市结账时被前面大妈疯狂插队，你的做法是：",
        options: [
            { text: "拿出手机录像，当场给她上两小时的普法教育课和道德伦理学。", dom: 1, mental: 1, hardcore: -1, order: 1 },
            { text: "直接把她推开，老子管你谁是谁，物理超度一切不服。", dom: 1, mental: -1, hardcore: 1, order: -1 },
            { text: "当场怂掉连个屁都不敢放，反而在心里疯狂自我检讨，觉得一定是自己站得不够靠前才给了她可乘之机。", dom: -1, mental: 1, hardcore: -1, order: -1 },
            { text: "默默退到最后，觉得在这个弱肉强食的世界里受点委屈也是一种修行。", dom: -1, mental: -1, hardcore: 1, order: 1 }
        ]
    },
    {
        q: "如果让你策划一场大案，你会选：",
        options: [
            { text: "设计一个比《电锯惊魂》还精密100倍的物理连环杀机，强迫症福音。", dom: 1, mental: -1, hardcore: 1, order: 1 },
            { text: "创建一个邪教，用两句话就让所有信徒甘愿把家产全交给我然后自挂东南枝。", dom: 1, mental: 1, hardcore: 1, order: -1 },
            { text: "混进案发现场当人质，祈祷劫匪看我顺眼把我当成专属战利品。", dom: -1, mental: -1, hardcore: 1, order: -1 },
            { text: "我策划什么？我只负责在计划里躺平，被绑架了就闭眼睡觉。", dom: -1, mental: -1, hardcore: -1, order: 1 }
        ]
    }
];

const typesData = {
    // Dom, Mental
    "1101": { letters: "TCHR", char: "教官", desc: "纯纯的赛博班主任。平时人模狗样，一谈恋爱就喜欢布置作业。你根本不是在找对象，你是在收徒弟。看着对方战战兢兢地遵守你的破规矩，你心里那点隐秘的控制欲简直爽到升天。", play: "「赛博批改作业」让对方穿上正装大声朗读你撰写的恋爱家规，读错一个字加时罚站，并在脖子上盖“不合格”红章。", compatible: "优等生", bgPos: "0% 0%" },
    "1100": { letters: "RIDD", char: "谜语人", desc: "满嘴跑火车的精神渣男/女。主打一个‘我逗你玩，但你别当真’。你最享受的就是把对方忽悠瘸了之后，看着ta在一旁怀疑人生的样子。别人谈恋爱走心，你谈恋爱走钢丝。", play: "「薛定谔的真心话大冒险」蒙住对方眼睛，一边用冰块或羽毛进行感官剥夺，一边讲土味情话，让ta搞不清是受刑还是被撩。", compatible: "幻想家", bgPos: "33.333% 0%" },
    "1111": { letters: "TYRN", char: "暴君", desc: "PUA 祖师爷/精神粉碎机。你最擅长的就是用严密的逻辑把对方逼到死角，看着ta精神崩溃还要反思是不是自己做错了。你对疼痛没兴趣，你只喜欢降维打击的智商碾压感。", play: "「法庭模拟审判」把房间布置成审讯室，用台灯直射对方的脸，强迫ta对“昨晚为什么没说晚安”进行两小时深度逻辑论证。", compatible: "狂信徒", bgPos: "66.666% 0%" },
    "1110": { letters: "HYPN", char: "催眠师", desc: "洗脑包专卖店店长。没有任何底线，没有世俗的欲望，只有想把正常人逼成神经病的纯粹恶意。如果对方没有被你忽悠得六亲不认，你就觉得这场局白攒了。", play: "「人体遥控器」给对方植入一套绝对荒谬的条件反射，比如“听到微信提示音必须学狗叫”，然后你坐一旁悠闲发表情包。", compatible: "标本", bgPos: "100% 0%" },
    
    // Dom, Physical
    "1001": { letters: "KPER", char: "饲养员", desc: "野生动物园名誉园长。你谈恋爱就像在养赛马，热衷于把对方打理得毛发光亮，前提是ta必须戴上你买的纯金项圈。不听话？那就断网断粮关小黑屋。", play: "「沉浸式宠物喂食」没收对方的手机和餐具，给ta带上纯手工编织的狗毛衣，要求必须双膝跪地、只用嘴接你丢下的零食。", compatible: "宠物犬", bgPos: "0% 33.333%" },
    "1000": { letters: "HUNT", char: "猎手", desc: "人形黑背犬/精力过剩的原始人。你对复杂的心理战毫无兴趣，你只喜欢‘我追，你逃，你插翅难飞’。把你放出门你就是个疯子，但在绝对的暴力压制后，你偶尔也会撒个娇。", play: "「黑暗躲猫猫」关掉全屋的灯给对方三分钟藏好，抓到了直接就地正法；抓不到？这不可能，你早就把门反锁了。", compatible: "粘人精", bgPos: "33.333% 33.333%" },
    "1011": { letters: "WARD", char: "典狱长", desc: "强迫症晚期的手工耿。能用五花大绑解决的事，绝对不多说一句废话。你对绳结和物理锁扣有着变态的执着，最喜欢看猎物在绝对的物理限制下无能狂怒。", play: "「强迫症龟甲缚」用至少三根不同材质的绳子，计算出最符合黄金分割比例的捆绑节点，绑成完美对称图形后在一旁欣赏。", compatible: "苦行僧", bgPos: "66.666% 33.333%" },
    "1010": { letters: "BCHR", char: "屠夫", desc: "纯血莽夫/无规则破坏王。什么伦理道德，什么安全词，在你这里都是扯淡。你就是一颗移动的 C4 炸弹，随时准备把一切炸成渣，只追求最粗暴、最血淋淋的感官刺激。", play: "「拆家式摔跤」前戏浪漫全扔掉，直接在客厅地毯上展开一场无差别肉搏格斗，谁先求饶谁就负责把碰碎的花瓶扫干净。", compatible: "祭品", bgPos: "100% 33.333%" },

    // Sub, Mental
    "0101": { letters: "STUD", char: "优等生", desc: "重度斯德哥尔摩/讨好型牛马。哪怕对方让你去西天取经，你也要先问一句‘师傅，要不要带特产？’。每天最大的XP就是被夸一句‘你真棒’，然后继续当牛做马。", play: "「五星好评服务」跪在床头拿小本本，严格按伴侣指示提供全方位按摩，完事卑微递上问卷：“主人，请问本次服务能给五星吗？”", compatible: "教官", bgPos: "0% 66.666%" },
    "0100": { letters: "DREM", char: "幻想家", desc: "脑补帝/赛博受虐狂，极度容易成为舔狗的类型。每天在脑内模拟被八百壮士轮流支配的场景，但现实中连个瓶盖都拧不开。只要对方一句话，你就能在脑子里演完一部80集的虐恋连续剧。", play: "「赛博脑内高潮」不需要任何肢体接触，只需要伴侣发一条“洗干净等我”的微信，你就能在被窝里脑补出八万字小说把自己感动哭。", compatible: "谜语人", bgPos: "33.333% 66.666%" },
    "0111": { letters: "CULT", char: "狂信徒", desc: "纯纯的大扑棱蛾子，就爱往火里扑。别人谈恋爱是图开心，你是去朝圣的。对方就算把你踩在脚底，你也会流着宽面条泪说‘这都是神给我的试炼’。", play: "「虔诚の朝圣」每天定时定点对伴侣的指定衣物（比如原味袜子）进行15分钟的膜拜，并在心中默念“我是神明的垫脚石”。", compatible: "暴君", bgPos: "66.666% 66.666%" },
    "0110": { letters: "SPEC", char: "标本", desc: "被玩坏的福尔马林爱好者。你极度渴望被摧毁、被物化，最好连大脑都被彻底清空。只要能让你感受到自己是个没有任何尊严的废品，你就会获得出奇的安心感。", play: "「福尔马林扮演」被紧紧裹在保鲜膜或紧身衣里一动也不能动，假装自己是个毫无生气的陈列品，任由伴侣在身上用水彩画涂鸦。", compatible: "催眠师", bgPos: "100% 66.666%" },

    // Sub, Physical
    "0001": { letters: "PDOG", char: "宠物犬", desc: "纯血沸羊羊/无脑自我攻略大师。比起思考独立人格这种麻烦事，你更愿意脖子上被套个虚拟项圈。只要对方说一句‘乖’，你哪怕在挤地铁也能立刻原地打个滚。", play: "「叼飞盘特训」戴上最珍爱的真皮项圈，不仅要用嘴帮伴侣把拖鞋叼过来，还要一边摇着并不存在的尾巴一边期待地等着被摸头。", compatible: "饲养员", bgPos: "0% 100%" },
    "0000": { letters: "KOLA", char: "粘人精", desc: "晚期皮肤饥渴症/重度分离焦虑。你像个没有骨头的软体动物，最大的梦想就是 24 小时挂在别人身上吸取人类精华。不需要规矩，只要能贴贴你连命都能给。", play: "「人体八爪鱼」化身没有骨头的挂件，用四肢紧紧缠住伴侣的身体，就算伴侣去拉屎你也要挂在ta背上当一个人形披风。", compatible: "猎手", bgPos: "33.333% 100%" },
    "0011": { letters: "MONK", char: "苦行僧", desc: "痛觉收集癖/受苦艺术家。什么温存浪漫，对你来说都不如给你两鞭子来得实在。你需要极其繁复的受刑仪式来确认自己的存在，别人痛得嗷嗷叫，你在心里默默念金刚经。", play: "「冰火两重天修道」拒绝温软的床铺，要求伴侣一边用冰块在你背上画画，一边用小皮鞭进行敲打，你在痛苦中感悟宇宙的真理。", compatible: "典狱长", bgPos: "66.666% 100%" },
    "0010": { letters: "SACR", char: "祭品", desc: "极致的毁灭发烧友/不想活了但又不敢自己死。你的XP总结起来就是‘来吧，弄死我吧’。你享受那种彻底放弃身体使用权、像块破布一样被丢在角落的绝望感。", play: "「全自动献祭仪式」把自己洗干净后打上一个巨大的蝴蝶结，躺在餐桌正中间装作一道菜，闭上眼睛祈祷伴侣进食的时候不要太斯文。", compatible: "屠夫", bgPos: "100% 100%" }
};

// State
let currentQuestionIndex = 0;
let scores = { dom: 0, mental: 0, hardcore: 0, order: 0 };

// DOM Elements
const entryPage = document.getElementById('entry-page');
const quizPage = document.getElementById('quiz-page');
const loadingPage = document.getElementById('loading-page');
const resultPage = document.getElementById('result-page');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const questionCounter = document.getElementById('question-counter');

// Start Test
document.getElementById('btn-start').addEventListener('click', () => {
    entryPage.classList.add('hidden');
    quizPage.classList.remove('hidden');
    renderQuestion();
});

// Render Question
function renderQuestion() {
    const qData = questions[currentQuestionIndex];
    questionText.textContent = qData.q;
    questionCounter.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
    progressBar.style.width = `${((currentQuestionIndex) / questions.length) * 100}%`;
    
    optionsContainer.innerHTML = '';
    
    // Shuffle options to prevent pattern guessing
    const shuffledOptions = [...qData.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.onclick = () => handleAnswer(opt);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(opt) {
    scores.dom += opt.dom;
    scores.mental += opt.mental;
    scores.hardcore += opt.hardcore;
    scores.order += opt.order;

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        // Smooth transition
        quizPage.style.opacity = 0;
        setTimeout(() => {
            renderQuestion();
            quizPage.style.opacity = 1;
        }, 300);
    } else {
        progressBar.style.width = `100%`;
        setTimeout(showLoading, 400);
    }
}

function showLoading() {
    quizPage.classList.add('hidden');
    loadingPage.classList.remove('hidden');

    const loadingTexts = [
        "正在量化多巴胺分布...",
        "正在计算精神抗压指数...",
        "深入潜意识暗房中...",
        "正在匹配您的深层烙印..."
    ];
    let txtIdx = 0;
    const txtEl = document.getElementById('loading-text');
    
    const txtInterval = setInterval(() => {
        txtIdx++;
        if(txtIdx < loadingTexts.length) {
            txtEl.textContent = loadingTexts[txtIdx];
        }
    }, 800);

    setTimeout(() => {
        clearInterval(txtInterval);
        calculateResult();
    }, 3000);
}

function calculateResult() {
    loadingPage.classList.add('hidden');
    resultPage.classList.remove('hidden');

    // Calculate binary keys (1 or 0)
    const isDom = scores.dom >= 0 ? "1" : "0";
    const isMental = scores.mental >= 0 ? "1" : "0";
    const isHardcore = scores.hardcore >= 0 ? "1" : "0";
    const isOrder = scores.order >= 0 ? "1" : "0";

    const typeKey = `${isDom}${isMental}${isHardcore}${isOrder}`;
    const resultData = typesData[typeKey] || typesData["1101"];

    document.getElementById('res-letters').textContent = resultData.letters;
    document.getElementById('res-char').textContent = `「${resultData.char}」`;
    document.getElementById('res-avatar').style.backgroundPosition = resultData.bgPos;
    document.getElementById('res-desc').textContent = resultData.desc;
    document.getElementById('res-play').textContent = resultData.play;
    document.getElementById('res-compatible').textContent = resultData.compatible;

    // Calculate fake percentages based on scores
    const calcPercent = (score, max) => Math.min(98, Math.max(12, 50 + (score * 12)));

    const pD = calcPercent(scores.dom, 5);
    const pS = calcPercent(scores.mental, 5);
    const pB = calcPercent(scores.hardcore, 5);
    const pC = calcPercent(scores.order, 5);

    document.getElementById('stat-val-d').textContent = `${pD}%`;
    document.getElementById('stat-val-s').textContent = `${pS}%`;
    document.getElementById('stat-val-b').textContent = `${pB}%`;
    document.getElementById('stat-val-c').textContent = `${pC}%`;

    // Animate bars
    setTimeout(() => {
        document.getElementById('stat-bar-d').style.width = `${pD}%`;
        document.getElementById('stat-bar-s').style.width = `${pS}%`;
        document.getElementById('stat-bar-b').style.width = `${pB}%`;
        document.getElementById('stat-bar-c').style.width = `${pC}%`;
    }, 100);
}

// Generate Image
document.getElementById('btn-share').addEventListener('click', () => {
    const content = document.getElementById('result-content');
    content.classList.add('capture-mode'); // Shows watermark
    
    // Slight delay to ensure CSS applies
    setTimeout(() => {
        html2canvas(content, {
            scale: 2, // High resolution
            backgroundColor: "#020617" // match --bg-darker
        }).then(canvas => {
            content.classList.remove('capture-mode');
            
            const imgData = canvas.toDataURL("image/png");
            const imgEl = document.createElement("img");
            imgEl.src = imgData;
            imgEl.style.width = "100%";
            imgEl.style.display = "block";
            
            const container = document.getElementById('share-img-container');
            container.innerHTML = '';
            container.appendChild(imgEl);
            
            document.getElementById('share-modal').classList.remove('hidden');
        });
    }, 100);
});

// Close Modal
document.getElementById('btn-close-modal').addEventListener('click', () => {
    document.getElementById('share-modal').classList.add('hidden');
});

// Restart
document.getElementById('btn-restart').addEventListener('click', () => {
    currentQuestionIndex = 0;
    scores = { dom: 0, mental: 0, hardcore: 0, order: 0 };
    resultPage.classList.add('hidden');
    entryPage.classList.remove('hidden');
    
    // Reset bars
    document.getElementById('stat-bar-d').style.width = `0%`;
    document.getElementById('stat-bar-s').style.width = `0%`;
    document.getElementById('stat-bar-b').style.width = `0%`;
    document.getElementById('stat-bar-c').style.width = `0%`;
});
