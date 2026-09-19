// 全局变量
let currentUser = null;
let currentDomain = null;
let currentLessonIndex = 0;
let currentLesson = null;
let lessonStartTime = null; // 记录进入某篇课文的时间，用于统计学习时长

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initAuth();
    initTabs();
    initNavigation();
    initLessonControls();
    // 关闭/刷新标签页前，把当前课文已停留的时间存下来
    window.addEventListener('beforeunload', accumulateStudyTime);
});

// 把从进入课文到现在经过的时间累加进用户的学习时长并保存
function accumulateStudyTime() {
    if (!currentUser || !lessonStartTime) return;
    
    const elapsedMinutes = (Date.now() - lessonStartTime) / 60000;
    lessonStartTime = null;
    if (elapsedMinutes <= 0) return;
    
    currentUser.studyMinutes = (currentUser.studyMinutes || 0) + elapsedMinutes;
    
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[currentUser.email]) {
        users[currentUser.email] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

// 初始化认证功能
function initAuth() {
    // 检查本地存储是否有已登录用户
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showApp();
        updateProgress();
    }

    // 登录表单切换
    document.getElementById('show-register').addEventListener('click', () => {
        document.getElementById('login-form-container').classList.add('hidden');
        document.getElementById('register-form-container').classList.remove('hidden');
    });

    document.getElementById('show-login').addEventListener('click', () => {
        document.getElementById('register-form-container').classList.add('hidden');
        document.getElementById('login-form-container').classList.remove('hidden');
    });

    // 登录按钮
    document.getElementById('login-btn').addEventListener('click', handleLogin);
    
    // 注册按钮
    document.getElementById('register-btn').addEventListener('click', handleRegister);

    // 退出登录
    document.getElementById('logout-btn').addEventListener('click', handleLogout);
}

// 处理登录
function handleLogin() {
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    const errorEl = document.getElementById('login-error');
    errorEl.classList.add('hidden');

    if (!email || !password) {
        errorEl.textContent = '请输入邮箱和密码';
        errorEl.classList.remove('hidden');
        return;
    }

    // 获取用户数据
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    if (!users[email]) {
        errorEl.textContent = '该邮箱未注册';
        errorEl.classList.remove('hidden');
        return;
    }

    if (users[email].password !== password) {
        errorEl.textContent = '密码错误';
        errorEl.classList.remove('hidden');
        return;
    }

    // 登录成功
    currentUser = users[email];
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    showApp();
    updateProgress();
}

// 处理注册
function handleRegister() {
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim().toLowerCase();
    const password = document.getElementById('register-password').value;
    const errorEl = document.getElementById('register-error');
    errorEl.classList.add('hidden');

    if (!name || !email || !password) {
        errorEl.textContent = '请填写所有必填项';
        errorEl.classList.remove('hidden');
        return;
    }

    if (password.length < 6) {
        errorEl.textContent = '密码至少需要6位';
        errorEl.classList.remove('hidden');
        return;
    }

    // 简单邮箱验证
    if (!email.includes('@')) {
        errorEl.textContent = '请输入有效的邮箱地址';
        errorEl.classList.remove('hidden');
        return;
    }

    // 获取用户数据
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    if (users[email]) {
        errorEl.textContent = '该邮箱已注册';
        errorEl.classList.remove('hidden');
        return;
    }

    // 创建新用户
    users[email] = {
        name: name,
        email: email,
        password: password,
        completedLessons: [],
        studyMinutes: 0,
        registerDate: new Date().toISOString()
    };

    localStorage.setItem('users', JSON.stringify(users));
    
    // 自动登录
    currentUser = users[email];
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    showApp();
    updateProgress();
}

// 处理退出登录
function handleLogout() {
    accumulateStudyTime();
    localStorage.removeItem('currentUser');
    currentUser = null;
    document.getElementById('app-page').classList.add('hidden');
    document.getElementById('auth-page').classList.remove('hidden');
    // 清空表单
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
}

// 显示主应用
function showApp() {
    document.getElementById('auth-page').classList.add('hidden');
    document.getElementById('app-page').classList.remove('hidden');
    document.getElementById('user-name').textContent = currentUser.name;
}

