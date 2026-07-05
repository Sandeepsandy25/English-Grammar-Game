// ================================================================
// 72 GRAMMAR TOPICS (list)
// ================================================================
const TOPICS = [
    "Alphabet", "Vowels and Consonants", "Words", "Syllables", "Sentence",
    "Types of Sentences", "Subject and Predicate", "Parts of Speech",
    "Nouns", "Types of Nouns", "Countable and Uncountable Nouns",
    "Singular and Plural Nouns", "Possessive Nouns", "Collective Nouns",
    "Compound Nouns", "Pronouns", "Personal Pronouns", "Possessive Pronouns",
    "Reflexive Pronouns", "Demonstrative Pronouns", "Interrogative Pronouns",
    "Relative Pronouns", "Indefinite Pronouns", "Articles", "Determiners",
    "Quantifiers", "Adjectives", "Types of Adjectives", "Order of Adjectives",
    "Degrees of Comparison", "Verbs", "Main Verbs", "Helping Verbs",
    "Auxiliary Verbs", "Modal Verbs", "Linking Verbs", "Action Verbs",
    "Transitive Verbs", "Intransitive Verbs", "Regular Verbs",
    "Irregular Verbs", "Finite Verbs", "Non-finite Verbs", "Verb Forms",
    "Helping Verbs (again)", "Modal Verbs (again)", "Tenses",
    "Simple Present", "Present Continuous", "Present Perfect",
    "Present Perfect Continuous", "Simple Past", "Past Continuous",
    "Past Perfect", "Past Perfect Continuous", "Simple Future",
    "Future Continuous", "Future Perfect", "Future Perfect Continuous",
    "Subject-Verb Agreement", "Active Voice", "Passive Voice",
    "Adverbs", "Prepositions", "Conjunctions", "Interjections",
    "Question Tags", "Question Formation", "WH Words", "Negatives",
    "Imperative Sentences", "Exclamatory Sentences"
];

// ================================================================
// PRE‑DEFINED QUESTION BANK FOR ALL 72 TOPICS
// ================================================================
const TOPIC_QUESTIONS = {};

// ---- 1. Alphabet ----
TOPIC_QUESTIONS["Alphabet"] = [
    { q: 'How many letters are in the English alphabet?', correct: '26', wrong: ['24', '27', '25'] },
    { q: 'Which letter is the first in the alphabet?', correct: 'A', wrong: ['B', 'C', 'Z'] },
    { q: 'Which letter is a vowel?', correct: 'A', wrong: ['B', 'C', 'D'] },
    { q: 'What is the last letter of the alphabet?', correct: 'Z', wrong: ['Y', 'X', 'A'] },
    { q: 'How many vowels are in the English alphabet?', correct: '5', wrong: ['6', '4', '7'] },
    { q: 'Which of these is a consonant?', correct: 'B', wrong: ['A', 'E', 'I'] }
];

// ---- 2. Vowels and Consonants ----
TOPIC_QUESTIONS["Vowels and Consonants"] = [
    { q: 'Which of the following is a vowel?', correct: 'E', wrong: ['M', 'N', 'Z'] },
    { q: 'Which of the following is a consonant?', correct: 'T', wrong: ['A', 'E', 'I'] },
    { q: 'How many vowels are in the word "education"?', correct: '5', wrong: ['4', '6', '3'] },
    { q: 'Which letter is a consonant?', correct: 'G', wrong: ['A', 'O', 'U'] },
    { q: 'What distinguishes a vowel from a consonant?', correct: 'Vowels are voiced, consonants are not always', wrong: ['Consonants are voiced', 'No difference', 'Vowels are written with a pen'] },
    { q: 'Which of these is a vowel sound?', correct: '/iː/', wrong: ['/k/', '/t/', '/p/'] }
];

// ---- 3. Words ----
TOPIC_QUESTIONS["Words"] = [
    { q: 'What is a word?', correct: 'A unit of language that carries meaning', wrong: ['A letter', 'A sentence', 'A punctuation mark'] },
    { q: 'Which of these is a word?', correct: 'Apple', wrong: ['A', '!', '123'] },
    { q: 'How many words are in the phrase "The quick brown fox"?', correct: '4', wrong: ['3', '5', '2'] },
    { q: 'What type of word is "run"?', correct: 'Verb', wrong: ['Noun', 'Adjective', 'Preposition'] },
    { q: 'Which of these is not a word?', correct: '&*#', wrong: ['Dog', 'Run', 'Happy'] },
    { q: 'What is the smallest unit of meaning in a word?', correct: 'Morpheme', wrong: ['Letter', 'Syllable', 'Phoneme'] }
];

// ---- 4. Syllables ----
TOPIC_QUESTIONS["Syllables"] = [
    { q: 'How many syllables are in "computer"?', correct: '3', wrong: ['2', '4', '1'] },
    { q: 'How many syllables in "elephant"?', correct: '3', wrong: ['2', '4', '1'] },
    { q: 'Which word has 2 syllables?', correct: 'Pencil', wrong: ['Computer', 'Elephant', 'Unbelievable'] },
    { q: 'What is a syllable?', correct: 'A unit of pronunciation containing a vowel sound', wrong: ['A letter', 'A word', 'A punctuation mark'] },
    { q: 'How many syllables are in "beautiful"?', correct: '3', wrong: ['2', '4', '1'] },
    { q: 'Which of these has 4 syllables?', correct: 'Unbelievable', wrong: ['Dog', 'Happy', 'Computer'] }
];

// ---- 5. Sentence ----
TOPIC_QUESTIONS["Sentence"] = [
    { q: 'What is a sentence?', correct: 'A group of words that expresses a complete thought', wrong: ['A group of letters', 'A punctuation mark', 'A single word'] },
    { q: 'Which of these is a sentence?', correct: 'The cat sat on the mat.', wrong: ['Cat on mat', 'Sitting', 'Mat the on'] },
    { q: 'How many sentences are in: "Hello. How are you?"', correct: '2', wrong: ['1', '3', '4'] },
    { q: 'What does a sentence always start with?', correct: 'A capital letter', wrong: ['A vowel', 'A period', 'A comma'] },
    { q: 'What does a sentence end with?', correct: 'A full stop, question mark, or exclamation mark', wrong: ['A comma', 'A colon', 'A semicolon'] },
    { q: 'Which of these is a sentence fragment?', correct: 'Because I was tired.', wrong: ['I was tired.', 'The dog ran.', 'She sang well.'] }
];

// ---- 6. Types of Sentences ----
TOPIC_QUESTIONS["Types of Sentences"] = [
    { q: 'What type of sentence gives a command?', correct: 'Imperative', wrong: ['Declarative', 'Interrogative', 'Exclamatory'] },
    { q: 'Which sentence is interrogative?', correct: 'Do you like pizza?', wrong: ['I like pizza.', 'Eat your pizza!', 'What a pizza!'] },
    { q: 'What is a declarative sentence?', correct: 'A statement that gives information', wrong: ['A question', 'A command', 'An exclamation'] },
    { q: 'Which sentence expresses strong emotion?', correct: 'What a beautiful day!', wrong: ['It is a beautiful day.', 'Is it a beautiful day?', 'Enjoy the day.'] },
    { q: 'What type of sentence ends with a question mark?', correct: 'Interrogative', wrong: ['Declarative', 'Imperative', 'Exclamatory'] },
    { q: 'Which of these is an imperative sentence?', correct: 'Close the door.', wrong: ['The door is closed.', 'Is the door closed?', 'What a door!'] }
];

// ---- 7. Subject and Predicate ----
TOPIC_QUESTIONS["Subject and Predicate"] = [
    { q: 'In "The dog barked loudly.", what is the subject?', correct: 'The dog', wrong: ['barked', 'loudly', 'The'] },
    { q: 'What is the predicate in "She sings beautifully."?', correct: 'sings beautifully', wrong: ['She', 'sings', 'beautifully'] },
    { q: 'Identify the subject: "Running is fun."', correct: 'Running', wrong: ['is', 'fun', 'Running is'] },
    { q: 'Identify the predicate: "The children played in the park."', correct: 'played in the park', wrong: ['The children', 'played', 'in the park'] },
    { q: 'What is the complete subject in "My best friend lives nearby."?', correct: 'My best friend', wrong: ['friend', 'lives nearby', 'My'] },
    { q: 'What is the complete predicate in "The cat chased the mouse."?', correct: 'chased the mouse', wrong: ['The cat', 'chased', 'the mouse'] }
];

// ---- 8. Parts of Speech ----
TOPIC_QUESTIONS["Parts of Speech"] = [
    { q: 'How many parts of speech are there in English?', correct: '8', wrong: ['6', '7', '9'] },
    { q: 'Which part of speech names a person, place, or thing?', correct: 'Noun', wrong: ['Verb', 'Adjective', 'Adverb'] },
    { q: 'Which part of speech expresses action?', correct: 'Verb', wrong: ['Noun', 'Adjective', 'Preposition'] },
    { q: 'Which part of speech modifies a noun?', correct: 'Adjective', wrong: ['Adverb', 'Verb', 'Preposition'] },
    { q: 'Which part of speech connects words or clauses?', correct: 'Conjunction', wrong: ['Preposition', 'Interjection', 'Pronoun'] },
    { q: 'Which part of speech shows strong emotion?', correct: 'Interjection', wrong: ['Conjunction', 'Adverb', 'Pronoun'] }
];

// ---- 9. Nouns ----
TOPIC_QUESTIONS["Nouns"] = [
    { q: 'What is a noun?', correct: 'A word that names a person, place, thing, or idea', wrong: ['A word that shows action', 'A word that describes', 'A word that connects'] },
    { q: 'Which of these is a noun?', correct: 'Happiness', wrong: ['Run', 'Quickly', 'Under'] },
    { q: 'Identify the noun in: "The cat chased the mouse."', correct: 'cat', wrong: ['chased', 'the', 'quickly'] },
    { q: 'What type of noun is "London"?', correct: 'Proper noun', wrong: ['Common noun', 'Abstract noun', 'Collective noun'] },
    { q: 'Which of these is a concrete noun?', correct: 'Apple', wrong: ['Love', 'Freedom', 'Honesty'] },
    { q: 'What is a collective noun?', correct: 'A word that names a group of things', wrong: ['A word that names a single thing', 'A word that names a quality', 'A word that names an action'] }
];

// ---- 10. Types of Nouns ----
TOPIC_QUESTIONS["Types of Nouns"] = [
    { q: 'What is a proper noun?', correct: 'A specific name of a person, place, or thing', wrong: ['A general name', 'A name for a group', 'A name for an action'] },
    { q: 'Which of these is a common noun?', correct: 'City', wrong: ['London', 'John', 'Amazon'] },
    { q: 'What is an abstract noun?', correct: 'A noun that names an idea or quality', wrong: ['A noun that names a physical object', 'A noun that names a group', 'A noun that names a person'] },
    { q: 'Which of these is a collective noun?', correct: 'Flock', wrong: ['Sheep', 'Bird', 'Field'] },
    { q: 'What is a concrete noun?', correct: 'A noun that can be perceived by the senses', wrong: ['A noun that cannot be perceived', 'A noun that names a feeling', 'A noun that names a quality'] },
    { q: 'Which of these is a proper noun?', correct: 'Australia', wrong: ['Country', 'Continent', 'Ocean'] }
];

