// ================================================================
// APP STATE & QUESTION BANK (now moved to app.js)
// ================================================================

// ===== GRAMMAR QUESTION BANK – 6 levels + extended to 10 =====
const QUESTION_BANK = {
    1: { // Level 1: Parts of Speech
        topic: 'Parts of Speech',
        questions: [
            { question: 'Which word is a noun in the sentence: "The quick brown fox jumps over the lazy dog."', options: ['quick', 'fox', 'over', 'lazy'], answer: 1 },
            { question: 'Identify the adjective: "She wore a beautiful red dress."', options: ['She', 'wore', 'beautiful', 'dress'], answer: 2 },
            { question: 'Which is a verb?', options: ['happiness', 'run', 'slowly', 'under'], answer: 1 },
            { question: 'Choose the pronoun: "John and I went to the store."', options: ['John', 'and', 'I', 'store'], answer: 2 },
            { question: 'Which word is an adverb? "He spoke very softly."', options: ['He', 'spoke', 'very', 'softly'], answer: 3 }
        ]
    },
    2: { // Level 2: Tenses (Present)
        topic: 'Tenses – Present',
        questions: [
            { question: 'She _____ to school every day.', options: ['go', 'goes', 'going', 'went'], answer: 1 },
            { question: 'They _____ a movie right now.', options: ['watch', 'watches', 'are watching', 'watched'], answer: 2 },
            { question: 'I _____ never _____ to London.', options: ['have / been', 'has / been', 'am / been', 'was / being'], answer: 0 },
            { question: 'He _____ breakfast at 7 AM every morning.', options: ['have', 'has', 'is having', 'had'], answer: 1 },
            { question: 'The baby _____ for two hours.', options: ['sleep', 'sleeps', 'has slept', 'have slept'], answer: 2 }
        ]
    },
    3: { // Level 3: Tenses (Past & Future)
        topic: 'Tenses – Past & Future',
        questions: [
            { question: 'She _____ a beautiful song yesterday.', options: ['sing', 'sang', 'sung', 'sings'], answer: 1 },
            { question: 'They _____ to Paris next summer.', options: ['travel', 'traveled', 'will travel', 'have traveled'], answer: 2 },
            { question: 'I _____ my keys when I was walking home.', options: ['lose', 'lost', 'have lost', 'will lose'], answer: 1 },
            { question: 'By 2030, we _____ more electric cars.', options: ['have', 'had', 'will have', 'are having'], answer: 2 },
            { question: 'She _____ already _____ when I arrived.', options: ['has / left', 'had / left', 'have / left', 'was / leaving'], answer: 1 }
        ]
    },
    4: { // Level 4: Modals & Conditionals
        topic: 'Modals & Conditionals',
        questions: [
            { question: 'You _____ wear a helmet when riding a bike.', options: ['must', 'can', 'may', 'could'], answer: 0 },
            { question: 'If I _____ rich, I would travel the world.', options: ['am', 'was', 'were', 'had'], answer: 2 },
            { question: 'She _____ speak three languages fluently.', options: ['can', 'must', 'should', 'would'], answer: 0 },
            { question: 'If he had studied harder, he _____ the exam.', options: ['would pass', 'would have passed', 'will pass', 'passed'], answer: 1 },
            { question: 'You _____ smoke here; it\'s prohibited.', options: ['must not', 'may not', 'need not', 'could not'], answer: 0 }
        ]
    },
    5: { // Level 5: Passive Voice
        topic: 'Passive Voice',
        questions: [
            { question: 'The cake _____ by my grandmother.', options: ['made', 'was made', 'is making', 'has make'], answer: 1 },
            { question: 'The letter _____ sent yesterday.', options: ['is', 'was', 'were', 'has'], answer: 1 },
            { question: 'A new bridge _____ built at the moment.', options: ['is', 'was', 'is being', 'has been'], answer: 2 },
            { question: 'The homework _____ already _____ by the students.', options: ['has / done', 'has / been done', 'is / done', 'was / doing'], answer: 1 },
            { question: 'The room _____ cleaned every day.', options: ['is', 'was', 'has', 'will'], answer: 0 }
        ]
    },
    6: { // Level 6: Advanced (Mixed)
        topic: 'Advanced Grammar',
        questions: [
            { question: 'Had I known, I _____ come earlier.', options: ['would', 'would have', 'will', 'have'], answer: 1 },
            { question: 'Not only _____ late, but also forgot the tickets.', options: ['he was', 'was he', 'he is', 'is he'], answer: 1 },
            { question: 'She is the woman _____ car was stolen.', options: ['who', 'whom', 'whose', 'which'], answer: 2 },
            { question: 'I wish I _____ more time to travel.', options: ['have', 'had', 'would have', 'will have'], answer: 1 },
            { question: 'By next year, I _____ here for five years.', options: ['will work', 'will have worked', 'have worked', 'would work'], answer: 1 }
        ]
    }
};