// 更新进度显示
function updateProgress() {
    if (!currentUser) return;
    
    // 更新学习时长
    const studyMinutesEl = document.getElementById('study-minutes');
    if (studyMinutesEl) {
        studyMinutesEl.textContent = Math.round(currentUser.studyMinutes || 0);
    }
    
    // 各领域课文 id 前缀（不能用领域名简单截取，比如 "space" 截取不出 "sp"）
    const domainPrefixes = { economy: 'eco', medical: 'med', computer: 'comp', space: 'sp' };
    
    Object.keys(domainPrefixes).forEach(domain => {
        const prefix = domainPrefixes[domain];
        const completedCount = currentUser.completedLessons.filter(id => id.startsWith(prefix)).length;
        const progressEl = document.querySelector(`.domain-progress[data-domain="${domain}"]`);
        if (progressEl) progressEl.textContent = completedCount;
        
        // 已解锁课文数：已完成数 + 1（如果还没全部学完）
        const totalInDomain = LEARNING_DATA[domain].texts.length;
        const unlockedCount = Math.min(completedCount + (completedCount < totalInDomain ? 1 : 0), totalInDomain);
        const unlockedEl = document.querySelector(`.domain-unlocked[data-domain="${domain}"]`);
        if (unlockedEl) unlockedEl.textContent = unlockedCount;
    });
}

// 初始化标签切换
function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有激活状态
            document.querySelectorAll('.tab-btn').forEach(b => {
                b.classList.remove('active', 'border-primary', 'text-primary');
                b.classList.add('border-transparent', 'text-gray-500');
            });
            // 隐藏所有面板
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
            
            // 激活当前标签
            btn.classList.add('active', 'border-primary', 'text-primary');
            btn.classList.remove('border-transparent', 'text-gray-500');
            
            // 显示对应面板
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(`${tabId}-panel`).classList.remove('hidden');
            
            // 如果是练习面板，生成练习内容
            if (tabId === 'exercise') {
                renderExercises();
            }
        });
    });
}

// 初始化导航
function initNavigation() {
    // 上一课/下一课按钮
    document.getElementById('prev-lesson-btn').addEventListener('click', () => {
        if (currentLessonIndex > 0) {
            currentLessonIndex--;
            loadLesson(currentDomain, currentLessonIndex);
        }
    });

    document.getElementById('next-lesson-btn').addEventListener('click', () => {
        const texts = LEARNING_DATA[currentDomain].texts;
        if (currentLessonIndex < texts.length - 1) {
            currentLessonIndex++;
            loadLesson(currentDomain, currentLessonIndex);
        }
    });
}

function initLessonControls() {
    // 初始化练习提交功能在renderExercises中处理
}

// 显示领域页面
function showDomainPage() {
    accumulateStudyTime();
    document.getElementById('lesson-page').classList.add('hidden');
    document.getElementById('texts-page').classList.add('hidden');
    document.getElementById('domain-page').classList.remove('hidden');
    updateProgress();
}

// 显示领域文本列表
function showDomain(domain) {
    accumulateStudyTime();
    currentDomain = domain;
    document.getElementById('domain-page').classList.add('hidden');
    document.getElementById('lesson-page').classList.add('hidden');
    document.getElementById('texts-page').classList.remove('hidden');
    
    document.getElementById('domain-title').textContent = LEARNING_DATA[domain].name;
    
    // 生成文本列表
    const textListEl = document.getElementById('text-list');
    textListEl.innerHTML = '';
    
    const texts = LEARNING_DATA[domain].texts;
    
    texts.forEach((text, index) => {
        const isCompleted = currentUser.completedLessons.includes(text.id);
        const isLocked = index > 0 && !currentUser.completedLessons.includes(texts[index - 1].id);
        
        const card = document.createElement('div');
        card.className = `bg-white rounded-xl shadow-sm border p-5 transition ${
            isLocked
                ? 'border-gray-200 opacity-60 cursor-not-allowed'
                : `cursor-pointer card-hover ${isCompleted ? 'border-secondary/50 bg-green-50' : 'border-gray-200 hover:border-primary/30'}`
        }`;
        card.innerHTML = `
            <div class="flex items-center justify-between mb-3">
                <span class="text-sm font-medium ${isCompleted ? 'text-secondary' : 'text-gray-500'}">
                    ${isCompleted ? '<i class="fa fa-check-circle mr-1"></i> 已完成' : `文本 ${index + 1}`}
                </span>
                ${isLocked ? '<i class="fa fa-lock text-gray-400"></i>' : ''}
            </div>
            <h3 class="text-lg font-bold mb-2 ${isLocked ? 'text-gray-400' : ''}">${text.title}</h3>
            <p class="text-gray-600 text-sm line-clamp-2">${isLocked ? '完成上一篇课文后解锁' : text.chinese.substring(0, 60) + '...'}</p>
        `;
        if (isLocked) {
            card.addEventListener('click', () => {
                alert('🔒 请先完成上一篇课文，才能解锁这一篇');
            });
        } else {
            card.addEventListener('click', () => {
                currentLessonIndex = index;
                loadLesson(domain, index);
            });
        }
        textListEl.appendChild(card);
    });
}