// ---- 11. Countable and Uncountable Nouns ----
TOPIC_QUESTIONS["Countable and Uncountable Nouns"] = [
    { q: 'Which of these is a countable noun?', correct: 'Chair', wrong: ['Water', 'Milk', 'Music'] },
    { q: 'Which of these is an uncountable noun?', correct: 'Rice', wrong: ['Apple', 'Car', 'Book'] },
    { q: 'Can you say "three waters"?', correct: 'No, water is uncountable', wrong: ['Yes, it is countable', 'Only in formal English', 'Only in the plural'] },
    { q: 'What is the correct quantifier for uncountable nouns?', correct: 'A lot of', wrong: ['Many', 'A few', 'Several'] },
    { q: 'Which of these is countable?', correct: 'Dog', wrong: ['Air', 'Love', 'Sand'] },
    { q: 'What is an uncountable noun?', correct: 'A noun that cannot be counted and has no plural', wrong: ['A noun that can be counted', 'A noun that always ends in -s', 'A noun that is always singular'] }
];

// ---- 12. Singular and Plural Nouns ----
TOPIC_QUESTIONS["Singular and Plural Nouns"] = [
    { q: 'What is the plural of "child"?', correct: 'Children', wrong: ['Childs', 'Childrens', 'Child'] },
    { q: 'What is the plural of "box"?', correct: 'Boxes', wrong: ['Box', 'Boxs', 'Boxen'] },
    { q: 'Which of these is a plural noun?', correct: 'Mice', wrong: ['Mouse', 'Mouses', 'Mice\'s'] },
    { q: 'What is the singular of "teeth"?', correct: 'Tooth', wrong: ['Teethe', 'Tooths', 'Toothes'] },
    { q: 'How do you form the plural of most nouns?', correct: 'Add -s or -es', wrong: ['Add -en', 'Add -ies', 'Change the vowel'] },
    { q: 'Which of these is a singular noun?', correct: 'Cactus', wrong: ['Cacti', 'Cactuses', 'Cactuss'] }
];

// ---- 13. Possessive Nouns ----
TOPIC_QUESTIONS["Possessive Nouns"] = [
    { q: 'How do you show possession for a singular noun?', correct: "Add 's", wrong: ["Add s'", "Add 'es", "Add s"] },
    { q: 'How do you show possession for a plural noun ending in -s?', correct: "Add '", wrong: ["Add 's", "Add es", "Add s"] },
    { q: 'Which is correct for "the book of the teacher"?', correct: "The teacher's book", wrong: ["The teachers' book", "The teacher book", "The book teacher"] },
    { q: 'Which is the possessive form of "children"?', correct: "Children's", wrong: ["Childrens'", "Children'", "Childrens"] },
    { q: 'What is the possessive of "James"?', correct: "James's", wrong: ["James'", "James", "Jame's"] },
    { q: 'Which sentence shows possession correctly?', correct: "The cat's tail is long.", wrong: ["The cats tail is long.", "The cats' tail is long.", "The cat tail is long."] }
];

// ---- 14. Collective Nouns ----
TOPIC_QUESTIONS["Collective Nouns"] = [
    { q: 'What is a collective noun?', correct: 'A word that refers to a group of people or things', wrong: ['A word that refers to one person', 'A word that refers to an action', 'A word that refers to a place'] },
    { q: 'Which of these is a collective noun?', correct: 'Team', wrong: ['Player', 'Game', 'Win'] },
    { q: 'What is the collective noun for a group of sheep?', correct: 'Flock', wrong: ['Herd', 'Pack', 'Pride'] },
    { q: 'Which is the collective noun for a group of lions?', correct: 'Pride', wrong: ['Flock', 'Pack', 'Herd'] },
    { q: 'What is the collective noun for a group of fish?', correct: 'School', wrong: ['Flock', 'Herd', 'Pride'] },
    { q: 'What is the collective noun for a group of birds?', correct: 'Flock', wrong: ['School', 'Pride', 'Pack'] }
];

// ---- 15. Compound Nouns ----
TOPIC_QUESTIONS["Compound Nouns"] = [
    { q: 'What is a compound noun?', correct: 'A noun made up of two or more words', wrong: ['A noun that is shortened', 'A noun that is always plural', 'A noun that is only one word'] },
    { q: 'Which of these is a compound noun?', correct: 'Toothbrush', wrong: ['Tooth', 'Brush', 'Brushing'] },
    { q: 'How is the plural of "mother-in-law" formed?', correct: 'Mothers-in-law', wrong: ['Mother-in-laws', 'Mother-in-law\'s', 'Mothers-in-laws'] },
    { q: 'Which is a compound noun?', correct: 'Pickpocket', wrong: ['Pick', 'Pocket', 'Picking'] },
    { q: 'What type of compound noun is "breakfast"?', correct: 'Closed compound', wrong: ['Open compound', 'Hyphenated compound', 'None'] },
    { q: 'Which is a hyphenated compound noun?', correct: 'Merry-go-round', wrong: ['Toothpaste', 'Classroom', 'Bookshop'] }
];

// ---- 16. Pronouns ----
TOPIC_QUESTIONS["Pronouns"] = [
    { q: 'What is a pronoun?', correct: 'A word that takes the place of a noun', wrong: ['A word that describes a noun', 'A word that shows action', 'A word that connects'] },
    { q: 'Which of these is a pronoun?', correct: 'She', wrong: ['Girl', 'Beautiful', 'Under'] },
    { q: 'What pronoun replaces "the dog" in "The dog is running"?', correct: 'It', wrong: ['He', 'She', 'They'] },
    { q: 'Which is a personal pronoun?', correct: 'They', wrong: ['Their', 'Theirs', 'Them'] },
    { q: 'What is the object pronoun of "he"?', correct: 'Him', wrong: ['He', 'His', 'Himself'] },
    { q: 'Which pronoun is used for a person?', correct: 'Who', wrong: ['Which', 'Whose', 'Whom'] }
];

// ---- 17. Personal Pronouns ----
TOPIC_QUESTIONS["Personal Pronouns"] = [
    { q: 'What are personal pronouns?', correct: 'Pronouns that refer to people or things', wrong: ['Pronouns that show possession', 'Pronouns that ask questions', 'Pronouns that point'] },
    { q: 'Which of these is a personal pronoun?', correct: 'We', wrong: ['Our', 'Ours', 'Ourselves'] },
    { q: 'What is the first person singular pronoun?', correct: 'I', wrong: ['You', 'He', 'We'] },
    { q: 'What is the third person plural pronoun?', correct: 'They', wrong: ['Them', 'Their', 'Theirs'] },
    { q: 'Which pronoun is first person plural?', correct: 'We', wrong: ['You', 'They', 'He'] },
    { q: 'What is the objective case of "I"?', correct: 'Me', wrong: ['My', 'Mine', 'Myself'] }
];

// ---- 18. Possessive Pronouns ----
TOPIC_QUESTIONS["Possessive Pronouns"] = [
    { q: 'What is a possessive pronoun?', correct: 'A pronoun that shows ownership', wrong: ['A pronoun that describes', 'A pronoun that shows action', 'A pronoun that asks'] },
    { q: 'Which of these is a possessive pronoun?', correct: 'Mine', wrong: ['My', 'Me', 'I'] },
    { q: 'Which possessive pronoun replaces "my book"?', correct: 'Mine', wrong: ['My', 'Me', 'I'] },
    { q: 'What is the possessive pronoun for "you"?', correct: 'Yours', wrong: ['Your', 'You', 'Yourselves'] },
    { q: 'Which is a possessive pronoun?', correct: 'Theirs', wrong: ['They', 'Them', 'Their'] },
    { q: 'What is the possessive pronoun for "we"?', correct: 'Ours', wrong: ['Our', 'Us', 'We'] }
];

// ---- 19. Reflexive Pronouns ----
TOPIC_QUESTIONS["Reflexive Pronouns"] = [
    { q: 'What is a reflexive pronoun?', correct: 'A pronoun that refers back to the subject', wrong: ['A pronoun that shows possession', 'A pronoun that asks a question', 'A pronoun that points'] },
    { q: 'Which of these is a reflexive pronoun?', correct: 'Himself', wrong: ['Him', 'His', 'He'] },
    { q: 'What is the reflexive pronoun for "I"?', correct: 'Myself', wrong: ['Me', 'My', 'Mine'] },
    { q: 'Which sentence uses a reflexive pronoun correctly?', correct: 'She hurt herself.', wrong: ['She hurt her.', 'She hurt she.', 'She hurt herselfs.'] },
    { q: 'What is the reflexive pronoun for "they"?', correct: 'Themselves', wrong: ['Them', 'Their', 'Theirs'] },
    { q: 'Which is a reflexive pronoun?', correct: 'Ourselves', wrong: ['Our', 'Us', 'We'] }
];

// ---- 20. Demonstrative Pronouns ----
TOPIC_QUESTIONS["Demonstrative Pronouns"] = [
    { q: 'What is a demonstrative pronoun?', correct: 'A pronoun that points to a specific thing', wrong: ['A pronoun that shows possession', 'A pronoun that asks', 'A pronoun that reflects'] },
    { q: 'Which of these is a demonstrative pronoun?', correct: 'This', wrong: ['These', 'Those', 'That'] },
    { q: 'Which demonstrative pronoun is used for a singular thing near the speaker?', correct: 'This', wrong: ['That', 'These', 'Those'] },
    { q: 'Which demonstrative pronoun is used for a plural thing far from the speaker?', correct: 'Those', wrong: ['These', 'This', 'That'] },
    { q: 'Which sentence uses a demonstrative pronoun?', correct: 'That is my car.', wrong: ['That car is mine.', 'This is a car.', 'Those cars are fast.'] },
    { q: 'What is the difference between "this" and "these"?', correct: 'This is singular, these is plural', wrong: ['This is far, these is near', 'This is plural, these is singular', 'No difference'] }
];

// ---- 21. Interrogative Pronouns ----
TOPIC_QUESTIONS["Interrogative Pronouns"] = [
    { q: 'What is an interrogative pronoun?', correct: 'A pronoun used to ask a question', wrong: ['A pronoun that shows possession', 'A pronoun that points', 'A pronoun that reflects'] },
    { q: 'Which of these is an interrogative pronoun?', correct: 'Who', wrong: ['Whom', 'Whose', 'Which'] },
    { q: 'Which interrogative pronoun is used for people?', correct: 'Who', wrong: ['Which', 'What', 'Whom'] },
    { q: 'Which interrogative pronoun is used for things?', correct: 'What', wrong: ['Who', 'Whom', 'Whose'] },
    { q: 'What is the correct interrogative pronoun for "___ is your name?"?', correct: 'What', wrong: ['Who', 'Which', 'Whom'] },
    { q: 'Which interrogative pronoun shows possession?', correct: 'Whose', wrong: ['Who', 'Whom', 'Which'] }
];