// Extend to 10 levels by reusing level 6 (shuffled)
const TOTAL_LEVELS = 10;
for (let lv = 7; lv <= TOTAL_LEVELS; lv++) {
    const base = QUESTION_BANK[6];
    const shuffled = base.questions.map(q => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5)
    }));
    QUESTION_BANK[lv] = {
        topic: `Advanced ${lv}`,
        questions: shuffled
    };
}

// ================================================================
// APP STATE
// ================================================================
let currentUser = null;
let userData = {
    levelsFinished: 0,
    totalMarks: 0,
    average: 0,
    levelScores: {},
    weakTopics: []
};

// Assessment state
let currentLevel = 1;
let currentQIndex = 0;
let questions = [];
let selectedOption = null;
let score = 0;
let answered = false;
let levelResults = [];

// DOM refs (using IDs defined in HTML)
const $ = id => document.getElementById(id);
const loginScreen = $('loginScreen');
const dashboardScreen = $('dashboardScreen');
const assessmentScreen = $('assessmentScreen');

const authForm = $('authForm');
const authEmail = $('authEmail');
const authPassword = $('authPassword');
const authSubmitBtn = $('authSubmitBtn');
const authError = $('authError');
const toggleAuthBtn = $('toggleAuthMode');
const toggleText = $('toggleText');

const dashUserEmail = $('dashUserEmail');
const statLevels = $('statLevels');
const statAvg = $('statAvg');
const statMarks = $('statMarks');
const statNext = $('statNext');
const improveText = $('improveText');

const startAssessmentBtn = $('startAssessmentBtn');
const resetProgressBtn = $('resetProgressBtn');
const logoutBtn = $('logoutBtn');

const levelBadge = $('levelBadge');
const questionCounter = $('questionCounter');
const progressFill = $('progressFill');
const questionText = $('questionText');
const optionsContainer = $('optionsContainer');
const assessmentFeedback = $('assessmentFeedback');
const nextQuestionBtn = $('nextQuestionBtn');
const resultContainer = $('resultContainer');
const resultScore = $('resultScore');
const resultDetail = $('resultDetail');
const finishAssessmentBtn = $('finishAssessmentBtn');

let isLoginMode = true;

// ================================================================
// FIREBASE HELPERS (using global auth and db from config)
// ================================================================
const auth = window.auth;
const db = window.db;

function setError(msg) {
    authError.textContent = msg;
    authError.classList.add('show');
    setTimeout(() => authError.classList.remove('show'), 4000);
}

function clearError() {
    authError.classList.remove('show');
}

async function saveUserData(uid, data) {
    try {
        await db.collection('users').doc(uid).set(data, { merge: true });
    } catch (e) {
        console.warn('Save error:', e);
    }
}

async function loadUserData(uid) {
    try {
        const doc = await db.collection('users').doc(uid).get();
        if (doc.exists) {
            return doc.data();
        }
        return null;
    } catch (e) {
        console.warn('Load error:', e);
        return null;
    }
}

// ================================================================
// UI HELPERS
// ================================================================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    $(screenId).classList.add('active');
}

function updateDashboard() {
    if (!currentUser) return;
    const data = userData;
    statLevels.textContent = data.levelsFinished || 0;
    const avg = data.average || 0;
    statAvg.textContent = avg + '%';
    statMarks.textContent = data.totalMarks || 0;
    const nextLevel = Math.min((data.levelsFinished || 0) + 1, TOTAL_LEVELS);
    statNext.textContent = nextLevel > TOTAL_LEVELS ? '🏆' : nextLevel;

    const weak = data.weakTopics || [];
    if (weak.length > 0) {
        improveText.textContent = 'Focus on: ' + weak.slice(0, 3).join(', ') + '. Practice these topics!';
    } else if (data.levelsFinished > 0) {
        improveText.textContent = '🌟 You\'re doing great! Keep going to master all levels.';
    } else {
        improveText.textContent = 'Complete levels to get personalized feedback.';
    }
    dashUserEmail.textContent = currentUser.email || currentUser.displayName || 'User';
}