// 显示文本列表页面
function showTextsPage(domain) {
    showDomain(domain);
}

// 加载课文
function loadLesson(domain, lessonIndex) {
    accumulateStudyTime(); // 先结算上一篇课文停留的时间
    lessonStartTime = Date.now(); // 开始为这一篇课文计时
    currentDomain = domain;
    currentLessonIndex = lessonIndex;
    currentLesson = LEARNING_DATA[domain].texts[lessonIndex];
    
    document.getElementById('domain-page').classList.add('hidden');
    document.getElementById('texts-page').classList.add('hidden');
    document.getElementById('lesson-page').classList.remove('hidden');
    
    // 设置标题
    document.getElementById('lesson-title').textContent = `${LEARNING_DATA[domain].name} · ${currentLesson.title}`;
    
    // 是否已完成（完成闯关练习后才会为 true，用于下方解锁下一课的判断）
    const isCompleted = currentUser.completedLessons.includes(currentLesson.id);
    
    // 重置到中文面板
    document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active', 'border-primary', 'text-primary');
        b.classList.add('border-transparent', 'text-gray-500');
    });
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
    document.querySelector('.tab-btn[data-tab="chinese"]').classList.add('active', 'border-primary', 'text-primary');
    document.querySelector('.tab-btn[data-tab="chinese"]').classList.remove('border-transparent', 'text-gray-500');
    document.getElementById('chinese-panel').classList.remove('hidden');
    
    // 渲染中文内容（高亮生词）
    renderChineseContent();
    
    // 渲染英文内容（同样高亮对应的生词英文翻译）
    renderEnglishContent();
    
    // 渲染生词表
    renderVocabTable();
    
    // 更新上下课按钮状态
    document.getElementById('prev-lesson-btn').disabled = lessonIndex === 0;
    document.getElementById('prev-lesson-btn').classList.toggle('opacity-50', lessonIndex === 0);
    
    const totalTexts = LEARNING_DATA[domain].texts.length;
    const atLastLesson = lessonIndex === totalTexts - 1;
    const nextLocked = !atLastLesson && !isCompleted;
    const nextBtn = document.getElementById('next-lesson-btn');
    nextBtn.disabled = atLastLesson || nextLocked;
    nextBtn.classList.toggle('opacity-50', atLastLesson || nextLocked);
    nextBtn.title = nextLocked ? '完成本课后才能解锁下一课' : '';
}