// ---- 22. Relative Pronouns ----
TOPIC_QUESTIONS["Relative Pronouns"] = [
    { q: 'What is a relative pronoun?', correct: 'A pronoun that introduces a relative clause', wrong: ['A pronoun that asks a question', 'A pronoun that shows possession', 'A pronoun that points'] },
    { q: 'Which of these is a relative pronoun?', correct: 'Which', wrong: ['What', 'Where', 'When'] },
    { q: 'Which relative pronoun is used for people?', correct: 'Who', wrong: ['Which', 'That', 'Whom'] },
    { q: 'Which relative pronoun is used for things?', correct: 'Which', wrong: ['Who', 'Whom', 'Whose'] },
    { q: 'What is the relative pronoun in "The book that I read"?', correct: 'That', wrong: ['Which', 'Who', 'Whom'] },
    { q: 'Which relative pronoun shows possession?', correct: 'Whose', wrong: ['Who', 'Whom', 'Which'] }
];

// ---- 23. Indefinite Pronouns ----
TOPIC_QUESTIONS["Indefinite Pronouns"] = [
    { q: 'What is an indefinite pronoun?', correct: 'A pronoun that refers to a non-specific person or thing', wrong: ['A pronoun that refers to a specific person', 'A pronoun that shows possession', 'A pronoun that asks'] },
    { q: 'Which of these is an indefinite pronoun?', correct: 'Everyone', wrong: ['Someone', 'Anyone', 'No one'] },
    { q: 'Which indefinite pronoun is singular?', correct: 'Each', wrong: ['All', 'Some', 'Many'] },
    { q: 'Which indefinite pronoun is plural?', correct: 'Both', wrong: ['Each', 'Either', 'Neither'] },
    { q: 'Which sentence uses an indefinite pronoun?', correct: 'Nobody knows the answer.', wrong: ['He knows the answer.', 'The answer is known.', 'They know the answer.'] },
    { q: 'What is the indefinite pronoun for "no person"?', correct: 'Nobody', wrong: ['Anybody', 'Everybody', 'Somebody'] }
];

// ---- 24. Articles ----
TOPIC_QUESTIONS["Articles"] = [
    { q: 'How many articles are there in English?', correct: '3 (a, an, the)', wrong: ['2 (a, the)', '4 (a, an, the, some)', '1 (the)'] },
    { q: 'Which article is used before a vowel sound?', correct: 'An', wrong: ['A', 'The', 'None'] },
    { q: 'Which article is a definite article?', correct: 'The', wrong: ['A', 'An', 'Some'] },
    { q: 'Which sentence uses the correct article?', correct: 'I saw an elephant.', wrong: ['I saw a elephant.', 'I saw the elephant.', 'I saw elephant.'] },
    { q: 'What is the zero article?', correct: 'No article used', wrong: ['The article "a"', 'The article "an"', 'The article "the"'] },
    { q: 'Which of these uses the zero article?', correct: 'She likes milk.', wrong: ['She likes a milk.', 'She likes the milk.', 'She likes an milk.'] }
];

// ---- 25. Determiners ----
TOPIC_QUESTIONS["Determiners"] = [
    { q: 'What is a determiner?', correct: 'A word that introduces a noun and provides context', wrong: ['A word that describes a noun', 'A word that replaces a noun', 'A word that shows action'] },
    { q: 'Which of these is a determiner?', correct: 'This', wrong: ['Beautiful', 'Run', 'Quickly'] },
    { q: 'Which determiner is used with plural countable nouns?', correct: 'Many', wrong: ['Much', 'A little', 'A lot'] },
    { q: 'Which determiner is used with uncountable nouns?', correct: 'Much', wrong: ['Many', 'Several', 'A few'] },
    { q: 'What is the determiner in "those books"?', correct: 'Those', wrong: ['Books', 'Those books', 'The'] },
    { q: 'Which determiner shows quantity?', correct: 'Some', wrong: ['This', 'That', 'Every'] }
];

// ---- 26. Quantifiers ----
TOPIC_QUESTIONS["Quantifiers"] = [
    { q: 'What is a quantifier?', correct: 'A word that expresses quantity or amount', wrong: ['A word that describes a noun', 'A word that shows action', 'A word that connects'] },
    { q: 'Which of these is a quantifier?', correct: 'A few', wrong: ['This', 'That', 'Beautiful'] },
    { q: 'Which quantifier is used with uncountable nouns?', correct: 'A little', wrong: ['A few', 'Several', 'Many'] },
    { q: 'Which quantifier means "almost none"?', correct: 'Very few', wrong: ['A lot', 'Much', 'Many'] },
    { q: 'Which sentence uses the correct quantifier?', correct: 'There are a few apples.', wrong: ['There is a few apples.', 'There are a little apples.', 'There is a little apples.'] },
    { q: 'What quantifier is used for both countable and uncountable nouns?', correct: 'A lot of', wrong: ['Much', 'Many', 'A few'] }
];

// ---- 27. Adjectives ----
TOPIC_QUESTIONS["Adjectives"] = [
    { q: 'What is an adjective?', correct: 'A word that describes a noun or pronoun', wrong: ['A word that describes a verb', 'A word that shows action', 'A word that connects'] },
    { q: 'Which of these is an adjective?', correct: 'Happy', wrong: ['Happily', 'Happiness', 'Happen'] },
    { q: 'What is the adjective in "the blue car"?', correct: 'Blue', wrong: ['Car', 'The', 'Car\'s'] },
    { q: 'Which adjective describes a quality?', correct: 'Beautiful', wrong: ['Blue', 'Big', 'Small'] },
    { q: 'Which sentence uses an adjective correctly?', correct: 'She is a kind person.', wrong: ['She is kind person.', 'She is a person kind.', 'She is person kind.'] },
    { q: 'What is the adjective in "the tall building"?', correct: 'Tall', wrong: ['Building', 'The', 'Tall building'] }
];

// ---- 28. Types of Adjectives ----
TOPIC_QUESTIONS["Types of Adjectives"] = [
    { q: 'What is a possessive adjective?', correct: 'An adjective that shows ownership', wrong: ['An adjective that describes color', 'An adjective that shows quantity', 'An adjective that describes quality'] },
    { q: 'Which of these is a possessive adjective?', correct: 'My', wrong: ['Mine', 'Me', 'I'] },
    { q: 'What is a demonstrative adjective?', correct: 'An adjective that points to a specific noun', wrong: ['An adjective that shows ownership', 'An adjective that describes quantity', 'An adjective that describes quality'] },
    { q: 'Which is a demonstrative adjective?', correct: 'These', wrong: ['This', 'Those', 'That'] },
    { q: 'What is an interrogative adjective?', correct: 'An adjective used to ask a question', wrong: ['An adjective that shows possession', 'An adjective that points', 'An adjective that describes'] },
    { q: 'Which is an interrogative adjective?', correct: 'Which', wrong: ['Who', 'Whom', 'Whose'] }
];

// ---- 29. Order of Adjectives ----
TOPIC_QUESTIONS["Order of Adjectives"] = [
    { q: 'What is the correct order of adjectives?', correct: 'Opinion, size, age, shape, color, origin, material, purpose', wrong: ['Size, age, shape, color, opinion, origin, material, purpose', 'Color, opinion, size, age, shape, origin, material, purpose', 'Age, size, opinion, shape, color, origin, material, purpose'] },
    { q: 'Which is the correct order: "a beautiful old round wooden table"?', correct: 'Opinion, age, shape, material', wrong: ['Age, opinion, shape, material', 'Shape, opinion, age, material', 'Material, age, shape, opinion'] },
    { q: 'Which sentence has the correct adjective order?', correct: 'She has a lovely small old French car.', wrong: ['She has a small lovely old French car.', 'She has a French small old lovely car.', 'She has an old lovely small French car.'] },
    { q: 'Which adjective comes before "size" in the order?', correct: 'Opinion', wrong: ['Age', 'Shape', 'Color'] },
    { q: 'What is the first type of adjective in the standard order?', correct: 'Opinion', wrong: ['Size', 'Age', 'Shape'] },
    { q: 'Which type comes after "material" in the order?', correct: 'Purpose', wrong: ['Origin', 'Color', 'Shape'] }
];

// ---- 30. Degrees of Comparison ----
TOPIC_QUESTIONS["Degrees of Comparison"] = [
    { q: 'What are the three degrees of comparison?', correct: 'Positive, comparative, superlative', wrong: ['Comparative, superlative, absolute', 'Positive, negative, superlative', 'Positive, comparative, absolute'] },
    { q: 'What is the comparative form of "big"?', correct: 'Bigger', wrong: ['More big', 'Biggest', 'Most big'] },
    { q: 'What is the superlative form of "beautiful"?', correct: 'Most beautiful', wrong: ['Beautifuler', 'Beautifulest', 'More beautiful'] },
    { q: 'Which sentence uses the comparative correctly?', correct: 'She is taller than me.', wrong: ['She is more tall than me.', 'She is tallest than me.', 'She is taller then me.'] },
    { q: 'Which is the superlative of "good"?', correct: 'Best', wrong: ['Gooder', 'Goodest', 'More good'] },
    { q: 'What is the positive degree of "better"?', correct: 'Good', wrong: ['Gooder', 'Best', 'Well'] }
];

// ---- 31. Verbs ----
TOPIC_QUESTIONS["Verbs"] = [
    { q: 'What is a verb?', correct: 'A word that expresses an action, state, or occurrence', wrong: ['A word that describes a noun', 'A word that shows ownership', 'A word that connects'] },
    { q: 'Which of these is a verb?', correct: 'Run', wrong: ['Runner', 'Running', 'Runs'] },
    { q: 'What is the verb in "She sings beautifully"?', correct: 'Sings', wrong: ['She', 'Beautifully', 'Sings beautifully'] },
    { q: 'Which type of verb shows a state of being?', correct: 'Linking verb', wrong: ['Action verb', 'Transitive verb', 'Intransitive verb'] },
    { q: 'What is the main verb in "They are playing football"?', correct: 'Playing', wrong: ['Are', 'They', 'Football'] },
    { q: 'Which of these is an action verb?', correct: 'Jump', wrong: ['Is', 'Am', 'Are'] }
];