// ================================================================
// ASSESSMENT ENGINE
// ================================================================
function loadLevel(level) {
    const levelData = QUESTION_BANK[level];
    if (!levelData) {
        const fallback = QUESTION_BANK[6];
        const shuffled = fallback.questions.map(q => ({
            ...q,
            options: [...q.options].sort(() => Math.random() - 0.5)
        }));
        questions = shuffled;
        levelBadge.textContent = `Level ${level} · Advanced`;
    } else {
        questions = levelData.questions.map(q => ({
            ...q,
            options: [...q.options]
        }));
        levelBadge.textContent = `Level ${level} · ${levelData.topic}`;
    }

    currentLevel = level;
    currentQIndex = 0;
    score = 0;
    levelResults = [];
    answered = false;
    selectedOption = null;
    resultContainer.style.display = 'none';
    nextQuestionBtn.style.display = 'none';
    assessmentFeedback.textContent = '';
    renderQuestion();
}

function renderQuestion() {
    if (currentQIndex >= questions.length) {
        finishAssessment();
        return;
    }

    const q = questions[currentQIndex];
    questionText.textContent = q.question;
    questionCounter.textContent = `${currentQIndex + 1} / ${questions.length}`;
    progressFill.style.width = `${((currentQIndex) / questions.length) * 100}%`;

    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="letter">${letters[idx]}</span> ${opt}`;
        btn.dataset.index = idx;
        btn.addEventListener('click', () => handleOptionClick(idx));
        optionsContainer.appendChild(btn);
    });

    selectedOption = null;
    answered = false;
    nextQuestionBtn.style.display = 'none';
    assessmentFeedback.textContent = '';
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = false);
}

function handleOptionClick(index) {
    if (answered) return;
    const q = questions[currentQIndex];
    const btns = document.querySelectorAll('.option-btn');

    btns.forEach(b => b.disabled = true);
    btns.forEach((b, i) => {
        if (i === index) b.classList.add('selected');
        if (i === q.answer) b.classList.add('correct');
        if (i === index && i !== q.answer) b.classList.add('wrong');
    });

    const isCorrect = (index === q.answer);
    if (isCorrect) score++;
    levelResults.push({ correct: isCorrect, topic: q.topic || 'General' });

    answered = true;
    selectedOption = index;
    assessmentFeedback.textContent = isCorrect ? '✅ Correct!' : '❌ Incorrect.';
    assessmentFeedback.style.color = isCorrect ? '#6EE7B7' : '#FCA5A5';
    nextQuestionBtn.style.display = 'inline-flex';
}

nextQuestionBtn.addEventListener('click', () => {
    currentQIndex++;
    if (currentQIndex >= questions.length) {
        finishAssessment();
    } else {
        renderQuestion();
    }
});

function finishAssessment() {
    const total = questions.length;
    const pct = Math.round((score / total) * 100);
    resultContainer.style.display = 'block';
    resultScore.textContent = pct + '%';
    let feedback = '';
    if (pct >= 90) feedback = '🏆 Outstanding! You\'re a grammar master!';
    else if (pct >= 70) feedback = '🌟 Great job! Keep pushing!';
    else if (pct >= 50) feedback = '📚 Good effort. Review the topics and try again.';
    else feedback = '💪 Practice makes perfect. Don\'t give up!';
    resultDetail.textContent = feedback;

    if (currentUser) {
        const uid = currentUser.uid;
        const prev = userData.levelScores || {};
        prev[currentLevel] = pct;
        const finished = userData.levelsFinished || 0;
        const newFinished = Math.max(finished, currentLevel);
        let totalMarks = 0;
        let count = 0;
        let weak = [];
        for (const [lv, sc] of Object.entries(prev)) {
            totalMarks += sc;
            count++;
            if (sc < 60) {
                const topic = QUESTION_BANK[parseInt(lv)]?.topic || `Level ${lv}`;
                weak.push(topic);
            }
        }
        const avg = count > 0 ? Math.round(totalMarks / count) : 0;
        userData.levelsFinished = newFinished;
        userData.totalMarks = totalMarks;
        userData.average = avg;
        userData.levelScores = prev;
        userData.weakTopics = [...new Set(weak)];

        saveUserData(uid, userData);
        updateDashboard();
    }

    nextQuestionBtn.style.display = 'none';
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    assessmentFeedback.textContent = '🎉 Level complete!';
    assessmentFeedback.style.color = '#A78BFA';
}

finishAssessmentBtn.addEventListener('click', () => {
    showScreen('dashboardScreen');
    updateDashboard();
});

// ================================================================
// START ASSESSMENT
// ================================================================
startAssessmentBtn.addEventListener('click', () => {
    const nextLevel = Math.min((userData.levelsFinished || 0) + 1, TOTAL_LEVELS);
    if (nextLevel > TOTAL_LEVELS) {
        alert('🎉 You have completed all levels! Reset your progress to play again.');
        return;
    }
    currentLevel = nextLevel;
    showScreen('assessmentScreen');
    loadLevel(currentLevel);
});

// ================================================================
// RESET PROGRESS
// ================================================================
resetProgressBtn.addEventListener('click', async () => {
    if (!currentUser) return;
    if (!confirm('Reset all progress? This cannot be undone.')) return;
    userData = {
        levelsFinished: 0,
        totalMarks: 0,
        average: 0,
        levelScores: {},
        weakTopics: []
    };
    await saveUserData(currentUser.uid, userData);
    updateDashboard();
});

// ================================================================
// AUTH: LOGIN / SIGNUP
// ================================================================
function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    if (isLoginMode) {
        toggleText.textContent = "Don't have an account?";
        toggleAuthBtn.textContent = 'Create one';
        authSubmitBtn.textContent = 'Sign In';
        authSubmitBtn.className = 'btn';
    } else {
        toggleText.textContent = "Already have an account?";
        toggleAuthBtn.textContent = 'Sign In';
        authSubmitBtn.textContent = 'Create Account';
        authSubmitBtn.className = 'btn btn-success';
    }
    clearError();
}
toggleAuthBtn.addEventListener('click', toggleAuthMode);

authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearError();
    const email = authEmail.value.trim();
    const password = authPassword.value;
    if (!email || !password) {
        setError('Please fill in all fields.');
        return;
    }
    authSubmitBtn.disabled = true;
    authSubmitBtn.textContent = 'Loading…';

    try {
        if (isLoginMode) {
            const cred = await auth.signInWithEmailAndPassword(email, password);
            currentUser = cred.user;
        } else {
            const cred = await auth.createUserWithEmailAndPassword(email, password);
            currentUser = cred.user;
            await saveUserData(currentUser.uid, {
                levelsFinished: 0,
                totalMarks: 0,
                average: 0,
                levelScores: {},
                weakTopics: []
            });
        }
        // Auth state listener will handle navigation
    } catch (err) {
        let msg = err.message || 'Authentication failed.';
        if (err.code === 'auth/user-not-found') msg = 'No user found with this email.';
        else if (err.code === 'auth/wrong-password') msg = 'Incorrect password.';
        else if (err.code === 'auth/email-already-in-use') msg = 'Email already in use.';
        else if (err.code === 'auth/invalid-email') msg = 'Invalid email address.';
        setError(msg);
        authSubmitBtn.disabled = false;
        authSubmitBtn.textContent = isLoginMode ? 'Sign In' : 'Create Account';
    }
});

// ================================================================
// AUTH STATE LISTENER
// ================================================================
auth.onAuthStateChanged(async (user) => {
    if (user) {
        currentUser = user;
        const data = await loadUserData(user.uid);
        if (data) {
            userData = {
                levelsFinished: data.levelsFinished || 0,
                totalMarks: data.totalMarks || 0,
                average: data.average || 0,
                levelScores: data.levelScores || {},
                weakTopics: data.weakTopics || []
            };
        } else {
            userData = {
                levelsFinished: 0,
                totalMarks: 0,
                average: 0,
                levelScores: {},
                weakTopics: []
            };
            await saveUserData(user.uid, userData);
        }
        showScreen('dashboardScreen');
        updateDashboard();
        authSubmitBtn.disabled = false;
        authSubmitBtn.textContent = isLoginMode ? 'Sign In' : 'Create Account';
        authEmail.value = '';
        authPassword.value = '';
    } else {
        currentUser = null;
        userData = {
            levelsFinished: 0,
            totalMarks: 0,
            average: 0,
            levelScores: {},
            weakTopics: []
        };
        showScreen('loginScreen');
        authSubmitBtn.disabled = false;
        authSubmitBtn.textContent = isLoginMode ? 'Sign In' : 'Create Account';
    }
});

// ================================================================
// LOGOUT
// ================================================================
logoutBtn.addEventListener('click', () => {
    auth.signOut();
});

console.log('🚀 English Grammar Game loaded!');
console.log('📚 Total levels:', TOTAL_LEVELS);