// 渲染中文内容，高亮生词
function renderChineseContent() {
    let content = currentLesson.chinese;
    
    // 替换所有生词为高亮版本，带tooltip
    currentLesson.vocabulary.forEach(vocab => {
        // tooltip 用单行字符串拼接，避免内部换行被下面的按段落拆分逻辑误切开
        const noteHtml = vocab.note ? `<div class="text-xs text-red-300 mt-1">${vocab.note}</div>` : '';
        const tooltipHtml = `<span class="tooltip bg-gray-900 text-white text-sm rounded-lg py-2 px-3 w-64 shadow-xl z-50"><div class="font-bold mb-1">${vocab.word} <span class="text-gray-300 font-normal">${vocab.pinyin}</span></div><div class="text-xs text-gray-200 mb-1">${vocab.meaning}</div><div class="text-xs font-medium text-yellow-300">${vocab.english}</div>${noteHtml}</span>`;
        
        // 使用正则替换，避免重复替换
        const regex = new RegExp(`(${vocab.word})`, 'g');
        content = content.replace(regex, `<span class="vocab-highlight">$1${tooltipHtml}</span>`);
    });
    
    // 按自然段拆分并用 <div> 包裹（不能用 <p>，因为生词提示框内含 <div>，
    // 浏览器解析 HTML 时会在 <p> 里遇到 <div> 就自动把 <p> 提前闭合，
    // 导致提示框内容被"挤"到外面变成一直可见的文字）
    content = content
        .split(/\n+/)
        .filter(p => p.trim() !== '')
        .map(p => `<div class="mb-4">${p}</div>`)
        .join('');
    
    document.getElementById('chinese-content').innerHTML = content;
    
    // 用 JS 明确控制提示框的显示/隐藏，不完全依赖 CSS :hover，
    // 避免提示框在未悬停时就一直显示的问题
    document.querySelectorAll('#chinese-content .vocab-highlight').forEach(el => {
        const tip = el.querySelector('.tooltip');
        if (!tip) return;
        
        // 先强制设为隐藏，确保初始状态正确
        tip.style.visibility = 'hidden';
        tip.style.opacity = '0';
        
        el.addEventListener('mouseenter', () => {
            tip.style.visibility = 'visible';
            tip.style.opacity = '1';
        });
        el.addEventListener('mouseleave', () => {
            tip.style.visibility = 'hidden';
            tip.style.opacity = '0';
        });
    });
}

// 渲染英文内容（纯文本，不做任何生词高亮）
function renderEnglishContent() {
    const content = currentLesson.english
        .split(/\n+/)
        .filter(p => p.trim() !== '')
        .map(p => `<div class="mb-4">${p}</div>`)
        .join('');
    
    document.getElementById('english-content').innerHTML = content;
}
function renderVocabTable() {
    const tbody = document.getElementById('vocab-table-body');
    tbody.innerHTML = '';
    
    currentLesson.vocabulary.forEach(vocab => {
        const row = document.createElement('tr');
        row.className = 'border-b border-gray-100 hover:bg-gray-50';
        row.innerHTML = `
            <td class="py-3 px-4 font-medium">${vocab.word}</td>
            <td class="py-3 px-4 text-gray-600">${vocab.pinyin}</td>
            <td class="py-3 px-4 text-gray-700">${vocab.meaning}</td>
            <td class="py-3 px-4 text-primary font-medium">${vocab.english}</td>
        `;
        tbody.appendChild(row);
    });
}