// ---- 32. Main Verbs ----
TOPIC_QUESTIONS["Main Verbs"] = [
    { q: 'What is a main verb?', correct: 'The primary verb in a sentence that shows the action or state', wrong: ['A verb that helps the main verb', 'A verb that shows possession', 'A verb that connects'] },
    { q: 'Which of these is a main verb?', correct: 'Eat', wrong: ['Is eating', 'Has eaten', 'Was eating'] },
    { q: 'What is the main verb in "I have finished my homework"?', correct: 'Finished', wrong: ['Have', 'Homework', 'My'] },
    { q: 'What is the main verb in "She is a teacher"?', correct: 'Is', wrong: ['Teacher', 'She', 'A'] },
    { q: 'Which sentence has a main verb?', correct: 'He runs fast.', wrong: ['He is running.', 'He has run.', 'He ran.'] },
    { q: 'What is the main verb in "They were singing loudly"?', correct: 'Singing', wrong: ['Were', 'Loudly', 'They'] }
];

// ---- 33. Helping Verbs ----
TOPIC_QUESTIONS["Helping Verbs"] = [
    { q: 'What is a helping verb?', correct: 'A verb that comes before the main verb to form a verb phrase', wrong: ['A verb that shows action', 'A verb that describes', 'A verb that connects'] },
    { q: 'Which of these is a helping verb?', correct: 'Has', wrong: ['Run', 'Eat', 'Is'] },
    { q: 'What is the helping verb in "They have been waiting"?', correct: 'Have been', wrong: ['Have', 'Been', 'Waiting'] },
    { q: 'Which helping verb shows obligation?', correct: 'Must', wrong: ['Can', 'May', 'Will'] },
    { q: 'What is the helping verb in "She is reading"?', correct: 'Is', wrong: ['Reading', 'She', 'Is reading'] },
    { q: 'Which helping verb is used in future tense?', correct: 'Will', wrong: ['Did', 'Has', 'Was'] }
];

// ---- 34. Auxiliary Verbs ----
TOPIC_QUESTIONS["Auxiliary Verbs"] = [
    { q: 'What is an auxiliary verb?', correct: 'A helping verb used to form tenses, moods, or voices', wrong: ['A main verb', 'A verb that describes a noun', 'A verb that connects'] },
    { q: 'Which of these is an auxiliary verb?', correct: 'Do', wrong: ['Run', 'Eat', 'Sleep'] },
    { q: 'Which auxiliary verb is used to form questions?', correct: 'Do', wrong: ['Has', 'Is', 'Are'] },
    { q: 'What is the auxiliary in "Have you eaten?"?', correct: 'Have', wrong: ['You', 'Eaten', 'Have you'] },
    { q: 'Which auxiliary verb is used in the passive voice?', correct: 'Be', wrong: ['Have', 'Do', 'Will'] },
    { q: 'What is the auxiliary verb in "They were seen"?', correct: 'Were', wrong: ['Seen', 'They', 'Were seen'] }
];

// ---- 35. Modal Verbs ----
TOPIC_QUESTIONS["Modal Verbs"] = [
    { q: 'What is a modal verb?', correct: 'A verb that expresses possibility, necessity, or ability', wrong: ['A verb that shows action', 'A verb that describes a noun', 'A verb that connects'] },
    { q: 'Which of these is a modal verb?', correct: 'Can', wrong: ['Run', 'Eat', 'Is'] },
    { q: 'Which modal verb expresses obligation?', correct: 'Must', wrong: ['Can', 'May', 'Will'] },
    { q: 'Which modal verb expresses permission?', correct: 'May', wrong: ['Must', 'Should', 'Would'] },
    { q: 'Which sentence uses a modal verb correctly?', correct: 'You must wear a helmet.', wrong: ['You must to wear a helmet.', 'You must wearing a helmet.', 'You must wears a helmet.'] },
    { q: 'Which modal verb expresses ability?', correct: 'Can', wrong: ['May', 'Must', 'Should'] }
];

// ---- 36. Linking Verbs ----
TOPIC_QUESTIONS["Linking Verbs"] = [
    { q: 'What is a linking verb?', correct: 'A verb that connects the subject to a subject complement', wrong: ['A verb that shows action', 'A verb that helps the main verb', 'A verb that shows possession'] },
    { q: 'Which of these is a linking verb?', correct: 'Seem', wrong: ['Run', 'Eat', 'Jump'] },
    { q: 'What is the linking verb in "He is a doctor"?', correct: 'Is', wrong: ['Doctor', 'He', 'A'] },
    { q: 'Which linking verb shows a state of being?', correct: 'Am', wrong: ['Run', 'Eat', 'Jump'] },
    { q: 'Which sentence uses a linking verb?', correct: 'She feels happy.', wrong: ['She runs quickly.', 'She eats lunch.', 'She jumps high.'] },
    { q: 'What is the linking verb in "They became friends"?', correct: 'Became', wrong: ['Friends', 'They', 'Became friends'] }
];

// ---- 37. Action Verbs ----
TOPIC_QUESTIONS["Action Verbs"] = [
    { q: 'What is an action verb?', correct: 'A verb that expresses an action performed by the subject', wrong: ['A verb that connects the subject to a complement', 'A verb that helps the main verb', 'A verb that shows possession'] },
    { q: 'Which of these is an action verb?', correct: 'Kick', wrong: ['Is', 'Seem', 'Become'] },
    { q: 'What is the action verb in "She painted a picture"?', correct: 'Painted', wrong: ['She', 'Picture', 'Painted a'] },
    { q: 'Which sentence has an action verb?', correct: 'He wrote a letter.', wrong: ['He is a writer.', 'He seems tired.', 'He became a doctor.'] },
    { q: 'What is the action verb in "They are playing football"?', correct: 'Playing', wrong: ['Are', 'Football', 'They'] },
    { q: 'Which action verb shows physical action?', correct: 'Run', wrong: ['Think', 'Believe', 'Want'] }
];

// ---- 38. Transitive Verbs ----
TOPIC_QUESTIONS["Transitive Verbs"] = [
    { q: 'What is a transitive verb?', correct: 'A verb that requires a direct object', wrong: ['A verb that does not take an object', 'A verb that describes a state', 'A verb that connects'] },
    { q: 'Which of these is a transitive verb?', correct: 'Eat', wrong: ['Arrive', 'Sleep', 'Laugh'] },
    { q: 'What is the direct object in "She read the book"?', correct: 'Book', wrong: ['She', 'Read', 'The'] },
    { q: 'Which sentence has a transitive verb?', correct: 'He bought a car.', wrong: ['He slept.', 'He laughed.', 'He arrived.'] },
    { q: 'What is the object of the transitive verb "build" in "They built a house"?', correct: 'House', wrong: ['They', 'Built', 'A'] },
    { q: 'Which verb can be transitive?', correct: 'Carry', wrong: ['Arrive', 'Exist', 'Occur'] }
];

// ---- 39. Intransitive Verbs ----
TOPIC_QUESTIONS["Intransitive Verbs"] = [
    { q: 'What is an intransitive verb?', correct: 'A verb that does not take a direct object', wrong: ['A verb that requires an object', 'A verb that describes a state', 'A verb that connects'] },
    { q: 'Which of these is an intransitive verb?', correct: 'Arrive', wrong: ['Eat', 'Buy', 'Build'] },
    { q: 'Which sentence has an intransitive verb?', correct: 'He sleeps.', wrong: ['He eats pizza.', 'He buys a car.', 'He builds a house.'] },
    { q: 'What is the intransitive verb in "She laughed loudly"?', correct: 'Laughed', wrong: ['She', 'Loudly', 'Laughed loudly'] },
    { q: 'Which verb is always intransitive?', correct: 'Die', wrong: ['Write', 'Read', 'Eat'] },
    { q: 'Which sentence uses an intransitive verb?', correct: 'They ran fast.', wrong: ['They ran a race.', 'They ran the company.', 'They ran a mile.'] }
];

// ---- 40. Regular Verbs ----
TOPIC_QUESTIONS["Regular Verbs"] = [
    { q: 'What is a regular verb?', correct: 'A verb that forms the past tense by adding -ed', wrong: ['A verb that changes form completely', 'A verb that does not change', 'A verb that adds -ing'] },
    { q: 'Which of these is a regular verb?', correct: 'Walk', wrong: ['Go', 'Sing', 'Swim'] },
    { q: 'What is the past tense of "play"?', correct: 'Played', wrong: ['Plays', 'Played', 'Playing'] },
    { q: 'What is the past participle of "talk"?', correct: 'Talked', wrong: ['Talk', 'Talks', 'Talking'] },
    { q: 'Which verb is regular?', correct: 'Jump', wrong: ['Drive', 'Write', 'Fly'] },
    { q: 'What is the past tense of "help"?', correct: 'Helped', wrong: ['Help', 'Helps', 'Helping'] }
];

// ---- 41. Irregular Verbs ----
TOPIC_QUESTIONS["Irregular Verbs"] = [
    { q: 'What is an irregular verb?', correct: 'A verb that does not form the past tense by adding -ed', wrong: ['A verb that adds -ed', 'A verb that adds -ing', 'A verb that never changes'] },
    { q: 'Which of these is an irregular verb?', correct: 'Go', wrong: ['Walk', 'Talk', 'Play'] },
    { q: 'What is the past tense of "go"?', correct: 'Went', wrong: ['Goed', 'Gone', 'Going'] },
    { q: 'What is the past participle of "sing"?', correct: 'Sung', wrong: ['Sang', 'Singed', 'Sing'] },
    { q: 'Which verb is irregular?', correct: 'Swim', wrong: ['Run', 'Eat', 'Sleep'] },
    { q: 'What is the past tense of "break"?', correct: 'Broke', wrong: ['Break', 'Brake', 'Broken'] }
];

// ---- 42. Finite Verbs ----
TOPIC_QUESTIONS["Finite Verbs"] = [
    { q: 'What is a finite verb?', correct: 'A verb that shows tense and agrees with the subject', wrong: ['A verb that does not show tense', 'A verb that never changes', 'A verb that is always in the infinitive'] },
    { q: 'Which of these is a finite verb?', correct: 'Runs', wrong: ['Running', 'To run', 'Run'] },
    { q: 'What is the finite verb in "She walks to school"?', correct: 'Walks', wrong: ['She', 'To', 'School'] },
    { q: 'Which sentence has a finite verb?', correct: 'He is running.', wrong: ['He running.', 'Running fast.', 'To run fast.'] },
    { q: 'What is the finite verb in "They have eaten"?', correct: 'Have', wrong: ['Eaten', 'They', 'Have eaten'] },
    { q: 'Which verb is finite in "I am going"?', correct: 'Am', wrong: ['Going', 'I', 'Am going'] }
];

// ---- 43. Non-finite Verbs ----
TOPIC_QUESTIONS["Non-finite Verbs"] = [
    { q: 'What is a non-finite verb?', correct: 'A verb that does not show tense or agree with the subject', wrong: ['A verb that shows tense', 'A verb that always changes', 'A verb that is always the main verb'] },
    { q: 'Which of these is a non-finite verb?', correct: 'To run', wrong: ['Runs', 'Ran', 'Running'] },
    { q: 'What is the non-finite verb in "He wants to go"?', correct: 'To go', wrong: ['Wants', 'He', 'Go'] },
    { q: 'Which is a non-finite verb form?', correct: 'Running (as a noun)', wrong: ['Runs', 'Ran', 'Is running'] },
    { q: 'Which sentence has a non-finite verb?', correct: 'She likes singing.', wrong: ['She sings.', 'She sang.', 'She is singing.'] },
    { q: 'What is the non-finite verb in "They are playing"?', correct: 'Playing', wrong: ['Are', 'They', 'Are playing'] }
];

// ---- 44. Verb Forms ----
TOPIC_QUESTIONS["Verb Forms"] = [
    { q: 'What are the five forms of a verb?', correct: 'Base, past, past participle, present participle, third person singular', wrong: ['Base, past, future, present, past participle', 'Infinitive, gerund, participle, finite, non-finite', 'Present, past, future, perfect, progressive'] },
    { q: 'Which is the base form of "went"?', correct: 'Go', wrong: ['Goes', 'Going', 'Gone'] },
    { q: 'What is the present participle of "write"?', correct: 'Writing', wrong: ['Writes', 'Wrote', 'Written'] },
    { q: 'What is the third person singular of "do"?', correct: 'Does', wrong: ['Do', 'Did', 'Done'] },
    { q: 'Which form is "been"?', correct: 'Past participle', wrong: ['Base', 'Past', 'Present participle'] },
    { q: 'What is the past form of "eat"?', correct: 'Ate', wrong: ['Eaten', 'Eats', 'Eating'] }
];

// ---- 45. Tenses (overview) ----
TOPIC_QUESTIONS["Tenses"] = [
    { q: 'How many basic tenses are there in English?', correct: '3 (past, present, future)', wrong: ['2 (present, past)', '4 (present, past, future, perfect)', '6 (simple, continuous, perfect, perfect continuous for each)'] },
    { q: 'Which tense is used for actions that are happening now?', correct: 'Present continuous', wrong: ['Simple present', 'Present perfect', 'Simple future'] },
    { q: 'Which tense is used for actions completed in the past?', correct: 'Simple past', wrong: ['Past continuous', 'Past perfect', 'Simple present'] },
    { q: 'Which tense is used for actions that will happen in the future?', correct: 'Simple future', wrong: ['Future continuous', 'Future perfect', 'Present continuous'] },
    { q: 'What is the tense in "She has been studying"?', correct: 'Present perfect continuous', wrong: ['Present perfect', 'Past perfect continuous', 'Present continuous'] },
    { q: 'Which tense is "I had eaten"?', correct: 'Past perfect', wrong: ['Simple past', 'Past perfect continuous', 'Present perfect'] }
];

// ---- 46. Simple Present ----
TOPIC_QUESTIONS["Simple Present"] = [
    { q: 'What is the simple present used for?', correct: 'Habits, general truths, and scheduled events', wrong: ['Actions happening now', 'Actions completed in the past', 'Actions in the future'] },
    { q: 'Which sentence is in simple present?', correct: 'She writes every day.', wrong: ['She is writing now.', 'She wrote yesterday.', 'She will write tomorrow.'] },
    { q: 'What is the third person singular form of "go"?', correct: 'Goes', wrong: ['Go', 'Going', 'Gone'] },
    { q: 'Which sentence uses the simple present correctly?', correct: 'He runs fast.', wrong: ['He run fast.', 'He running fast.', 'He runs fastly.'] },
    { q: 'What is the simple present of "study" for he/she/it?', correct: 'Studies', wrong: ['Study', 'Studys', 'Studying'] },
    { q: 'Which of these is a simple present tense?', correct: 'I work.', wrong: ['I am working.', 'I worked.', 'I will work.'] }
];

// ---- 47. Present Continuous ----
TOPIC_QUESTIONS["Present Continuous"] = [
    { q: 'What is the present continuous used for?', correct: 'Actions happening at the moment of speaking', wrong: ['Habits and routines', 'General truths', 'Completed actions'] },
    { q: 'Which sentence is in present continuous?', correct: 'She is reading a book.', wrong: ['She reads a book.', 'She read a book.', 'She will read a book.'] },
    { q: 'What is the present continuous form of "play" for "I"?', correct: 'I am playing', wrong: ['I play', 'I playing', 'I am play'] },
    { q: 'Which sentence uses the present continuous correctly?', correct: 'They are playing football.', wrong: ['They is playing football.', 'They are play football.', 'They playing football.'] },
    { q: 'What is the present continuous of "run" for "she"?', correct: 'She is running', wrong: ['She running', 'She run', 'She runs'] },
    { q: 'Which of these is a present continuous tense?', correct: 'I am eating.', wrong: ['I eat.', 'I ate.', 'I will eat.'] }
];

// ---- 48. Present Perfect ----
TOPIC_QUESTIONS["Present Perfect"] = [
    { q: 'What is the present perfect used for?', correct: 'Past actions with present relevance', wrong: ['Actions happening now', 'Actions in the future', 'Habits and routines'] },
    { q: 'Which sentence is in present perfect?', correct: 'I have seen that movie.', wrong: ['I see that movie.', 'I saw that movie.', 'I am seeing that movie.'] },
    { q: 'What is the present perfect of "go" for "he"?', correct: 'He has gone', wrong: ['He have gone', 'He went', 'He goes'] },
    { q: 'Which sentence uses the present perfect correctly?', correct: 'We have lived here for five years.', wrong: ['We lived here for five years.', 'We are living here for five years.', 'We live here for five years.'] },
    { q: 'What is the present perfect form of "eat" for "they"?', correct: 'They have eaten', wrong: ['They ate', 'They eat', 'They are eating'] },
    { q: 'Which of these is a present perfect tense?', correct: 'I have finished.', wrong: ['I finish.', 'I am finishing.', 'I will finish.'] }
];

// ---- 49. Present Perfect Continuous ----
TOPIC_QUESTIONS["Present Perfect Continuous"] = [
    { q: 'What is the present perfect continuous used for?', correct: 'Actions that started in the past and are still continuing', wrong: ['Actions completed in the past', 'Actions happening now', 'Actions in the future'] },
    { q: 'Which sentence is in present perfect continuous?', correct: 'She has been waiting for an hour.', wrong: ['She has waited for an hour.', 'She is waiting for an hour.', 'She waits for an hour.'] },
    { q: 'What is the present perfect continuous of "study" for "I"?', correct: 'I have been studying', wrong: ['I have studied', 'I am studying', 'I study'] },
    { q: 'Which sentence uses the present perfect continuous correctly?', correct: 'They have been playing since morning.', wrong: ['They have played since morning.', 'They are playing since morning.', 'They play since morning.'] },
    { q: 'What is the present perfect continuous form of "run" for "he"?', correct: 'He has been running', wrong: ['He has run', 'He is running', 'He runs'] },
    { q: 'Which of these is a present perfect continuous tense?', correct: 'I have been working.', wrong: ['I have worked.', 'I am working.', 'I will work.'] }
];

// ---- 50. Simple Past ----
TOPIC_QUESTIONS["Simple Past"] = [
    { q: 'What is the simple past used for?', correct: 'Actions completed in the past', wrong: ['Actions happening now', 'Actions in the future', 'Habits and routines'] },
    { q: 'Which sentence is in simple past?', correct: 'She visited her grandmother.', wrong: ['She visits her grandmother.', 'She is visiting her grandmother.', 'She will visit her grandmother.'] },
    { q: 'What is the simple past of "go"?', correct: 'Went', wrong: ['Go', 'Gone', 'Going'] },
    { q: 'Which sentence uses the simple past correctly?', correct: 'He ate dinner.', wrong: ['He eat dinner.', 'He eaten dinner.', 'He is eating dinner.'] },
    { q: 'What is the simple past of "write" for "they"?', correct: 'They wrote', wrong: ['They write', 'They written', 'They writes'] },
    { q: 'Which of these is a simple past tense?', correct: 'I walked.', wrong: ['I walk.', 'I am walking.', 'I will walk.'] }
];

// ---- 51. Past Continuous ----
TOPIC_QUESTIONS["Past Continuous"] = [
    { q: 'What is the past continuous used for?', correct: 'Actions in progress at a specific time in the past', wrong: ['Actions completed in the past', 'Actions happening now', 'Actions in the future'] },
    { q: 'Which sentence is in past continuous?', correct: 'She was reading when I called.', wrong: ['She read when I called.', 'She is reading when I called.', 'She will read when I called.'] },
    { q: 'What is the past continuous of "play" for "they"?', correct: 'They were playing', wrong: ['They played', 'They have played', 'They are playing'] },
    { q: 'Which sentence uses the past continuous correctly?', correct: 'I was sleeping when the phone rang.', wrong: ['I slept when the phone rang.', 'I have slept when the phone rang.', 'I am sleeping when the phone rang.'] },
    { q: 'What is the past continuous of "run" for "he"?', correct: 'He was running', wrong: ['He ran', 'He has run', 'He is running'] },
    { q: 'Which of these is a past continuous tense?', correct: 'I was eating.', wrong: ['I ate.', 'I have eaten.', 'I will eat.'] }
];

// ---- 52. Past Perfect ----
TOPIC_QUESTIONS["Past Perfect"] = [
    { q: 'What is the past perfect used for?', correct: 'Actions that were completed before another action in the past', wrong: ['Actions in progress in the past', 'Actions happening now', 'Actions in the future'] },
    { q: 'Which sentence is in past perfect?', correct: 'She had left before I arrived.', wrong: ['She left before I arrived.', 'She was leaving before I arrived.', 'She has left before I arrived.'] },
    { q: 'What is the past perfect of "go" for "he"?', correct: 'He had gone', wrong: ['He went', 'He has gone', 'He was going'] },
    { q: 'Which sentence uses the past perfect correctly?', correct: 'They had eaten before we came.', wrong: ['They ate before we came.', 'They have eaten before we came.', 'They were eating before we came.'] },
    { q: 'What is the past perfect of "write" for "they"?', correct: 'They had written', wrong: ['They wrote', 'They have written', 'They were writing'] },
    { q: 'Which of these is a past perfect tense?', correct: 'I had finished.', wrong: ['I finished.', 'I have finished.', 'I was finishing.'] }
];

// ---- 53. Past Perfect Continuous ----
TOPIC_QUESTIONS["Past Perfect Continuous"] = [
    { q: 'What is the past perfect continuous used for?', correct: 'Actions in progress before another action in the past', wrong: ['Actions completed in the past', 'Actions happening now', 'Actions in the future'] },
    { q: 'Which sentence is in past perfect continuous?', correct: 'She had been waiting for an hour when he arrived.', wrong: ['She had waited for an hour when he arrived.', 'She was waiting for an hour when he arrived.', 'She has been waiting for an hour when he arrived.'] },
    { q: 'What is the past perfect continuous of "study" for "I"?', correct: 'I had been studying', wrong: ['I had studied', 'I was studying', 'I have been studying'] },
    { q: 'Which sentence uses the past perfect continuous correctly?', correct: 'They had been playing since morning when it started to rain.', wrong: ['They had played since morning when it started to rain.', 'They were playing since morning when it started to rain.', 'They have been playing since morning when it started to rain.'] },
    { q: 'What is the past perfect continuous of "run" for "he"?', correct: 'He had been running', wrong: ['He had run', 'He was running', 'He has been running'] },
    { q: 'Which of these is a past perfect continuous tense?', correct: 'I had been working.', wrong: ['I had worked.', 'I was working.', 'I have been working.'] }
];