// 渲染练习
function renderExercises() {
    const exerciseContainer = document.getElementById('exercise-content');
    const exercises = currentLesson.exercises;
    
    // 为连线题分配稳定的 pairId，只打乱右侧英语列的显示顺序，保留配对关系
    const matchPairs = exercises.matching.map((item, i) => ({ cn: item.cn, en: item.en, pairId: i }));
    const shuffledEnPairs = shuffleArray([...matchPairs]);
    
    let html = `
        <div class="space-y-8">
            <!-- 连线题 -->
            <div>
                <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                    <i class="fa fa-link text-primary"></i> 关一 · 连线（中文 - 英语）
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="space-y-2">
                        ${matchPairs.map(item => `
                            <div class="match-item match-cn p-3 bg-blue-50 rounded-lg border border-blue-100 text-center font-medium cursor-pointer transition hover:bg-blue-100" data-pair-id="${item.pairId}">
                                ${item.cn}
                            </div>
                        `).join('')}
                    </div>
                    <div class="space-y-2">
                        ${shuffledEnPairs.map(item => `
                            <div class="match-item match-en p-3 bg-gray-50 rounded-lg border border-gray-200 text-center text-gray-700 cursor-pointer transition hover:bg-gray-100" data-pair-id="${item.pairId}">
                                ${item.en}
                            </div>
                        `).join('')}
                    </div>
                </div>
                <p class="text-sm text-gray-500 mt-3">💡 提示：先点击一个中文词语，再点击对应的英文释义完成匹配</p>
                <p id="matching-complete-tip" class="hidden text-secondary font-medium mt-3">🎉 全部匹配正确！</p>
            </div>

            <!-- 选择题 -->
            <div>
                <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                    <i class="fa fa-check-square-o text-primary"></i> 关二 · 选择题
                </h3>
                <div class="bg-white border border-gray-200 rounded-lg p-5">
                    <p class="text-lg mb-4 font-medium">${exercises.choice.question}</p>
                    <div class="space-y-2">
                        ${exercises.choice.options.map((opt, i) => `
                            <label class="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer choice-option" data-correct="${i === exercises.choice.answer}">
                                <input type="radio" name="choice" value="${i}" class="mt-1">
                                <span>${opt}</span>
                                <span class="ml-auto result-icon hidden"></span>
                            </label>
                        `).join('')}
                    </div>
                    <button id="check-choice" class="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition">
                        提交答案
                    </button>
                    <div id="choice-result" class="mt-3 hidden"></div>
                </div>
            </div>

            <!-- 填空题 -->
            <div>
                <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                    <i class="fa fa-pencil-square-o text-primary"></i> 关三 · 填空题
                </h3>
                <div class="space-y-4">
                    ${exercises.fillBlanks.map((q, i) => `
                        <div class="bg-white border border-gray-200 rounded-lg p-5">
                            <p class="text-lg mb-3">${i+1}. ${q.question.replace('______', '___________')}</p>
                            <div class="flex gap-2">
                                <input type="text" class="flex-1 px-3 py-2 border border-gray-300 rounded-lg fill-blank-input" data-index="${i}" placeholder="请填写答案">
                                <span class="fill-blank-result hidden mt-2"></span>
                            </div>
                        </div>
                    `).join('')}
                    <button id="check-fillblanks" class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition">
                        提交答案
                    </button>
                    <div id="fillblanks-result" class="mt-3 hidden"></div>
                </div>
            </div>
        </div>
    `;
    
    exerciseContainer.innerHTML = html;
    
    // 记录三关的通过情况：全部通过才会自动解锁下一课
    const examState = { matching: false, choice: false, fillBlanks: false };
    function checkAllPassed() {
        if (examState.matching && examState.choice && examState.fillBlanks) {
            completeLessonAutomatically();
        }
    }
    
    // 绑定连线题交互：点击一个中文词，再点击一个英文释义，判断是否配对成功
    let selectedCn = null;
    let selectedEn = null;
    let matchedCount = 0;
    const totalPairs = matchPairs.length;
    
    function clearSelectionStyle(el) {
        el.classList.remove('ring-2', 'ring-primary', 'bg-red-100', 'border-red-400');
    }
    
    function handleMatchClick(el, type) {
        if (el.classList.contains('matched')) return;
        
        if (type === 'cn') {
            if (selectedCn) clearSelectionStyle(selectedCn);
            selectedCn = el;
            el.classList.add('ring-2', 'ring-primary');
        } else {
            if (selectedEn) clearSelectionStyle(selectedEn);
            selectedEn = el;
            el.classList.add('ring-2', 'ring-primary');
        }
        
        if (selectedCn && selectedEn) {
            const cnEl = selectedCn;
            const enEl = selectedEn;
            const isMatch = cnEl.dataset.pairId === enEl.dataset.pairId;
            
            if (isMatch) {
                [cnEl, enEl].forEach(e => {
                    e.classList.remove('ring-2', 'ring-primary', 'cursor-pointer', 'hover:bg-blue-100', 'hover:bg-gray-100');
                    e.classList.add('matched', 'bg-green-100', 'border-green-400', 'text-green-700', 'cursor-default');
                });
                matchedCount++;
                selectedCn = null;
                selectedEn = null;
                if (matchedCount === totalPairs) {
                    const tip = document.getElementById('matching-complete-tip');
                    if (tip) tip.classList.remove('hidden');
                    examState.matching = true;
                    checkAllPassed();
                }
            } else {
                [cnEl, enEl].forEach(e => e.classList.add('bg-red-100', 'border-red-400'));
                setTimeout(() => {
                    clearSelectionStyle(cnEl);
                    clearSelectionStyle(enEl);
                }, 600);
                selectedCn = null;
                selectedEn = null;
            }
        }
    }
    
    exerciseContainer.querySelectorAll('.match-cn').forEach(el => {
        el.addEventListener('click', () => handleMatchClick(el, 'cn'));
    });
    exerciseContainer.querySelectorAll('.match-en').forEach(el => {
        el.addEventListener('click', () => handleMatchClick(el, 'en'));
    });
    
    // 绑定选择题提交
    document.getElementById('check-choice').addEventListener('click', () => {
        const selected = document.querySelector('input[name="choice"]:checked');
        const resultEl = document.getElementById('choice-result');
        const options = document.querySelectorAll('.choice-option');
        
        if (!selected) {
            resultEl.textContent = '请先选择一个答案';
            resultEl.className = 'mt-3 text-orange-500';
            resultEl.classList.remove('hidden');
            return;
        }
        
        const selectedValue = parseInt(selected.value);
        const isCorrect = selectedValue === exercises.choice.answer;
        
        options.forEach((opt, i) => {
            const icon = opt.querySelector('.result-icon');
            icon.classList.remove('hidden');
            if (i === exercises.choice.answer) {
                opt.classList.add('bg-green-50', 'border-green-300');
                icon.innerHTML = '<i class="fa fa-check-circle text-green-500"></i>';
            } else if (i === selectedValue && !isCorrect) {
                opt.classList.add('bg-red-50', 'border-red-300');
                icon.innerHTML = '<i class="fa fa-times-circle text-red-500"></i>';
            }
        });
        
        if (isCorrect) {
            resultEl.textContent = '✅ 回答正确！';
            resultEl.className = 'mt-3 text-green-600 font-medium';
            examState.choice = true;
            checkAllPassed();
        } else {
            resultEl.textContent = `❌ 回答错误，正确答案是：${String.fromCharCode(65 + exercises.choice.answer)}`;
            resultEl.className = 'mt-3 text-red-600 font-medium';
        }
        resultEl.classList.remove('hidden');
    });
    
    // 绑定填空题提交
    document.getElementById('check-fillblanks').addEventListener('click', () => {
        const inputs = document.querySelectorAll('.fill-blank-input');
        const resultEl = document.getElementById('fillblanks-result');
        let correctCount = 0;
        
        inputs.forEach((input, i) => {
            const userAnswer = input.value.trim();
            const correctAnswer = exercises.fillBlanks[i].answer;
            const resultSpan = input.nextElementSibling;
            
            resultSpan.classList.remove('hidden');
            
            if (userAnswer === correctAnswer) {
                resultSpan.innerHTML = '<i class="fa fa-check text-green-500 mr-1"></i> 正确';
                resultSpan.className = 'mt-2 text-green-600 fill-blank-result';
                input.classList.add('border-green-300', 'bg-green-50');
                correctCount++;
            } else {
                resultSpan.innerHTML = `<i class="fa fa-times text-red-500 mr-1"></i> 正确答案：${correctAnswer}`;
                resultSpan.className = 'mt-2 text-red-600 fill-blank-result';
                input.classList.add('border-red-300', 'bg-red-50');
            }
        });
        
        resultEl.textContent = `你答对了 ${correctCount} / ${inputs.length} 道填空题`;
        resultEl.className = `mt-3 font-medium ${correctCount === inputs.length ? 'text-green-600' : 'text-orange-600'}`;
        resultEl.classList.remove('hidden');
        
        if (correctCount === inputs.length) {
            examState.fillBlanks = true;
            checkAllPassed();
        }
    });
}

// 闯关练习全部通过后，自动标记课文为已完成并解锁下一课
function completeLessonAutomatically() {
    if (!currentUser || !currentLesson) return;
    
    if (!currentUser.completedLessons.includes(currentLesson.id)) {
        currentUser.completedLessons.push(currentLesson.id);
        
        // 更新localStorage中的用户信息
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        users[currentUser.email] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        // 解锁下一课：刷新下一课按钮状态
        const totalTexts = LEARNING_DATA[currentDomain].texts.length;
        const atLastLesson = currentLessonIndex === totalTexts - 1;
        const nextBtn = document.getElementById('next-lesson-btn');
        nextBtn.disabled = atLastLesson;
        nextBtn.classList.toggle('opacity-50', atLastLesson);
        nextBtn.title = '';
        
        updateProgress();
        
        // 显示提示
        alert('🎉 恭喜你闯关成功，下一课已解锁！');
    }
}

// 数组洗牌函数（用于连线题打乱顺序）
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