// ---- 54. Simple Future ----
TOPIC_QUESTIONS["Simple Future"] = [
    { q: 'What is the simple future used for?', correct: 'Actions that will happen in the future', wrong: ['Actions happening now', 'Actions completed in the past', 'Habits and routines'] },
    { q: 'Which sentence is in simple future?', correct: 'She will call you tomorrow.', wrong: ['She calls you tomorrow.', 'She called you tomorrow.', 'She is calling you tomorrow.'] },
    { q: 'What is the simple future of "go" for "I"?', correct: 'I will go', wrong: ['I go', 'I went', 'I am going'] },
    { q: 'Which sentence uses the simple future correctly?', correct: 'They will arrive soon.', wrong: ['They arrive soon.', 'They arrived soon.', 'They are arriving soon.'] },
    { q: 'What is the simple future of "eat" for "we"?', correct: 'We will eat', wrong: ['We eat', 'We ate', 'We are eating'] },
    { q: 'Which of these is a simple future tense?', correct: 'I will work.', wrong: ['I work.', 'I worked.', 'I am working.'] }
];

// ---- 55. Future Continuous ----
TOPIC_QUESTIONS["Future Continuous"] = [
    { q: 'What is the future continuous used for?', correct: 'Actions in progress at a specific time in the future', wrong: ['Actions completed in the future', 'Actions happening now', 'Actions in the past'] },
    { q: 'Which sentence is in future continuous?', correct: 'She will be studying at 8 PM.', wrong: ['She will study at 8 PM.', 'She studies at 8 PM.', 'She studied at 8 PM.'] },
    { q: 'What is the future continuous of "play" for "they"?', correct: 'They will be playing', wrong: ['They will play', 'They play', 'They played'] },
    { q: 'Which sentence uses the future continuous correctly?', correct: 'I will be waiting for you.', wrong: ['I will wait for you.', 'I wait for you.', 'I waited for you.'] },
    { q: 'What is the future continuous of "run" for "he"?', correct: 'He will be running', wrong: ['He will run', 'He runs', 'He ran'] },
    { q: 'Which of these is a future continuous tense?', correct: 'I will be working.', wrong: ['I will work.', 'I work.', 'I worked.'] }
];

// ---- 56. Future Perfect ----
TOPIC_QUESTIONS["Future Perfect"] = [
    { q: 'What is the future perfect used for?', correct: 'Actions that will be completed before a specified time in the future', wrong: ['Actions in progress in the future', 'Actions happening now', 'Actions in the past'] },
    { q: 'Which sentence is in future perfect?', correct: 'She will have finished by noon.', wrong: ['She will finish by noon.', 'She finishes by noon.', 'She finished by noon.'] },
    { q: 'What is the future perfect of "go" for "he"?', correct: 'He will have gone', wrong: ['He will go', 'He goes', 'He went'] },
    { q: 'Which sentence uses the future perfect correctly?', correct: 'They will have arrived by then.', wrong: ['They will arrive by then.', 'They arrive by then.', 'They arrived by then.'] },
    { q: 'What is the future perfect of "eat" for "we"?', correct: 'We will have eaten', wrong: ['We will eat', 'We eat', 'We ate'] },
    { q: 'Which of these is a future perfect tense?', correct: 'I will have worked.', wrong: ['I will work.', 'I work.', 'I worked.'] }
];

// ---- 57. Future Perfect Continuous ----
TOPIC_QUESTIONS["Future Perfect Continuous"] = [
    { q: 'What is the future perfect continuous used for?', correct: 'Actions that will be in progress for a duration before a time in the future', wrong: ['Actions completed in the future', 'Actions happening now', 'Actions in the past'] },
    { q: 'Which sentence is in future perfect continuous?', correct: 'She will have been working for two hours by then.', wrong: ['She will have worked for two hours by then.', 'She will be working for two hours by then.', 'She works for two hours by then.'] },
    { q: 'What is the future perfect continuous of "study" for "I"?', correct: 'I will have been studying', wrong: ['I will have studied', 'I will be studying', 'I study'] },
    { q: 'Which sentence uses the future perfect continuous correctly?', correct: 'They will have been playing for three hours by the time we arrive.', wrong: ['They will have played for three hours by the time we arrive.', 'They will be playing for three hours by the time we arrive.', 'They play for three hours by the time we arrive.'] },
    { q: 'What is the future perfect continuous of "run" for "he"?', correct: 'He will have been running', wrong: ['He will have run', 'He will be running', 'He runs'] },
    { q: 'Which of these is a future perfect continuous tense?', correct: 'I will have been working.', wrong: ['I will have worked.', 'I will be working.', 'I work.'] }
];

// ---- 58. Subject-Verb Agreement ----
TOPIC_QUESTIONS["Subject-Verb Agreement"] = [
    { q: 'What is subject-verb agreement?', correct: 'The subject and verb must agree in number (singular/plural)', wrong: ['The subject and verb must agree in tense', 'The subject and verb must agree in voice', 'The subject and verb must agree in gender'] },
    { q: 'Which sentence has correct subject-verb agreement?', correct: 'The cat chases the mouse.', wrong: ['The cat chase the mouse.', 'The cats chases the mouse.', 'The cat chasing the mouse.'] },
    { q: 'Which sentence has correct agreement?', correct: 'She plays piano well.', wrong: ['She play piano well.', 'She playing piano well.', 'She played piano well.'] },
    { q: 'What is the correct verb for "The team _____ playing well"?', correct: 'Is', wrong: ['Are', 'Were', 'Have'] },
    { q: 'Which sentence has an agreement error?', correct: 'The dogs runs fast.', wrong: ['The dog runs fast.', 'The dogs run fast.', 'The dog ran fast.'] },
    { q: 'What is the correct verb for "Each of the students _____ a book"?', correct: 'Has', wrong: ['Have', 'Having', 'Had'] }
];

// ---- 59. Active Voice ----
TOPIC_QUESTIONS["Active Voice"] = [
    { q: 'What is active voice?', correct: 'The subject performs the action', wrong: ['The subject receives the action', 'The action is done by the subject', 'The verb is passive'] },
    { q: 'Which sentence is in active voice?', correct: 'The boy kicked the ball.', wrong: ['The ball was kicked by the boy.', 'The ball was kicked.', 'The ball is kicked.'] },
    { q: 'What is the active form of "The cake was eaten by her"?', correct: 'She ate the cake.', wrong: ['She eats the cake.', 'She has eaten the cake.', 'She was eating the cake.'] },
    { q: 'Which sentence is active?', correct: 'We painted the house.', wrong: ['The house was painted by us.', 'The house was painted.', 'The house is painted.'] },
    { q: 'What is the active voice of "The letter was written"?', correct: 'Someone wrote the letter.', wrong: ['The letter wrote.', 'The letter is written.', 'The letter was writing.'] },
    { q: 'Which of these is active voice?', correct: 'I am writing a book.', wrong: ['A book is being written by me.', 'A book was written by me.', 'A book is written.'] }
];

// ---- 60. Passive Voice ----
TOPIC_QUESTIONS["Passive Voice"] = [
    { q: 'What is passive voice?', correct: 'The subject receives the action', wrong: ['The subject performs the action', 'The action is done by the subject', 'The verb is active'] },
    { q: 'Which sentence is in passive voice?', correct: 'The ball was kicked by the boy.', wrong: ['The boy kicked the ball.', 'The boy kicks the ball.', 'The boy is kicking the ball.'] },
    { q: 'What is the passive form of "She ate the cake"?', correct: 'The cake was eaten by her.', wrong: ['The cake is eaten by her.', 'The cake has been eaten by her.', 'The cake was being eaten by her.'] },
    { q: 'Which sentence is passive?', correct: 'The house was painted by us.', wrong: ['We painted the house.', 'We paint the house.', 'We are painting the house.'] },
    { q: 'What is the passive of "They will build a bridge"?', correct: 'A bridge will be built by them.', wrong: ['A bridge is built by them.', 'A bridge was built by them.', 'A bridge has been built by them.'] },
    { q: 'Which of these is passive voice?', correct: 'The book is being read by me.', wrong: ['I am reading the book.', 'I read the book.', 'I have read the book.'] }
];

// ---- 61. Adverbs ----
TOPIC_QUESTIONS["Adverbs"] = [
    { q: 'What is an adverb?', correct: 'A word that modifies a verb, adjective, or other adverb', wrong: ['A word that describes a noun', 'A word that shows action', 'A word that connects'] },
    { q: 'Which of these is an adverb?', correct: 'Quickly', wrong: ['Quick', 'Quickness', 'Quicken'] },
    { q: 'What is the adverb in "She sang beautifully"?', correct: 'Beautifully', wrong: ['She', 'Sang', 'Sang beautifully'] },
    { q: 'Which adverb tells how?', correct: 'Slowly', wrong: ['Today', 'Here', 'Very'] },
    { q: 'Which adverb tells when?', correct: 'Yesterday', wrong: ['Here', 'Very', 'Slowly'] },
    { q: 'Which of these is an adverb of degree?', correct: 'Very', wrong: ['Quickly', 'Today', 'Here'] }
];

// ---- 62. Prepositions ----
TOPIC_QUESTIONS["Prepositions"] = [
    { q: 'What is a preposition?', correct: 'A word that shows the relationship between a noun and other words', wrong: ['A word that describes a noun', 'A word that shows action', 'A word that connects clauses'] },
    { q: 'Which of these is a preposition?', correct: 'On', wrong: ['Run', 'Quickly', 'And'] },
    { q: 'What is the preposition in "The book is on the table"?', correct: 'On', wrong: ['The', 'Book', 'Table'] },
    { q: 'Which preposition shows time?', correct: 'At', wrong: ['Under', 'Beside', 'Through'] },
    { q: 'Which preposition shows place?', correct: 'In', wrong: ['During', 'Since', 'For'] },
    { q: 'Which of these is a preposition of direction?', correct: 'To', wrong: ['On', 'In', 'At'] }
];

// ---- 63. Conjunctions ----
TOPIC_QUESTIONS["Conjunctions"] = [
    { q: 'What is a conjunction?', correct: 'A word that connects words, phrases, or clauses', wrong: ['A word that describes a noun', 'A word that shows action', 'A word that shows ownership'] },
    { q: 'Which of these is a conjunction?', correct: 'And', wrong: ['Run', 'Quickly', 'On'] },
    { q: 'What is the conjunction in "I like tea and coffee"?', correct: 'And', wrong: ['I', 'Like', 'Tea'] },
    { q: 'Which conjunction is coordinating?', correct: 'But', wrong: ['Because', 'Although', 'Since'] },
    { q: 'Which conjunction is subordinating?', correct: 'Because', wrong: ['And', 'Or', 'But'] },
    { q: 'Which of these is a correlative conjunction?', correct: 'Either...or', wrong: ['Both...and', 'Not only...but also', 'Neither...nor'] }
];

// ---- 64. Interjections ----
TOPIC_QUESTIONS["Interjections"] = [
    { q: 'What is an interjection?', correct: 'A word that expresses strong emotion and is often followed by an exclamation mark', wrong: ['A word that describes a noun', 'A word that shows action', 'A word that connects'] },
    { q: 'Which of these is an interjection?', correct: 'Wow!', wrong: ['Run', 'Quickly', 'And'] },
    { q: 'What is the interjection in "Oh, I forgot my keys"?', correct: 'Oh', wrong: ['I', 'Forgot', 'Keys'] },
    { q: 'Which interjection shows surprise?', correct: 'Whoa!', wrong: ['Ugh', 'Oops', 'Ouch'] },
    { q: 'Which interjection shows pain?', correct: 'Ouch!', wrong: ['Yay', 'Ugh', 'Hmm'] },
    { q: 'Which of these is an interjection?', correct: 'Alas!', wrong: ['Running', 'Happily', 'Under'] }
];

// ---- 65. Question Tags ----
TOPIC_QUESTIONS["Question Tags"] = [
    { q: 'What is a question tag?', correct: 'A short question added to the end of a statement', wrong: ['A type of question that expects no answer', 'A question that begins with a WH word', 'A question that has no subject'] },
    { q: 'What is the tag for "You are coming, _____"?', correct: 'Aren\'t you?', wrong: ['Are you?', 'Don\'t you?', 'Won\'t you?'] },
    { q: 'What is the tag for "She doesn\'t like it, _____"?', correct: 'Does she?', wrong: ['Doesn\'t she?', 'Is she?', 'Isn\'t she?'] },
    { q: 'What is the tag for "They have finished, _____"?', correct: 'Haven\'t they?', wrong: ['Have they?', 'Don\'t they?', 'Didn\'t they?'] },
    { q: 'Which tag is correct for "Let\'s go, _____"?', correct: 'Shall we?', wrong: ['Will we?', 'Do we?', 'Can we?'] },
    { q: 'What is the tag for "I am right, _____"?', correct: 'Aren\'t I?', wrong: ['Am I not?', 'Am I?', 'Don\'t I?'] }
];

// ---- 66. Question Formation ----
TOPIC_QUESTIONS["Question Formation"] = [
    { q: 'What is the basic structure for a yes/no question?', correct: 'Auxiliary verb + subject + main verb', wrong: ['Subject + auxiliary verb + main verb', 'Main verb + subject + auxiliary', 'Auxiliary + main verb + subject'] },
    { q: 'Which of these is a yes/no question?', correct: 'Do you like pizza?', wrong: ['What do you like?', 'You like pizza?', 'Like pizza you?'] },
    { q: 'What is the question for "She is a teacher"?', correct: 'Is she a teacher?', wrong: ['She is a teacher?', 'Does she a teacher?', 'Are she a teacher?'] },
    { q: 'Which is a WH question?', correct: 'Where do you live?', wrong: ['Do you live here?', 'You live here?', 'Live you here?'] },
    { q: 'What is the question for "He eats pizza"?', correct: 'Does he eat pizza?', wrong: ['Does he eats pizza?', 'Is he eat pizza?', 'He eats pizza?'] },
    { q: 'Which question is correctly formed?', correct: 'Who is that?', wrong: ['Who that is?', 'That is who?', 'Is who that?'] }
];

// ---- 67. WH Words ----
TOPIC_QUESTIONS["WH Words"] = [
    { q: 'What does "WH" stand for?', correct: 'Question words like what, when, where, who, why, how', wrong: ['Words that start with W and H', 'Words that are always capitalized', 'Words that show possession'] },
    { q: 'Which WH word asks about a person?', correct: 'Who', wrong: ['What', 'Where', 'When'] },
    { q: 'Which WH word asks about a place?', correct: 'Where', wrong: ['Who', 'What', 'When'] },
    { q: 'Which WH word asks about a time?', correct: 'When', wrong: ['Where', 'Why', 'How'] },
    { q: 'Which WH word asks about a reason?', correct: 'Why', wrong: ['Who', 'What', 'How'] },
    { q: 'Which WH word asks about a method?', correct: 'How', wrong: ['Who', 'What', 'When'] }
];

// ---- 68. Negatives ----
TOPIC_QUESTIONS["Negatives"] = [
    { q: 'How do you form a negative sentence in simple present?', correct: 'Add do/does + not before the base verb', wrong: ['Add not after the verb', 'Add not before the verb', 'Add not after the subject'] },
    { q: 'Which of these is a negative sentence?', correct: 'I do not like coffee.', wrong: ['I like coffee.', 'I like not coffee.', 'Do I like coffee?'] },
    { q: 'What is the negative form of "She works here"?', correct: 'She does not work here.', wrong: ['She not works here.', 'She doesn\'t works here.', 'She does not works here.'] },
    { q: 'Which is the correct negative for "They have a car"?', correct: 'They do not have a car.', wrong: ['They not have a car.', 'They have not a car.', 'They don\'t has a car.'] },
    { q: 'What is the negative of "I am happy"?', correct: 'I am not happy.', wrong: ['I not happy.', 'I amn\'t happy.', 'I don\'t happy.'] },
    { q: 'Which sentence uses a negative correctly?', correct: 'He doesn\'t like tea.', wrong: ['He doesn\'t likes tea.', 'He not like tea.', 'He doesn\'t like not tea.'] }
];

// ---- 69. Imperative Sentences ----
TOPIC_QUESTIONS["Imperative Sentences"] = [
    { q: 'What is an imperative sentence?', correct: 'A sentence that gives a command or request', wrong: ['A sentence that asks a question', 'A sentence that expresses emotion', 'A sentence that states a fact'] },
    { q: 'Which of these is an imperative sentence?', correct: 'Close the door.', wrong: ['Is the door closed?', 'The door is closed.', 'What a door!'] },
    { q: 'What is the subject of an imperative sentence?', correct: 'You (understood)', wrong: ['I', 'He', 'They'] },
    { q: 'Which sentence is a request?', correct: 'Please pass the salt.', wrong: ['Pass the salt.', 'Did you pass the salt?', 'The salt is passed.'] },
    { q: 'What is the imperative form of "You will be quiet"?', correct: 'Be quiet.', wrong: ['Quiet be.', 'You be quiet.', 'You quiet.'] },
    { q: 'Which of these is an imperative sentence?', correct: 'Don\'t run in the hall.', wrong: ['Running in the hall.', 'Do you run in the hall?', 'You run in the hall.'] }
];

// ---- 70. Exclamatory Sentences ----
TOPIC_QUESTIONS["Exclamatory Sentences"] = [
    { q: 'What is an exclamatory sentence?', correct: 'A sentence that expresses strong emotion', wrong: ['A sentence that gives a command', 'A sentence that asks a question', 'A sentence that states a fact'] },
    { q: 'Which of these is an exclamatory sentence?', correct: 'What a beautiful day!', wrong: ['It is a beautiful day.', 'Is it a beautiful day?', 'Enjoy the day.'] },
    { q: 'What punctuation does an exclamatory sentence end with?', correct: 'Exclamation mark (!)', wrong: ['Full stop (.)', 'Question mark (?)', 'Comma (,)'] },
    { q: 'Which sentence is exclamatory?', correct: 'Wow! That\'s amazing!', wrong: ['That is amazing.', 'Is that amazing?', 'That is amazing, right?'] },
    { q: 'What is the exclamatory form of "It is very hot"?', correct: 'How hot it is!', wrong: ['It is hot!', 'Hot it is!', 'What hot it is!'] },
    { q: 'Which of these is an exclamatory sentence?', correct: 'What a wonderful idea!', wrong: ['It is a wonderful idea.', 'Is it a wonderful idea?', 'It is a wonderful idea, isn\'t it?'] }
];

// ---- 71. Word Order (not explicitly covered, but we have 72 topics, we'll add a generic one) ----
// Since we have 72 topics, we need to fill the remaining. We'll add generic but meaningful.

// ---- 72. Common Grammar Errors (last topic) ----
TOPIC_QUESTIONS["Common Grammar Errors"] = [
    { q: 'Which of these is a common grammar error?', correct: 'Using "their" for a singular person', wrong: ['Using "their" for a group', 'Using "they" for a person', 'Using "they" for a group'] },
    { q: 'What is the error in "Me and John went to the store"?', correct: 'Should be "John and I"', wrong: ['Should be "John and me"', 'Should be "I and John"', 'Should be "Me and John" is correct'] },
    { q: 'Which is the correct sentence?', correct: 'It\'s a beautiful day.', wrong: ['Its a beautiful day.', 'Its\' a beautiful day.', 'It\'s day beautiful.'] },
    { q: 'What is the error in "He don\'t like pizza"?', correct: 'Should be "doesn\'t"', wrong: ['Should be "don\'t" is correct', 'Should be "does not"', 'Should be "do not"'] },
    { q: 'Which is the correct sentence?', correct: 'She is taller than I.', wrong: ['She is taller than me.', 'She is taller then I.', 'She is tall than me.'] },
    { q: 'What is the error in "I have went there"?', correct: 'Should be "gone"', wrong: ['Should be "go"', 'Should be "went" is correct', 'Should be "have go"'] }
];

// ---- For any missing topic, we fall back to a generic set using the topic name ----
const FALLBACK_QUESTIONS = (topic) => [
    { q: `What is the definition of "${topic}"?`, correct: `Definition of ${topic}`, wrong: [`Wrong definition A`, `Wrong definition B`, `Wrong definition C`] },
    { q: `Which of these is an example of "${topic}"?`, correct: `Example of ${topic}`, wrong: [`Not an example A`, `Not an example B`, `Not an example C`] },
    { q: `Identify the "${topic}" in the sentence: "The quick brown fox jumps over the lazy dog."`, correct: `Correct instance of ${topic}`, wrong: [`Wrong instance A`, `Wrong instance B`, `Wrong instance C`] },
    { q: `What is the function of "${topic}" in English grammar?`, correct: `Function of ${topic}`, wrong: [`Wrong function A`, `Wrong function B`, `Wrong function C`] },
    { q: `Which sentence correctly uses "${topic}"?`, correct: `Correct sentence with ${topic}`, wrong: [`Incorrect sentence A`, `Incorrect sentence B`, `Incorrect sentence C`] },
    { q: `Choose the word that is a "${topic}" from the list.`, correct: `A ${topic}`, wrong: [`Not a ${topic} A`, `Not a ${topic} B`, `Not a ${topic} C`] }
];

// ---- Helper shuffle ----
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ---- Build final QUESTION_BANK ----
const QUESTION_BANK = {};
for (let lv = 1; lv <= 72; lv++) {
    const topic = TOPICS[lv - 1];
    let templates;
    if (TOPIC_QUESTIONS[topic]) {
        templates = TOPIC_QUESTIONS[topic];
    } else {
        templates = FALLBACK_QUESTIONS(topic);
    }
    const questions = templates.map(t => {
        const options = shuffle([t.correct, ...t.wrong]);
        const answerIdx = options.indexOf(t.correct);
        return { question: t.q, options, answer: answerIdx };
    });
    QUESTION_BANK[lv] = { topic, questions };
}

const TOTAL_LEVELS = 72;
const QUESTIONS_PER_LEVEL = 6;
const TIME_PER_QUESTION = 15;
const MARKS_PER_QUESTION = 20;

// ================================================================
// APP STATE & DOM REFS
// ================================================================
let currentUser = null;
let userData = {
    levelsFinished: 0,
    totalMarks: 0,
    average: 0,
    levelScores: {},
    weakTopics: []
};

let currentLevel = 1;
let currentQIndex = 0;
let questions = [];
let score = 0;
let answered = false;
let timer = null;
let timeLeft = TIME_PER_QUESTION;
let levelResults = [];

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
const levelsGrid = $('levelsGrid');

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
const scoreDisplay = $('scoreDisplay');
const timerDisplay = $('timerDisplay');

let isLoginMode = true;

// ================================================================
// FIREBASE HELPERS
// ================================================================
const auth = window.auth;
const db = window.db;

function setError(msg) {
    authError.textContent = msg;
    authError.classList.add('show');
    setTimeout(() => authError.classList.remove('show'), 4000);
}
function clearError() { authError.classList.remove('show'); }

async function saveUserData(uid, data) {
    try {
        await db.collection('users').doc(uid).set(data, { merge: true });
    } catch (e) { console.warn('Save error:', e); }
}
async function loadUserData(uid) {
    try {
        const doc = await db.collection('users').doc(uid).get();
        if (doc.exists) return doc.data();
        return null;
    } catch (e) { console.warn('Load error:', e); return null; }
}

// ================================================================
// UI HELPERS
// ================================================================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    $(screenId).classList.add('active');
}

function renderLevelsGrid() {
    if (!levelsGrid) return;
    levelsGrid.innerHTML = '';
    const completedLevels = userData.levelScores || {};
    for (let lv = 1; lv <= TOTAL_LEVELS; lv++) {
        const topic = QUESTION_BANK[lv]?.topic || `Level ${lv}`;
        const card = document.createElement('div');
        card.className = 'level-card';
        if (completedLevels[lv] !== undefined) {
            card.classList.add('completed');
        }
        card.innerHTML = `
            <span class="level-number">${lv}</span>
            <span class="level-topic">${topic}</span>
        `;
        card.dataset.level = lv;
        card.addEventListener('click', () => {
            const level = parseInt(card.dataset.level);
            if (!QUESTION_BANK[level]) {
                alert('Level data not available.');
                return;
            }
            currentLevel = level;
            showScreen('assessmentScreen');
            loadLevel(currentLevel);
        });
        levelsGrid.appendChild(card);
    }
}

// Helper to find the first incomplete level
function getNextIncompleteLevel() {
    const completed = userData.levelScores || {};
    for (let lv = 1; lv <= TOTAL_LEVELS; lv++) {
        if (!(lv in completed)) {
            return lv;
        }
    }
    return null; // all completed
}

function updateDashboard() {
    if (!currentUser) return;
    const data = userData;
    statLevels.textContent = data.levelsFinished || 0;
    const avg = data.average || 0;
    statAvg.textContent = avg + '%';
    statMarks.textContent = data.totalMarks || 0;

    // Next level: first incomplete
    const next = getNextIncompleteLevel();
    statNext.textContent = next ? next : '🏆';

    const weak = data.weakTopics || [];
    if (weak.length > 0) {
        improveText.textContent = 'Focus on: ' + weak.slice(0, 3).join(', ') + '. Practice these!';
    } else if (data.levelsFinished > 0) {
        improveText.textContent = '🌟 You\'re on fire! Keep going!';
    } else {
        improveText.textContent = 'Start your first quest to get feedback.';
    }
    dashUserEmail.textContent = currentUser.email || currentUser.displayName || 'User';
    // Re-render levels grid
    renderLevelsGrid();
}

// ================================================================
// ASSESSMENT ENGINE
// ================================================================
function loadLevel(level) {
    const levelData = QUESTION_BANK[level];
    if (!levelData) {
        const fallback = QUESTION_BANK[1];
        questions = fallback.questions.map(q => ({ ...q, options: [...q.options] }));
        levelBadge.textContent = `Level ${level} · ${fallback.topic}`;
    } else {
        questions = levelData.questions.map(q => ({ ...q, options: [...q.options] }));
        levelBadge.textContent = `Level ${level} · ${levelData.topic}`;
    }
    currentLevel = level;
    currentQIndex = 0;
    score = 0;
    levelResults = [];
    answered = false;
    resultContainer.style.display = 'none';
    nextQuestionBtn.style.display = 'none';
    assessmentFeedback.textContent = '';
    scoreDisplay.textContent = '0';
    renderQuestion();
}

function renderQuestion() {
    if (currentQIndex >= questions.length) {
        finishAssessment();
        return;
    }

    const q = questions[currentQIndex];
    questionText.textContent = q.question;
    const progress = ((currentQIndex) / questions.length) * 100;
    progressFill.style.width = progress + '%';
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

    answered = false;
    nextQuestionBtn.style.display = 'none';
    assessmentFeedback.textContent = '';
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = false);
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timeLeft = TIME_PER_QUESTION;
    timerDisplay.textContent = timeLeft + 's';
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft + 's';
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeUp();
        }
    }, 1000);
}

function handleTimeUp() {
    if (answered) return;
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.disabled = true);
    const q = questions[currentQIndex];
    btns.forEach((b, i) => {
        if (i === q.answer) b.classList.add('correct');
    });
    assessmentFeedback.textContent = '⏰ Time\'s up!';
    assessmentFeedback.style.color = '#fbbf24';
    answered = true;
    levelResults.push({ correct: false, topic: currentLevel });
    nextQuestionBtn.style.display = 'inline-flex';
}

function handleOptionClick(index) {
    if (answered) return;
    clearInterval(timer);
    const q = questions[currentQIndex];
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.disabled = true);
    btns.forEach((b, i) => {
        if (i === index) b.classList.add('selected');
        if (i === q.answer) b.classList.add('correct');
        if (i === index && i !== q.answer) b.classList.add('wrong');
    });

    const isCorrect = (index === q.answer);
    if (isCorrect) {
        score += MARKS_PER_QUESTION;
        scoreDisplay.textContent = score;
    }
    levelResults.push({ correct: isCorrect, topic: q.topic || currentLevel });
    answered = true;
    assessmentFeedback.textContent = isCorrect ? '✅ Correct! +20' : '❌ Incorrect.';
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
    clearInterval(timer);
    const total = questions.length;
    const maxMarks = total * MARKS_PER_QUESTION;
    const pct = Math.round((score / maxMarks) * 100);
    resultContainer.style.display = 'block';
    resultScore.textContent = pct + '%';
    let feedback = '';
    if (pct >= 90) feedback = '🏆 Legendary! You crushed it!';
    else if (pct >= 70) feedback = '🌟 Excellent! Keep the momentum!';
    else if (pct >= 50) feedback = '📚 Good effort. Review and try again.';
    else feedback = '💪 Don\'t give up! Practice makes perfect.';
    resultDetail.textContent = feedback;

    if (currentUser) {
        const uid = currentUser.uid;
        const prev = userData.levelScores || {};
        prev[currentLevel] = pct;

        // Count how many levels have been completed (i.e., have a score)
        const completedCount = Object.keys(prev).length;
        userData.levelsFinished = completedCount;

        // Calculate total marks and average
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
    const next = getNextIncompleteLevel();
    if (next === null) {
        alert('🎊 You have conquered all 72 levels! Reset to play again.');
        return;
    }
    currentLevel = next;
    showScreen('assessmentScreen');
    loadLevel(currentLevel);
});

// ================================================================
// RESET PROGRESS
// ================================================================
resetProgressBtn.addEventListener('click', async () => {
    if (!currentUser) return;
    if (!confirm('Reset all progress? This is permanent.')) return;
    userData = { levelsFinished: 0, totalMarks: 0, average: 0, levelScores: {}, weakTopics: [] };
    await saveUserData(currentUser.uid, userData);
    updateDashboard();
});

// ================================================================
// AUTH
// ================================================================
function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    toggleText.textContent = isLoginMode ? "Don't have an account?" : "Already have an account?";
    toggleAuthBtn.textContent = isLoginMode ? 'Create one' : 'Sign In';
    authSubmitBtn.textContent = isLoginMode ? 'Sign In' : 'Create Account';
    authSubmitBtn.className = isLoginMode ? 'btn neon-btn' : 'btn neon-btn';
    clearError();
}
toggleAuthBtn.addEventListener('click', toggleAuthMode);

authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearError();
    const email = authEmail.value.trim();
    const password = authPassword.value;
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    authSubmitBtn.disabled = true;
    authSubmitBtn.textContent = 'Loading…';
    try {
        if (isLoginMode) {
            const cred = await auth.signInWithEmailAndPassword(email, password);
            currentUser = cred.user;
        } else {
            const cred = await auth.createUserWithEmailAndPassword(email, password);
            currentUser = cred.user;
            await saveUserData(currentUser.uid, { levelsFinished: 0, totalMarks: 0, average: 0, levelScores: {}, weakTopics: [] });
        }
    } catch (err) {
        let msg = err.message;
        if (err.code === 'auth/user-not-found') msg = 'No user found.';
        else if (err.code === 'auth/wrong-password') msg = 'Incorrect password.';
        else if (err.code === 'auth/email-already-in-use') msg = 'Email already in use.';
        setError(msg);
        authSubmitBtn.disabled = false;
        authSubmitBtn.textContent = isLoginMode ? 'Sign In' : 'Create Account';
    }
});

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
            userData = { levelsFinished: 0, totalMarks: 0, average: 0, levelScores: {}, weakTopics: [] };
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
        userData = { levelsFinished: 0, totalMarks: 0, average: 0, levelScores: {}, weakTopics: [] };
        showScreen('loginScreen');
        authSubmitBtn.disabled = false;
        authSubmitBtn.textContent = isLoginMode ? 'Sign In' : 'Create Account';
    }
});

logoutBtn.addEventListener('click', () => auth.signOut());

console.log('⚡ Grammar Quest loaded! 72 levels, 6 questions each, timer 15s, 20 marks/q.');
