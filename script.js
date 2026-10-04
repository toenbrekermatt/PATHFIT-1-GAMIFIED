const progressFill = document.querySelector('.progress-fill');
const slidesContainer = document.getElementById('slidesContainer');
const backButton = document.getElementById('backButton');
const continueButton = document.getElementById('continueButton');
const clipCurrent = document.getElementById('clipCurrent');
const clipTotal = document.getElementById('clipTotal');
const appWindow = document.querySelector('.browser-window');
const lessonShell = document.querySelector('.lesson-shell');
const appTopbar = document.querySelector('.browser-topbar');
const maximizeWindow = document.getElementById('maximizeWindow');
const closeWindow = document.getElementById('closeWindow');
const trafficClose = document.getElementById('trafficClose');
const trafficMinimize = document.getElementById('trafficMinimize');
const trafficMaximize = document.getElementById('trafficMaximize');
const taskbarApp = document.querySelector('.taskbar-app');
const desktopAppIcon = document.querySelector('.desktop-icon');
const longQuizIcon = document.getElementById('longQuizIcon');
const quizIcon = document.getElementById('quizIcon');
const quizSummary = document.getElementById('quizSummary');
const androidBack = document.getElementById('androidBack');
const androidHome = document.getElementById('androidHome');
const androidOverview = document.getElementById('androidOverview');
const startLessonsButton = document.getElementById('startLessonsButton');
const openQuizButton = document.getElementById('openQuizButton');
const openLongQuizButton = document.getElementById('openLongQuizButton');
const openCourseMapButton = document.getElementById('openCourseMapButton');
const courseFilesIcon = document.querySelector('.desktop-icon[aria-label="Course files"]');

const slidesData = [
  {
    unit: 'PATH FIT 1',
    title: 'PHYSICAL ACTIVITY TOWARDS HEALTH AND FITNESS',
    text: 'Movement Competency Training.',
    bullets: [
      'Physical Education as a subject has historically been neglected and faced setbacks due to misunderstandings among teachers and administrators.',
      'Teachers and administrators may not have had sufficient exposure to its principles.',
      'It is imperative to redefine and clarify the scope of this subject area.',
      'PATH-FIT 1 students will gain a deeper understanding of Physical Education and its curriculum coverage.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'GENERAL OBJECTIVES',
    text: 'At the end of the unit, the students are expected to:',
    bullets: [
      'Improve understanding of the principles and importance of Physical Education.',
      'Redefine and clarify the scope of Physical Education within the educational framework.',
      'Foster holistic development: physical fitness, mental resilience, emotional stability, and social skills.',
      'Participate actively to understand the significance of physical exercise for optimal health across all age groups.',
      'Equip themselves with life skills: teamwork, discipline, and problem-solving.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'PHYSICAL EDUCATION: HISTORICAL VIEW',
    text: 'Historically viewed as the education of the physical body.',
    bullets: [
      'Physical Education in Philippine schools has experienced many vicissitudes and changes over time.',
      'Historically viewed as the education of the physical body.',
      'A muscular physique was the hallmark of a physically educated individual.',
      'Activities were termed “drill,” “physical training,” and “calisthenics.”',
      'Focus: muscle strengthening.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'MODERN PERSPECTIVE: EDUCATION THROUGH MOVEMENT',
    text: 'Modern PE emphasizes education through physical activities.',
    bullets: [
      '“Education through movement” shifts from mere physical fitness to holistic development.',
      'It provides sensory data and broadens the perspective horizon.',
      'It stimulates the function and structure of all bodily organs.',
      'It enables individuals to learn about themselves in relation to their environment.',
      'Modern PE develops social skills, teamwork, leadership, and emotional well-being.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'MODERN PERSPECTIVE: EDUCATION THROUGH MOVEMENT (CONT.)',
    text: 'Utilizes a culturally rich array of activities and movement experiences.',
    bullets: [
      'Utilizes a culturally rich array of activities: games, dance, gymnastics, athletic sports, and outdoor pursuits.',
      'These are mediums for achieving desirable educational outcomes.',
      'Concept: “learn to move, move to learn.”',
      'Modern PE develops competencies beyond fitness: social skills, teamwork, leadership, emotional well-being.',
      'Prepares students for a physically active lifestyle and life skills for personal and social development.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'DEFINITION OF PHYSICAL EDUCATION',
    text: 'A vital component of the educational program.',
    bullets: [
      'Aims at the optimal development of individuals: physically, socially, emotionally, and mentally.',
      'Focuses on teaching and learning of skills and attitudes through play activities.',
      'Aptly described as education through physical exertion.',
      'Promotes physical fitness, motor skill development, teamwork, and overall well-being.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'LEGAL BASES OF PE IN THE PHILIPPINES',
    text: 'Physical exercise became part of public school subjects and later gained formal curricular status.',
    bullets: [
      '1901 — Physical exercise became part of public school subjects, with regular athletic programs.',
      '1920 — PE subject became mandatory in all public schools.',
      '1937 — PE became a formal subject in secondary school curricula.',
      '1969 — School of Physical Education and Sports Development Act emphasized health education, nutrition, fitness, athletics, and intramurals.',
      '1982 — MAPE was introduced.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'INTERNATIONAL AND CONSTITUTIONAL BASES',
    text: 'Physical education and sport are essential for the full development of the human personality.',
    bullets: [
      'Article 1, International Charter of Physical Education and Sports, UNESCO, Paris (1975).',
      'Recommendation 1, Inter-disciplinary Regional Meeting of Experts in PE and Sports, UNESCO, Brisbane (1982).',
      'Article XIV, Sections 19 (1) and (19)(2), 1987 Philippine Constitution.',
      'The State shall promote physical education and encourage sports programs, league competitions, and amateur sports.',
      'All educational institutions shall undertake regular sports activities in cooperation with athletic clubs and other sectors.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'FUNCTIONS OF PHYSICAL EDUCATION',
    text: 'Biological, integrative, and social functions.',
    bullets: [
      'Biological Function — enhances growth and development; promotes healthy body movement patterns; supports physical health; develops motor skills, coordination, and fitness.',
      'Integrative Function — integrates personality traits; fosters self-discipline, resilience, teamwork, critical thinking, and holistic personal development.',
      'Social Function — transmits essential values and standards; promotes cooperation, respect, inclusivity, leadership, and community belonging.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'PE: A CRITICAL ASPECT OF EDUCATION',
    text: 'Education that utilizes movement as a core medium of learning.',
    bullets: [
      'Defined as education that utilizes movement.',
      'Core purpose: enhance and complement individuals through carefully selected and professionally guided physical activities.',
      'Promotes physical fitness, motor skill development, teamwork, and overall well-being.',
      'Fosters lifelong habits of health and fitness and nurtures social skills, discipline, and resilience.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'FITNESS: A MAJOR GOAL OF PHYSICAL EDUCATION',
    text: 'Fitness encompasses physical, social, emotional, and mental well-being.',
    bullets: [
      'Fitness = the ability to lead a healthy, fulfilling, and purposeful life.',
      'The “good life” is the ultimate goal of education.',
      'It entails meeting basic needs: physical well-being, love, security, and self-respect.',
      'It involves harmonious relationships and commitment to serving humanity with integrity and ethical standards.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'OBJECTIVES OF PHYSICAL EDUCATION (I)',
    text: 'Physical, social, emotional, and mental development.',
    bullets: [
      'A. Physical Development: maintenance of good health and enhancement of physical fitness.',
      'Builds and sustains physical skills while improving growth and development.',
      'Improves cardiovascular health, muscular strength, flexibility, and endurance.',
      'B. Social Development: develops social skills for effective interaction and cooperation.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'OBJECTIVES OF PHYSICAL EDUCATION (II)',
    text: 'Emotional and mental growth through movement.',
    bullets: [
      'C. Emotional Development: self-expression, self-confidence, self-control, and resilience.',
      'Overcoming challenges builds courage, determination, and perseverance.',
      'D. Mental Development: enhances cognitive processes and decision-making.',
      'Learning game rules and strategies stimulates critical thinking and practical application.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'OBJECTIVES OF PHYSICAL EDUCATION (III)',
    text: 'Knowledge, fitness, social growth, motor skills, aesthetics, nationalism, and environmental awareness.',
    bullets: [
      'Knowledge — critical thinking on rules, regulations, and strategies.',
      'Physical Fitness — handle physical tasks without excessive fatigue.',
      'Social — understand oneself better and build good relationships.',
      'Motor Skills — basic skills needed in sports and games.',
      'Aesthetic, Nationalism, and Conservation complete a fuller educational purpose.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'NEW DIRECTIONS FOR PHYSICAL EDUCATION',
    text: 'CHED Memorandum Orders No. 39 and No. 40 mark development in the tertiary PE curriculum.',
    bullets: [
      'CMO 39 — policies, standards, and guidelines for the Bachelor of Physical Education.',
      'CMO 40 — guidelines for teaching PE in the general education curriculum.',
      'Emphasizes physical literacy, wellness, and lifelong fitness.',
      'Goal: holistic and dynamic PE framework; diverse careers; healthier society.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'PHYSICAL EDUCATION CURRICULUM MAP',
    text: 'PATHFit sequence and curricular structure.',
    bullets: [
      'PE 1 — PATHFit 1: Movement Competency-Based Training (MCT), 2 units.',
      'PE 2 — PATHFit 2: Exercise-Based Fitness Activities, 2 units.',
      'PE 3 — PATHFit 3: Dance, Sports, Martial Arts, Group Exercise, Outdoor and Adventure Activities, 2 units.',
      'PE 4 — PATHFit 4: Choice of Dance, Sports, Martial Arts, Group Exercise, Outdoor and Adventure Activities, 2 units.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'CONTEXT OF PHYSICAL EDUCATION',
    text: 'Physical inactivity is a major public health problem.',
    bullets: [
      '2010: WHO report — physical inactivity = 4th leading risk factor for global mortality.',
      'Sedentary lifestyles are linked to serious health consequences.',
      'Physical inactivity contributes to cardiovascular disease, diabetes, and certain cancers.',
      'Urbanization, technology, and transportation changes reduce daily movement.'
    ]
  },
  {
    unit: 'WHO',
    title: 'EXERCISE RECOMMENDATIONS',
    text: 'Healthy movement standards by age group.',
    bullets: [
      'Children (5–17 years): at least 60 minutes of moderate-to-vigorous activity daily.',
      'Adults (18–64 years): at least 150 minutes moderate-intensity or 75 minutes vigorous-intensity per week.',
      'Muscle-strengthening exercises should be done 2 or more days a week.',
      'Older Adults (65+): focus on balance, endurance, strength, and flexibility.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'ROLE OF PE IN IMPLEMENTING RECOMMENDATIONS',
    text: 'Education and awareness support lifelong active living.',
    bullets: [
      'Education and Awareness — teach the importance, benefits, and risks of inactivity.',
      'Skill Development — build fundamental movement skills and sport-specific competence.',
      'Promotion of Active Lifestyles — use structured activities, games, and sports to meet WHO recommendations.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'PURPOSES OF PHYSICAL EDUCATION',
    text: 'PE supports health, work habits, leadership, and culture.',
    bullets: [
      'Physical Fitness and Health — achieve optimal fitness and contribute to society’s goals.',
      'Economic Contribution — develop punctuality, cooperation, reliability, precision, and open-mindedness.',
      'Leadership and Morality — cultivate strong values and group participation.',
      'Creativity and Innovation — inspired by faith, country, and care for fellow humans.',
      'Cultural Appreciation and Unity — love and pride for culture and international brotherhood.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'UNDERSTANDING HUMAN MOVEMENT',
    text: 'Movement education and movement competency.',
    bullets: [
      'Movement education = learning how to move efficiently and effectively.',
      'Involves understanding basic movement patterns and overall physical ability.',
      'Competency enhances coordination and adaptability in movement tasks.',
      'Bones, muscles, and joints work together to create motion.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'GENERAL OBJECTIVES',
    text: 'After studying this unit, students will be able to explore movement education and movement competency.',
    bullets: [
      'Explore how movement education evolved from the early 20th century.',
      'Investigate key frameworks: Rudolf Laban’s Movement Analysis and the Skill Theme Approach.',
      'Foster proficiency in fundamental movement skills (running, jumping, throwing) and motor learning.',
      'Emphasize movement education as a tool for holistic development.',
      'Illustrate how movement competency contributes to lifelong physical activity.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'INTRODUCTION TO MOVEMENT EDUCATION',
    text: 'Introduced in the early 20th century by Rudolf Laban.',
    bullets: [
      'Originally: qualitative aspects of human movement.',
      'Evolved into multidisciplinary approaches: kinesiology, biomechanics, motor learning, psychology, sociology, and education.',
      'Primary goal: develop fundamental motor skills, improve coordination, enhance balance, and foster body awareness.',
      'Enhances physical abilities and supports cognitive and emotional aspects.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'MOVEMENT COMPETENCY',
    text: 'Foundational to proficiency in movement and physical literacy.',
    bullets: [
      'Essential for mastering fundamental movement skills.',
      'Applying movement concepts and strategies develops control, precision, and efficiency.',
      'Foundational elements lead to physical literacy and lifelong engagement.',
      'Requires understanding mechanics, timing, and responsiveness in human movement.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'THE SCIENCE OF HUMAN MOVEMENT',
    text: 'Smooth, effective movement depends on the relationship among specialized body systems.',
    bullets: [
      'Skeletal system — sturdy framework, anchoring muscles.',
      'Muscular system — generates force for movement and activity.',
      'Systems enable mobility, balance, coordination, and accuracy in daily tasks.',
      'A holistic approach is essential for sustaining optimal movement throughout life.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'SKELETAL SYSTEM',
    text: 'The body’s structural framework.',
    bullets: [
      'Could you imagine a body without bones? No shape, unable to stand tall, vital organs exposed and vulnerable.',
      'Bone is hard, dense connective tissue that forms most of the adult skeleton.',
      'The skeletal system is composed of bones and cartilage.',
      'It supports posture, protects organs, and enables movement.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'FUNCTIONS OF THE SKELETAL SYSTEM',
    text: 'Protection, support, movement, and blood production.',
    bullets: [
      'Protects the skull, vertebral column, and rib cage.',
      'Supports the body and holds vital organs in place.',
      'Provides attachment for muscles and enables movement at joints.',
      'Produces blood cells in bone marrow of ribs, vertebrae, humerus, and femur.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'CLASSIFICATION OF BONES (1 OF 3)',
    text: 'Adult skeleton has 206 bones divided by shape.',
    bullets: [
      'Long Bones — cylindrical; longer than wide; act as levers.',
      'Short Bones — cube-like; equal in length, width, and thickness.',
      'These provide support, stability, and fine movement.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'CLASSIFICATION OF BONES (2 OF 3)',
    text: 'Flat and irregular bones provide protection and attachment.',
    bullets: [
      'Flat Bones — typically thin and often curved; protect organs and provide muscle attachment points.',
      'Irregular Bones — no easily characterized shape; complex shapes such as vertebrae and facial bones.',
      'They support the body and protect tissues from compressive force.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'CLASSIFICATION OF BONES (3 OF 3)',
    text: 'Sesamoid bones protect tendons and improve joint performance.',
    bullets: [
      'Sesamoid Bones — small, round, and embedded in tendons.',
      'They protect tendons from pressure and stress.',
      'Patellae are the only sesamoid bones found in every person.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'TABLE 1: BONE CLASSIFICATION',
    text: 'Bone shape and function are closely linked.',
    bullets: [
      'Long bones provide leverage.',
      'Short bones provide stability and support.',
      'Flat bones protect organs and create attachment surfaces for muscles.',
      'Irregular bones protect internal organs and support structure.',
      'Sesamoid bones protect tendons from compressive forces.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'MAIN PARTS OF THE SKELETON: APPENDICULAR SKELETON',
    text: 'Arms, shoulder girdle, hips, and legs.',
    bullets: [
      'Shoulder girdle — two clavicles and two scapulas, allowing flexibility but limiting force.',
      'Arms: humerus, radius, ulna, carpals, metacarpals, and phalanges.',
      'Hip girdle supports lower abdomen and transfers weight to the legs.',
      'Legs include femur, tibia, fibula, and tarsals.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'MAIN PARTS OF THE SKELETON: AXIAL SKELETON',
    text: 'Skull, sternum, and rib cage protect the body’s vital organs.',
    bullets: [
      'Skull contains 28 bones, including facial bones and ear bones.',
      'Sternum is a large flat bone forming the front of the rib cage.',
      'Ribs protect the lungs and heart.',
      'Rib cage includes 12 pairs: 7 true ribs, 3 false ribs, and 2 floating ribs.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'HOW DO WE MOVE? (JOINTS)',
    text: 'Joints connect bones and allow motion.',
    bullets: [
      'Joint (articulation) is where adjacent bones or cartilage come together.',
      'Structural classification depends on how bones are anchored.',
      'Functional classification depends on degree of movement: immobile, slightly mobile, or freely moveable.',
      'Freely moveable joints are essential in movement performance.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'THREE TYPES OF JOINTS',
    text: 'Immovable, slightly movable, and freely movable joints serve different needs.',
    bullets: [
      'Immovable joints protect organs and provide stability.',
      'Slightly movable joints allow a few degrees of motion while maintaining support.',
      'Freely movable joints are found in upper and lower extremities and support most athletic movements.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'JOINTS AND SPORTS',
    text: 'Healthy joints are critical for sport performance.',
    bullets: [
      'Skilled sporting movements require joints to work smoothly together.',
      'Joints must have a full range of movement and strong supporting muscles and ligaments.',
      'Warm-up before activity and cool-down after activity reduce injury risk.',
      'Common injuries include sprained ankles, torn ligaments, and dislocated shoulders.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'PLANES OF THE BODY',
    text: 'Movement is described through body planes.',
    bullets: [
      'Mid-sagittal plane divides the body into right and left parts.',
      'Coronal (frontal) plane divides the body into anterior and posterior portions.',
      'Transverse (horizontal) plane divides the body into upper and lower sections.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'KINDS OF JOINT MOVEMENTS (1 OF 2)',
    text: 'Movement terms describe how limbs and body parts move.',
    bullets: [
      'Flexion decreases the angle at a joint; extension increases the angle.',
      'Lateral flexion bends the body sideways.',
      'Dorsiflexion and plantar flexion move the foot and ankle.',
      'Abduction moves away from the midline; adduction moves toward it.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'KINDS OF JOINT MOVEMENTS (2 OF 2)',
    text: 'Rotation, pronation, supination, and more.',
    bullets: [
      'Rotation occurs around a longitudinal axis.',
      'Pronation and supination move the hand and forearm downward and upward.',
      'Inversion and eversion rotate the foot inward and outward.',
      'Circumduction, elevation, depression, protraction, and retraction describe circular and shoulder girdle motions.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'SKELETAL SYSTEM AND SPORTS',
    text: 'The skeleton supports athletic performance and structural stability.',
    bullets: [
      'Bones protect organs and provide leverage for movement.',
      'The skeleton gives structure, rigidity, and strength to the body.',
      'Joints allow movement and flexibility between bones.',
      'Ligaments, cartilage, and tendons work with bones to improve sport performance.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'MUSCULAR SYSTEM',
    text: 'Movement depends on muscle contraction and relaxation.',
    bullets: [
      'All movement is caused by muscular shortening and lengthening.',
      'Muscles enable motion, maintain posture, protect organs, circulate blood, and generate heat.',
      'The body has more than 600 skeletal muscles.',
      'Muscle contraction is essential in every movement task.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'TYPES OF MUSCLE TISSUE',
    text: 'Skeletal, smooth, and cardiac muscles each serve a distinct purpose.',
    bullets: [
      'Skeletal muscles are voluntary and under conscious control.',
      'Smooth muscles are involuntary and found in internal organs.',
      'Cardiac muscle is found only in the heart and works continuously without tiring.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'MAIN PARTS OF OUR MUSCLES (1 OF 2)',
    text: 'Major muscle groups and their movements.',
    bullets: [
      'Deltoid moves the arm in all directions at the shoulder.',
      'Triceps extends the forearm and arm at the elbow and shoulder.',
      'Hamstrings extend the hip joint and flex the knee joint.',
      'Trapezius controls the shoulder girdle; latissimus dorsi adducts and extends the arm.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'MAIN PARTS OF OUR MUSCLES (2 OF 2)',
    text: 'Lower body and upper body power sources.',
    bullets: [
      'Gluteals abduct and extend the hip joint.',
      'Biceps flex the forearm at the elbow.',
      'Abdominals rotate and raise the trunk and help breathing.',
      'Pectorals adduct the arm and shoulder; quadriceps flex the hip and extend the knee.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'HOW DO OUR MUSCLES WORK?',
    text: 'Three main types of muscular contraction.',
    bullets: [
      'Isometric — tension with no change in muscle length.',
      'Concentric — muscle shortens as tension develops.',
      'Eccentric — muscle develops tension while lengthening.',
      'Most real contractions involve neither constant tension nor constant speed.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'WHAT HAPPENS TO OUR MUSCLES AS WE EXERCISE?',
    text: 'Exercise changes blood flow, oxygen use, and fatigue responses.',
    bullets: [
      'Blood flow to working muscles increases.',
      'Muscles use more oxygen and contract more often and more quickly.',
      'Waste products such as carbon dioxide and lactic acid build up.',
      'Overuse leads to soreness, fatigue, cramping, and muscle strain.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'ROLES OF MUSCLES',
    text: 'Muscles work in coordinated roles depending on movement.',
    bullets: [
      'Agonist (Mover) — produces the intended movement.',
      'Antagonist — relaxes or opposes the agonist to allow movement.',
      'Stabilizer (Fixator) — keeps a body part firm while another segment moves.',
      'Neutralizer — cancels unwanted movement caused by another muscle.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'AGONIST AND ANTAGONIST SKELETAL MUSCLE PAIRS',
    text: 'Opposing muscles work together for efficient movement.',
    bullets: [
      'Biceps brachii vs. triceps brachii — elbow flexion and extension.',
      'Hamstrings vs. quadriceps femoris — leg flexion and extension.',
      'Flexors vs. extensors of the digit and hand — controlled wrist and finger motion.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'STABILIZER AND NEUTRALIZER',
    text: 'Muscles also organize and contain movement.',
    bullets: [
      'A stabilizer keeps the body part fixed while movement occurs elsewhere.',
      'A neutralizer reduces unwanted motions from another muscle.',
      'For example, pectoralis major and latissimus dorsi can neutralize each other to produce pure adduction.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'PHYSICAL FITNESS',
    text: 'Unit III: physical fitness and its concepts.',
    bullets: [
      'Physical fitness is one aspect of overall fitness and includes mental, emotional, and social well-being.',
      'It depends on quality medical care, nutrition, rest, and physical activity.',
      'No single element alone can meet the demands of comprehensive fitness.',
      'Physical fitness is dynamic and diminishes when exercise stops.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'GENERAL OBJECTIVES',
    text: 'Students are expected to understand physical fitness and its practical application.',
    bullets: [
      'Differentiate health-related and performance-related components.',
      'Explain endurance, strength, flexibility, and agility.',
      'Discuss benefits such as improved posture, reduced injury risk, and mental resilience.',
      'Apply principles such as specificity, progressive overload, and recovery.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'THE MEANING OF PHYSICAL FITNESS',
    text: 'The ability to perform tasks efficiently without undue fatigue.',
    bullets: [
      'Physical Fitness = ability to perform one’s daily tasks efficiently without undue fatigue.',
      'Physically fit people still have reserve energy for leisure and emergencies.',
      'A state of overall well-being achieved through regular activity, proper nutrition, and rest.',
      'Promotes longevity, quality of life, and proactive health habits.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'THREE ASPECTS OF PHYSICAL FITNESS',
    text: 'Daily work, leisure, and emergencies.',
    bullets: [
      'Perform daily tasks efficiently without excessive fatigue.',
      'Enjoy leisure time in recreational activities with immediate satisfaction.',
      'Meet emergency demands such as errands, household problems, and social obligations.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'CONCEPTS OF PHYSICAL FITNESS',
    text: 'The main qualities of fitness performance.',
    bullets: [
      'Organic Vigor — soundness of heart and lungs.',
      'Endurance — ability to sustain long-continued contractions.',
      'Strength — ability to sustain force without yielding or breaking.',
      'Power, Flexibility, Agility, Balance, and Speed round out the fitness profile.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'COMPONENTS OF PHYSICAL FITNESS',
    text: 'Two categories: health-related and performance-related fitness.',
    bullets: [
      'Health-Related Components — flexibility, cardiovascular endurance, muscular strength, muscular endurance, and body composition.',
      'Performance-Related Components — agility, balance, coordination, power, and speed.',
      'These components support the quality of movement and daily performance.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'I. HEALTH-RELATED FITNESS: A. MUSCULAR STRENGTH',
    text: 'Maximum effort in brief duration.',
    bullets: [
      'Ability of the muscle to exert maximum effort in brief duration.',
      'Developed through isotonic, isometric, and isokinetic contractions.',
      'Example: push-ups, sit-ups, pull-ups, and resistance training.',
      'Isometric contractions are sustained against immovable resistance.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'BENEFITS OF STRENGTH TRAINING + B. MUSCULAR ENDURANCE',
    text: 'Strength and endurance support repeated effort and long-term performance.',
    bullets: [
      'Strength training can increase muscle strength by 10–25% within 6–8 weeks.',
      'It can also increase muscle size and hypertrophy.',
      'Muscular Endurance is the ability to endure sub-maximal effort for a prolonged period.',
      'Developed through repeated effort and longer-duration exercise.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'C. CARDIOVASCULAR ENDURANCE',
    text: 'The heart, blood vessels, and lungs adapt to sustained effort.',
    bullets: [
      'Ability of the heart, blood vessels, and lungs to adapt to physical exertion for prolonged duration.',
      'Heart rate increases to target heart rate and is sustained for 20–60 minutes.',
      'Important variables: intensity, duration, frequency, and mode of exercise.',
      'High endurance improves overall energy and helps prevent coronary heart disease.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'PHYSIOLOGICAL BENEFITS OF CARDIOVASCULAR TRAINING',
    text: 'Training improves recovery, oxygen delivery, and heart efficiency.',
    bullets: [
      'Decreased resting heart rate and recovery time after exercise.',
      'Increased blood volume and red blood cells to transport oxygen.',
      'Stronger heart muscle improves stroke volume and rest periods between beats.',
      'Increased aerobic capacity and reduced risk of coronary heart disease.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'ACTIVITIES THAT DEVELOP CARDIOVASCULAR ENDURANCE',
    text: 'Sustained aerobic activities are key.',
    bullets: [
      'Prolonged brisk walking, jogging, and cycling.',
      'Skipping rope, basketball, swimming, rowing, aerobic dancing, and hiking.',
      'Continuous and rhythmic movement is most effective for cardiovascular training.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'D. FLEXIBILITY',
    text: 'The ability of muscles and joints to move through a full range of motion.',
    bullets: [
      'Flexibility reduces injury risk and enhances performance.',
      'Stretching lengthens soft tissues and improves movement quality.',
      'It is influenced by joint structure, surrounding tissues, and tissue extensibility.',
      'Basic movements include flexion, extension, abduction, and adduction.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'FITNESS BENEFITS OF FLEXIBILITY EXERCISES',
    text: 'Greater motion, lower stiffness, and reduced injury risk.',
    bullets: [
      'Increased range of motion and better muscle elasticity.',
      'Reduced stiffness, improved relaxation, and improved blood circulation.',
      'Lower incidence of injury during sport events and exercise.',
      'Aids overall movement quality and reduced cardiovascular strain.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'E. BODY COMPOSITION',
    text: 'Lean body mass in relation to fat body mass.',
    bullets: [
      'Measures the proportion of lean body mass to fat body mass.',
      'Body composition reflects relative fatness or leanness.',
      'Fitness is important for everyone, whether slim or overweight.',
      'Genetic predisposition can influence body composition and weight.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'SOMATOTYPES',
    text: 'Body shape classification developed by Sheldon.',
    bullets: [
      'Ectomorphic — lean and small build; slender limbs; low muscle mass.',
      'Mesomorphic — relative predominance of muscles and heavier bones.',
      'Endomorphic — relative predominance of soft roundness and higher fat percentage.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'SOMATOTYPES AND PERFORMANCE',
    text: 'Body type affects training outcomes and sport suitability.',
    bullets: [
      'Somatotype helps explain weight gain or reduction expectations.',
      'It is highly correlated with performance in some sports.',
      'Example: shot put athletes differ physically from marathon athletes.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'II. PERFORMANCE-RELATED FITNESS',
    text: 'Movement skill and physical coordination.',
    bullets: [
      'Refers to the quality of one’s movement skill.',
      'General components include balance, coordination, power, speed, and agility.',
      'Balance can be static or dynamic depending on whether the body is still or in motion.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'PRINCIPLES OF TRAINING',
    text: 'Regular, progressive, and individualized training leads to effective results.',
    bullets: [
      'Principle of Recovery — muscles require time to repair and grow stronger.',
      'Principle of Reversibility — when exercise stops, gains diminish.',
      'Principle of Individual Variation — people respond differently based on age, health, and fitness level.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'BENEFITS OF PHYSICAL FITNESS (1 OF 2)',
    text: 'Physical fitness improves function, posture, and aging outcomes.',
    bullets: [
      'Vitality — fit muscles use less energy and operate with more efficiency.',
      'Posture — helps maintain general alignment and reduce strain.',
      'Relieves low back pain and retards the aging process.',
      'Improves ability to meet emergencies with more effective physical response.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'BENEFITS OF PHYSICAL FITNESS (2 OF 2)',
    text: 'Fitness strengthens neuromuscular skill and personality.',
    bullets: [
      'Neuromuscular Skill — smooth and efficient coordination of the muscular system.',
      'Relaxation — physical outlet for emotional and muscular tension.',
      'Improvement of Personality and Social Skills — games and sports develop social competence.',
      'Mental Fitness and General Growth — improved mental processes and stronger resistance to illness.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'THE PARAMETERS OF PHYSICAL FITNESS',
    text: 'Four measurable parameters define the hard core of fitness.',
    bullets: [
      'Muscular Endurance',
      'Muscular Strength',
      'Cardio-respiratory Endurance',
      'Joint Flexibility'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'QUOTE',
    text: '“Physical Fitness is not only one of the most important keys to a healthy body; it is the basis of dynamic, creative, and intellectual activity.”',
    bullets: [
      '— John Fitzgerald Kennedy',
      'Healthy bodies support stronger thinking and skill performance.',
      'The body must be healthy for intelligence and creativity to function at peak capacity.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'WAYS TO PREVENT INJURY DURING PHYSICAL EXERCISES (1 OF 2)',
    text: 'Training safely reduces injury and supports long-term activity.',
    bullets: [
      'Warm-up properly to increase blood flow and improve flexibility.',
      'Progress gradually to avoid sudden jumps in intensity, duration, or frequency.',
      'Use proper technique and learn correct form under qualified instruction.',
      'Wear appropriate gear and stay hydrated and nourished.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'WAYS TO PREVENT INJURY DURING PHYSICAL EXERCISES (2 OF 2)',
    text: 'Listen to your body and recover effectively.',
    bullets: [
      'Listen to your body and stop if pain, fatigue, or discomfort continues.',
      'Include rest days and avoid overtraining.',
      'Cross-train to reduce overuse issues and balance muscle development.',
      'Cool down properly and seek professional guidance when needed.'
    ]
  },
  {
    unit: 'CLOSING',
    title: 'FINAL TAKEAWAY',
    text: 'Healthy bodies support strong minds and active futures.',
    bullets: [
      'Physical Education supports health, growth, discipline, and social relationships.',
      'Movement, fitness, and training are foundations for a productive and meaningful life.',
      'Healthy habits improve confidence, reduce risk, and build lifelong wellness.',
      'A healthy body supports intelligent, resilient, and creative living.'
    ]
  }
];

function paginateSlides(sourceSlides) {
  const maxBulletCharacters = 420;
  const paginatedSlides = [];

  sourceSlides.forEach((slideData) => {
    let bulletPage = [];
    let bulletCharacters = 0;
    let pageNumber = 0;

    slideData.bullets.forEach((bullet) => {
      const nextLength = bulletCharacters + bullet.length;

      if (bulletPage.length > 0 && nextLength > maxBulletCharacters) {
        paginatedSlides.push({
          ...slideData,
          title: pageNumber === 0 ? slideData.title : `${slideData.title} (CONT.)`,
          bullets: bulletPage
        });
        bulletPage = [];
        bulletCharacters = 0;
        pageNumber += 1;
      }

      bulletPage.push(bullet);
      bulletCharacters += bullet.length;
    });

    if (bulletPage.length > 0) {
      paginatedSlides.push({
        ...slideData,
        title: pageNumber === 0 ? slideData.title : `${slideData.title} (CONT.)`,
        bullets: bulletPage
      });
    }
  });

  return paginatedSlides;
}

const identificationQuestions = {
  'UNIT I': [
    ['The modern approach to Physical Education that shifts the focus from mere physical fitness to holistic development through physical activities.', 'EDUCATION THROUGH MOVEMENT'],
    ['The philosopher who wrote, "the greatest of follies is to neglect one’s health for any advantage in life."', 'SCHOPENHAUER'],
    ['The year Physical Education became mandatory in all public schools.', '1920'],
    ['The year MAPE was introduced in the Philippine curriculum.', '1982'],
    ['The function of Physical Education that enhances growth and development by promoting healthy body movement patterns.', 'BIOLOGICAL FUNCTION'],
    ['The function of Physical Education that integrates personality traits such as self-discipline, resilience, and teamwork.', 'INTEGRATIVE FUNCTION'],
    ['The function of Physical Education that transmits values and standards, promoting cooperation and inclusivity.', 'SOCIAL FUNCTION'],
    ['The CHED Memorandum Order that sets guidelines for teaching Physical Education in the general education curriculum.', 'CMO NO. 40'],
    ['The leading risk factor for global mortality identified by WHO in 2010 (fourth overall).', 'PHYSICAL INACTIVITY'],
    ['The recommended daily minutes of moderate-to-vigorous physical activity for children aged 5–17.', '60 MINUTES']
  ],
  'UNIT II': [
    ['The proponent of movement education in the early 20th century.', 'RUDOLF LABAN'],
    ['Bones that are cube-like, equal in length, width, and thickness.', 'SHORT BONES'],
    ['The only sesamoid bones found in every person.', 'PATELLAE'],
    ['Bones that act as levers and move when muscles contract.', 'LONG BONES'],
    ['The type of joint that restricts motion to only a few degrees, found in the spine.', 'SLIGHTLY MOVABLE JOINTS'],
    ['The plane that divides the body into right and left parts.', 'MID-SAGITTAL (MEDIAN) PLANE'],
    ['The plane that divides the body into anterior and posterior portions.', 'CORONAL (FRONTAL) PLANE'],
    ['The plane that divides the body into upper and lower sections.', 'TRANSVERSE (HORIZONTAL) PLANE'],
    ['Movement of a body segment away from the midline of the body.', 'ABDUCTION'],
    ['Rotation of the hand and forearm resulting in a palm-down position.', 'PRONATION'],
    ['The type of muscle tissue found only in the heart.', 'CARDIAC MUSCLE'],
    ['The type of contraction where the muscle develops tension with no change in overall length.', 'ISOMETRIC CONTRACTION'],
    ['The muscle role that equalizes or nullifies one or more actions of another muscle.', 'NEUTRALIZER'],
    ['The muscle role that must relax to allow a movement to occur.', 'ANTAGONIST'],
    ['The type of contraction where the muscle lengthens while developing tension.', 'ECCENTRIC CONTRACTION']
  ],
  'UNIT III': [
    ['The ability to perform one’s daily tasks efficiently without undue fatigue but with extra "reserve" in case of emergency.', 'PHYSICAL FITNESS'],
    ['Refers to the soundness of the heart and lungs, contributing to the ability to resist diseases.', 'ORGANIC VIGOR'],
    ['The ability of the muscle to release maximum force in the shortest period of time.', 'POWER'],
    ['The ability to change direction or position in space with quickness and lightness of movement.', 'AGILITY'],
    ['The proportion of lean body mass to fat body mass.', 'BODY COMPOSITION'],
    ['The somatotype characterized by soft roundness and large digestive viscera.', 'ENDOMORPHIC'],
    ['The somatotype characterized by a lean and small body build with slender limbs.', 'ECTOMORPHIC'],
    ['The system of classifying an individual according to body shape, developed by Sheldon.', 'SOMATOTYPING'],
    ['The cardiovascular variable that refers to how long the exercise will be performed.', 'DURATION'],
    ['The principle stating that fitness gains diminish when exercise is discontinued.', 'PRINCIPLE OF REVERSIBILITY'],
    ['The principle recognizing that individuals respond differently to exercise due to age, gender, fitness level, and health status.', 'PRINCIPLE OF INDIVIDUAL VARIATION'],
    ['The health-related component referring to the ability of the muscles and joints to go through a full range of motion.', 'FLEXIBILITY'],
    ['The performance-related component referring to the ability to maintain equilibrium.', 'BALANCE'],
    ['The type of contraction where muscles are exposed to fixed machines with variable resistance equal to the force applied.', 'ISOKINETIC CONTRACTION'],
    ['The number of bones that compose the adult skeleton.', '206']
  ]
};

const multipleChoiceQuestions = {
  'UNIT I': [
    ['The modern approach to Physical Education that shifts the focus from mere physical fitness to holistic development through physical activities.', ['Education of the physical', 'Education through movement', 'Drill and calisthenics', 'Physical training'], 1],
    ['The philosopher who wrote, “the greatest of follies is to neglect one’s health for any advantage in life.”', ['Aristotle', 'Plato', 'Schopenhauer', 'Kant'], 2],
    ['The year Physical Education became mandatory in all public schools.', ['1901', '1920', '1937', '1969'], 1],
    ['The year MAPE was introduced in the Philippine curriculum.', ['1969', '1975', '1982', '1987'], 2],
    ['The function of Physical Education that enhances growth and development by promoting healthy body movement patterns.', ['Biological function', 'Integrative function', 'Social function', 'Aesthetic function'], 0],
    ['The function of Physical Education that integrates personality traits such as self-discipline, resilience, and teamwork.', ['Biological function', 'Integrative function', 'Social function', 'Nationalism function'], 1],
    ['The function of Physical Education that transmits values and standards, promoting cooperation and inclusivity.', ['Biological function', 'Integrative function', 'Social function', 'Conservation function'], 2],
    ['The CHED Memorandum Order that sets guidelines for teaching Physical Education in the general education curriculum.', ['CMO No. 39', 'CMO No. 40', 'CMO No. 19', 'CMO No. 21'], 1],
    ['The leading risk factor for global mortality identified by WHO in 2010 (fourth overall).', ['Physical inactivity', 'Poor nutrition', 'Tobacco use', 'Alcohol use'], 0],
    ['The recommended daily minutes of moderate-to-vigorous physical activity for children aged 5–17.', ['30 minutes', '45 minutes', '60 minutes', '90 minutes'], 2]
  ],
  'UNIT II': [
    ['The proponent of movement education in the early 20th century.', ['John Dewey', 'Rudolf Laban', 'William Sheldon', 'Carmen Andin'], 1],
    ['Bones that are cube-like, equal in length, width, and thickness.', ['Long bones', 'Short bones', 'Flat bones', 'Irregular bones'], 1],
    ['The only sesamoid bones found in every person.', ['Patellae', 'Carpals', 'Tarsals', 'Vertebrae'], 0],
    ['Bones that act as levers and move when muscles contract.', ['Long bones', 'Short bones', 'Flat bones', 'Sesamoid bones'], 0],
    ['The type of joint that restricts motion to only a few degrees, found in the spine.', ['Immovable joints', 'Slightly movable joints', 'Free movable joints', 'Synovial joints'], 1],
    ['The plane that divides the body into right and left parts.', ['Coronal plane', 'Transverse plane', 'Mid-sagittal plane', 'Oblique plane'], 2],
    ['The plane that divides the body into anterior and posterior portions.', ['Coronal (frontal) plane', 'Transverse plane', 'Mid-sagittal plane', 'Oblique plane'], 0],
    ['The plane that divides the body into upper and lower sections.', ['Coronal plane', 'Transverse (horizontal) plane', 'Mid-sagittal plane', 'Frontal plane'], 1],
    ['Movement of a body segment away from the midline of the body.', ['Adduction', 'Abduction', 'Flexion', 'Extension'], 1],
    ['Rotation of the hand and forearm resulting in a palm-down position.', ['Supination', 'Pronation', 'Inversion', 'Eversion'], 1],
    ['The type of muscle tissue found only in the heart.', ['Skeletal muscle', 'Smooth muscle', 'Cardiac muscle', 'Voluntary muscle'], 2],
    ['The type of contraction where the muscle develops tension with no change in overall length.', ['Isotonic', 'Concentric', 'Eccentric', 'Isometric'], 3],
    ['The muscle role that equalizes or nullifies one or more actions of another muscle.', ['Agonist', 'Antagonist', 'Stabilizer', 'Neutralizer'], 3],
    ['The muscle role that must relax to allow a movement to occur.', ['Agonist', 'Antagonist', 'Stabilizer', 'Neutralizer'], 1],
    ['The type of contraction where the muscle lengthens while developing tension.', ['Concentric', 'Eccentric', 'Isometric', 'Isokinetic'], 1]
  ],
  'UNIT III': [
    ['The ability to perform one’s daily tasks efficiently without undue fatigue but with extra “reserve” in case of emergency.', ['Physical fitness', 'Organic vigor', 'Endurance', 'Power'], 0],
    ['Refers to the soundness of the heart and lungs, contributing to the ability to resist diseases.', ['Endurance', 'Organic vigor', 'Strength', 'Power'], 1],
    ['The ability of the muscle to release maximum force in the shortest period of time.', ['Strength', 'Power', 'Endurance', 'Flexibility'], 1],
    ['The ability to change direction or position in space with quickness and lightness of movement.', ['Balance', 'Speed', 'Agility', 'Coordination'], 2],
    ['The proportion of lean body mass to fat body mass.', ['Body composition', 'Flexibility', 'Muscular endurance', 'Cardiovascular endurance'], 0],
    ['The somatotype characterized by soft roundness and large digestive viscera.', ['Ectomorphic', 'Mesomorphic', 'Endomorphic', 'Morphic'], 2],
    ['The somatotype characterized by a lean and small body build with slender limbs.', ['Ectomorphic', 'Mesomorphic', 'Endomorphic', 'Morphic'], 0],
    ['The system of classifying an individual according to body shape, developed by Sheldon.', ['Somatotyping', 'Kinesiology', 'Biomechanics', 'Anthropometry'], 0],
    ['The cardiovascular variable that refers to how long the exercise will be performed.', ['Intensity', 'Duration', 'Frequency', 'Mode'], 1],
    ['The principle stating that fitness gains diminish when exercise is discontinued.', ['Principle of Recovery', 'Principle of Reversibility', 'Principle of Individual Variation', 'Principle of Progressive Overload'], 1],
    ['The principle recognizing that individuals respond differently to exercise due to age, gender, fitness level, and health status.', ['Principle of Recovery', 'Principle of Reversibility', 'Principle of Individual Variation', 'Principle of Specificity'], 2],
    ['The health-related component referring to the ability of the muscles and joints to go through a full range of motion.', ['Flexibility', 'Body composition', 'Muscular endurance', 'Cardiovascular endurance'], 0],
    ['The performance-related component referring to the ability to maintain equilibrium.', ['Coordination', 'Balance', 'Agility', 'Speed'], 1],
    ['The type of contraction where muscles are exposed to fixed machines with variable resistance equal to the force applied.', ['Isotonic', 'Isometric', 'Isokinetic', 'Eccentric'], 2],
    ['The number of bones that compose the adult skeleton.', ['106', '206', '306', '406'], 1]
  ]
};

/* Accurate Hard Mock Test banks (DeepSeek PDF-sourced mock, 70 + 80 + 80 items).
   kind: mc | match | tf | type (type-in) | study (no grading). */
const hardMockBanks = {
  "UNIT I": [
    { kind: "mc", q: "Which German philosopher said, “the greatest of follies is to neglect one’s health for any advantage in life”?", options: ["Kant", "Schopenhauer", "Nietzsche", "Aristotle"], correctIndex: 1, explanation: "The correct answer is Schopenhauer." },
    { kind: "mc", q: "According to Andin (2002), Physical Education is aimed at fostering the optimal development of individuals physically, socially, emotionally, and mentally through:", options: ["drill and calisthenics", "well-chosen physical activities", "competitive athletics", "muscle strengthening only"], correctIndex: 1, explanation: "The correct answer is well-chosen physical activities." },
    { kind: "mc", q: "Historically, Physical Education was viewed primarily as the education of the physical body, where what was considered the hallmark of a physically educated individual?", options: ["A muscular physique", "A lean body", "High endurance", "Flexibility"], correctIndex: 0, explanation: "The correct answer is A muscular physique." },
    { kind: "mc", q: "Activities during the era when PE was viewed as education of the physical body were termed all EXCEPT:", options: ["drill", "physical training", "calisthenics", "outdoor pursuits"], correctIndex: 3, explanation: "The correct answer is outdoor pursuits." },
    { kind: "mc", q: "Which of the following is NOT one of Wunderlich’s (1967) benefits of movement in education?", options: ["It provides sensory data.", "It broadens the perspective horizon.", "It stimulates the function and structure of all bodily organs.", "It guarantees a muscular physique."], correctIndex: 3, explanation: "The correct answer is It guarantees a muscular physique.." },
    { kind: "mc", q: "“Education through movement” involves utilizing a culturally rich array of activities and processes such as all EXCEPT:", options: ["games", "dance", "gymnastics", "rote memorization"], correctIndex: 3, explanation: "The correct answer is rote memorization." },
    { kind: "mc", q: "The concept “learn to move, move to learn” highlights that:", options: ["individuals must master movement to facilitate learning", "movement is only for athletes", "learning is separate from movement", "movement should be avoided in class"], correctIndex: 0, explanation: "The correct answer is individuals must master movement to facilitate learning." },
    { kind: "mc", q: "In what year did Physical exercise become part of public school subjects, with regular athletic programs?", options: ["1901", "1920", "1937", "1969"], correctIndex: 0, explanation: "The correct answer is 1901." },
    { kind: "mc", q: "In what year did Physical Education become mandatory in all public schools?", options: ["1901", "1920", "1937", "1969"], correctIndex: 1, explanation: "The correct answer is 1920." },
    { kind: "mc", q: "In what year did Physical Education become a formal subject in secondary school curricula?", options: ["1901", "1920", "1937", "1969"], correctIndex: 2, explanation: "The correct answer is 1937." },
    { kind: "mc", q: "The School of Physical Education and Sports Development Act was passed in what year?", options: ["1901", "1920", "1937", "1969"], correctIndex: 3, explanation: "The correct answer is 1969." },
    { kind: "mc", q: "Which of the following was NOT among the programs under the 1969 School of Physical Education and Sports Development Act?", options: ["A program of health education and nutrition", "A program of physical fitness for all pupils", "A program of competitive athletics", "A program of music and arts"], correctIndex: 3, explanation: "The correct answer is A program of music and arts." },
    { kind: "mc", q: "In what year was MAPE introduced, involving music, arts, and physical education?", options: ["1969", "1975", "1982", "1987"], correctIndex: 2, explanation: "The correct answer is 1982." },
    { kind: "mc", q: "The book “Foundation of Physical Education,” cited in connection with MAPE, was authored by:", options: ["Carmen Andin", "Rudolf Laban", "Wunderlich", "Sheldon"], correctIndex: 0, explanation: "The correct answer is Carmen Andin." },
    { kind: "mc", q: "Article 1 of the International Charter of Physical Education and Sports was adopted by UNESCO in what city and year?", options: ["Paris, 1975", "Brisbane, 1982", "Manila, 1987", "Geneva, 2010"], correctIndex: 0, explanation: "The correct answer is Paris, 1975." },
    { kind: "mc", q: "Recommendation 1 of the Interdisciplinary Regional Meeting of Experts in Physical Education and Sports was held in what city and year?", options: ["Paris, 1975", "Brisbane, 1982", "Manila, 1987", "Geneva, 2010"], correctIndex: 1, explanation: "The correct answer is Brisbane, 1982." },
    { kind: "mc", q: "Article XIV Section 19 (1) & (2) of the 1987 Philippine Constitution mandates that the State shall promote PE and encourage sports programs to foster:", options: ["self-discipline, teamwork, and excellence", "economic growth only", "political awareness", "technological advancement"], correctIndex: 0, explanation: "The correct answer is self-discipline, teamwork, and excellence." },
    { kind: "mc", q: "According to Article XIV Section 19 (2), all educational institutions shall undertake regular sports activities throughout the country in cooperation with:", options: ["athletic clubs and other sectors", "international organizations", "private corporations only", "religious groups"], correctIndex: 0, explanation: "The correct answer is athletic clubs and other sectors." },
    { kind: "mc", q: "The biological function of Physical Education:", options: ["enhances growth and development by promoting healthy body movement patterns", "integrates personality traits", "transmits essential values and standards", "cultivates leadership qualities"], correctIndex: 0, explanation: "The correct answer is enhances growth and development by promoting healthy body movement patterns." },
    { kind: "mc", q: "Which function of Physical Education fosters self-discipline, resilience, teamwork, and critical thinking skills?", options: ["Biological", "Integrative", "Social", "Economic"], correctIndex: 1, explanation: "The correct answer is Integrative." },
    { kind: "mc", q: "Which function of PE promotes cooperation, respect, inclusivity, and a sense of community and belonging?", options: ["Biological", "Integrative", "Social", "Cognitive"], correctIndex: 2, explanation: "The correct answer is Social." },
    { kind: "mc", q: "FITNESS is defined as the ability to lead a healthy, fulfilling, and purposeful life — a life referred to by educational philosophers as:", options: ["the good life", "the simple life", "the active life", "the long life"], correctIndex: 0, explanation: "The correct answer is the good life." },
    { kind: "mc", q: "Living the “good life” entails meeting basic needs such as all EXCEPT:", options: ["physical well-being", "love", "security", "material wealth above all"], correctIndex: 3, explanation: "The correct answer is material wealth above all." },
    { kind: "mc", q: "Which objective of Physical Education helps individuals build and sustain physical skills, improving overall growth and development?", options: ["Physical Development", "Social Development", "Emotional Development", "Mental Development"], correctIndex: 0, explanation: "The correct answer is Physical Development." },
    { kind: "mc", q: "Which objective of Physical Education cultivates traits such as friendship, cooperation, respect for others’ rights, and good sportsmanship?", options: ["Physical Development", "Social Development", "Emotional Development", "Mental Development"], correctIndex: 1, explanation: "The correct answer is Social Development." },
    { kind: "mc", q: "Which objective of Physical Education develops self-confidence, self-control, self-reliance, courage, and determination?", options: ["Physical Development", "Social Development", "Emotional Development", "Mental Development"], correctIndex: 2, explanation: "The correct answer is Emotional Development." },
    { kind: "mc", q: "Learning the mechanical principles underlying movements and gaining knowledge of game rules and strategies falls under:", options: ["Physical Development", "Social Development", "Emotional Development", "Mental Development"], correctIndex: 3, explanation: "The correct answer is Mental Development." },
    { kind: "mc", q: "Which of the following is NOT among the seven objectives of Physical Education?", options: ["Knowledge", "Aesthetic", "Nationalism", "Economic profit"], correctIndex: 3, explanation: "The correct answer is Economic profit." },
    { kind: "mc", q: "Which CHED Memorandum Order focuses on the policies, standards, and guidelines for the Bachelor of Physical Education program?", options: ["CMO No. 39", "CMO No. 40", "CMO No. 41", "CMO No. 42"], correctIndex: 0, explanation: "The correct answer is CMO No. 39." },
    { kind: "mc", q: "Which CHED Memorandum Order establishes the guidelines for the teaching of Physical Education in the general education curriculum?", options: ["CMO No. 39", "CMO No. 40", "CMO No. 41", "CMO No. 42"], correctIndex: 1, explanation: "The correct answer is CMO No. 40." },
    { kind: "type", q: "The course code for Movement Competency-Based Training.", accepted: ["PATHFIT 1", "PE 1", "PATHFIT1", "PE1"], answer: "PATHFIT 1", explanation: "Correct answer: PATHFIT 1." },
    { kind: "type", q: "The course code for Exercise-Based Fitness Activities.", accepted: ["PATHFIT 2", "PE 2", "PATHFIT2", "PE2"], answer: "PATHFIT 2", explanation: "Correct answer: PATHFIT 2." },
    { kind: "type", q: "The number of units for PATHFit 1 and PATHFit 2.", accepted: ["2", "2 UNITS", "TWO", "TWO UNITS"], answer: "2 units", explanation: "Correct answer: 2 units." },
    { kind: "type", q: "The number of units for PATHFit 3 and PATHFit 4.", accepted: ["2", "2 UNITS", "TWO", "TWO UNITS"], answer: "2 units", explanation: "Correct answer: 2 units." },
    { kind: "type", q: "The acronym for the five aspects of student development: Physically, Emotionally, Mentally, Socially, and Spiritually.", accepted: ["PEMSS"], answer: "PEMSS", explanation: "Correct answer: PEMSS." },
    { kind: "type", q: "The year the WHO released the report stating physical inactivity is the 4th leading risk factor for global mortality.", accepted: ["2010"], answer: "2010", explanation: "Correct answer: 2010." },
    { kind: "type", q: "The year CHED issued CMO 39 and CMO 40.", accepted: ["2021"], answer: "2021", explanation: "Correct answer: 2021." },
    { kind: "type", q: "The number of minutes of moderate to vigorous physical activity children (5–17) should get every day.", accepted: ["60", "60 MINUTES"], answer: "60 minutes", explanation: "Correct answer: 60 minutes." },
    { kind: "type", q: "The number of minutes of moderate-intensity aerobic exercise adults (18–64) should aim for per week.", accepted: ["150", "150 MINUTES"], answer: "150 minutes", explanation: "Correct answer: 150 minutes." },
    { kind: "type", q: "The number of minutes of vigorous-intensity activity adults (18–64) should aim for per week.", accepted: ["75", "75 MINUTES"], answer: "75 minutes", explanation: "Correct answer: 75 minutes." },
    { kind: "match", q: "Chapter 1", options: ["A. Movement Education", "B. Nutrition", "C. Concepts of Physical Education", "D. Movement Training", "E. Physical Fitness"], correctIndex: 2, explanation: "Correct match: C. Concepts of Physical Education." },
    { kind: "match", q: "Chapter 2", options: ["A. Movement Education", "B. Nutrition", "C. Concepts of Physical Education", "D. Movement Training", "E. Physical Fitness"], correctIndex: 0, explanation: "Correct match: A. Movement Education." },
    { kind: "match", q: "Chapter 3", options: ["A. Movement Education", "B. Nutrition", "C. Concepts of Physical Education", "D. Movement Training", "E. Physical Fitness"], correctIndex: 3, explanation: "Correct match: D. Movement Training." },
    { kind: "match", q: "Chapter 4", options: ["A. Movement Education", "B. Nutrition", "C. Concepts of Physical Education", "D. Movement Training", "E. Physical Fitness"], correctIndex: 1, explanation: "Correct match: B. Nutrition." },
    { kind: "match", q: "Chapter 5", options: ["A. Movement Education", "B. Nutrition", "C. Concepts of Physical Education", "D. Movement Training", "E. Physical Fitness"], correctIndex: 4, explanation: "Correct match: E. Physical Fitness." },
    { kind: "match", q: "1901", options: ["A. MAPE introduced (music, arts, PE)", "B. PE became a formal subject in secondary school curricula", "C. Physical exercise became part of public school subjects with regular athletic programs", "D. PE subject became mandatory in all public schools", "E. School of Physical Education and Sports Development Act"], correctIndex: 2, explanation: "Correct match: C. Physical exercise became part of public school subjects with regular athletic programs." },
    { kind: "match", q: "1920", options: ["A. MAPE introduced (music, arts, PE)", "B. PE became a formal subject in secondary school curricula", "C. Physical exercise became part of public school subjects with regular athletic programs", "D. PE subject became mandatory in all public schools", "E. School of Physical Education and Sports Development Act"], correctIndex: 3, explanation: "Correct match: D. PE subject became mandatory in all public schools." },
    { kind: "match", q: "1937", options: ["A. MAPE introduced (music, arts, PE)", "B. PE became a formal subject in secondary school curricula", "C. Physical exercise became part of public school subjects with regular athletic programs", "D. PE subject became mandatory in all public schools", "E. School of Physical Education and Sports Development Act"], correctIndex: 1, explanation: "Correct match: B. PE became a formal subject in secondary school curricula." },
    { kind: "match", q: "1969", options: ["A. MAPE introduced (music, arts, PE)", "B. PE became a formal subject in secondary school curricula", "C. Physical exercise became part of public school subjects with regular athletic programs", "D. PE subject became mandatory in all public schools", "E. School of Physical Education and Sports Development Act"], correctIndex: 4, explanation: "Correct match: E. School of Physical Education and Sports Development Act." },
    { kind: "match", q: "1982", options: ["A. MAPE introduced (music, arts, PE)", "B. PE became a formal subject in secondary school curricula", "C. Physical exercise became part of public school subjects with regular athletic programs", "D. PE subject became mandatory in all public schools", "E. School of Physical Education and Sports Development Act"], correctIndex: 0, explanation: "Correct match: A. MAPE introduced (music, arts, PE)." },
    { kind: "tf", q: "Physical Education as a subject has historically been neglected due to misunderstandings among teachers and administrators.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "tf", q: "The integrative function of PE focuses solely on physical health and ignores personality traits.", options: ["True", "False"], correctIndex: 1, explanation: "The correct answer is False." },
    { kind: "tf", q: "The “good life” includes harmonious relationships with others and a commitment to serving humanity with integrity.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "tf", q: "Physical Education aims to foster holistic development, enabling individuals to attain total fitness and embrace the “good life.”", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "tf", q: "The “Nationalism” objective of PE involves preserving cultural heritage by reviving traditional games, dances, and sports.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "tf", q: "The “Conservation” objective of PE focuses on protecting the natural environment, such as forests and aquatic resources.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "tf", q: "CMO 40 emphasizes physical literacy, wellness, and lifelong fitness among students.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "tf", q: "Sedentary lifestyles, urbanization, and technological advancements are cited as contributing factors to physical inactivity.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "tf", q: "PE programs promote active living and encourage students to meet WHO’s exercise recommendations.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "tf", q: "One of the objectives of PE is to foster creativity and innovation inspired by faith in God, love of country, and care for fellow humans.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "study", q: "Differentiate “education of the physical” from “education through the physical.”", modelAnswer: "Education of the physical trains the body itself (strength, drill). Education through the physical uses movement as a medium for holistic physical, mental, emotional, and social growth.", explanation: "Study card — not graded." },
    { kind: "study", q: "List the four benefits of movement in education according to Wunderlich (1967).", modelAnswer: "It provides sensory data; it broadens the perspective horizon; it stimulates all bodily organs; it helps people learn about themselves in relation to the environment.", explanation: "Study card — not graded." },
    { kind: "study", q: "Explain why the “good life” is considered the ultimate goal of education.", modelAnswer: "The good life — healthy, fulfilling, purposeful living — is education’s ultimate goal: meeting basic needs, harmonious relationships, and service with integrity.", explanation: "Study card — not graded." },
    { kind: "study", q: "What are the three functions of Physical Education? Briefly describe each.", modelAnswer: "Biological (growth and healthy movement); integrative (discipline, resilience, teamwork); social (cooperation, respect, community).", explanation: "Study card — not graded." },
    { kind: "study", q: "Name the four objectives of Physical Education and give one example each.", modelAnswer: "Physical (skills and fitness, e.g., jogging); Social (friendship and cooperation, e.g., team play); Emotional (confidence and control, e.g., retrying after failure); Mental (rules and strategy, e.g., diagramming plays).", explanation: "Study card — not graded." },
    { kind: "study", q: "List the seven objectives of PE and briefly explain any two.", modelAnswer: "Knowledge, Physical Fitness, Social, Motor Skills, Aesthetic, Nationalism, Conservation. Example: Nationalism preserves heritage through traditional games; Conservation protects forests and aquatic resources.", explanation: "Study card — not graded." },
    { kind: "study", q: "What is the significance of CHED CMO 40 in the tertiary PE curriculum?", modelAnswer: "CMO 40 guides PE in general education — physical literacy, wellness, and lifelong fitness for all tertiary students.", explanation: "Study card — not graded." },
    { kind: "study", q: "What are the WHO recommendations for older adults (65 years and above)?", modelAnswer: "Focus on balance, endurance, strength, and flexibility, staying as active as able.", explanation: "Study card — not graded." },
    { kind: "study", q: "Explain the role of PE in implementing the WHO recommendations.", modelAnswer: "PE teaches the importance and risks, builds movement skills, and promotes active lifestyles that meet the WHO recommendations.", explanation: "Study card — not graded." },
    { kind: "study", q: "How does Physical Education contribute to cultural appreciation and unity?", modelAnswer: "Through indigenous games, dance, and sports, PE builds love and pride for culture plus unity and international brotherhood.", explanation: "Study card — not graded." },
  ],
  "UNIT II": [
    { kind: "mc", q: "Movement education was introduced in the early 20th century by:", options: ["Rudolf Laban", "John Dewey", "Gallahue", "Ozmun"], correctIndex: 0, explanation: "The correct answer is Rudolf Laban." },
    { kind: "mc", q: "Movement education has evolved into a multidisciplinary approach incorporating all EXCEPT:", options: ["kinesiology", "biomechanics", "motor learning", "astrology"], correctIndex: 3, explanation: "The correct answer is astrology." },
    { kind: "mc", q: "Which of the following is NOT a fundamental movement skill mentioned in the PDF?", options: ["running", "jumping", "throwing", "swimming"], correctIndex: 3, explanation: "The correct answer is swimming." },
    { kind: "mc", q: "The skeletal system performs all of the following critical functions EXCEPT:", options: ["Protects", "Supports", "Produces blood", "Generates body heat"], correctIndex: 3, explanation: "The correct answer is Generates body heat." },
    { kind: "mc", q: "The skull protects the:", options: ["brain", "spinal cord", "heart and lungs", "abdominal organs"], correctIndex: 0, explanation: "The correct answer is brain." },
    { kind: "mc", q: "The vertebral column protects the:", options: ["brain", "spinal cord", "heart and lungs", "eyes and ears"], correctIndex: 1, explanation: "The correct answer is spinal cord." },
    { kind: "mc", q: "The rib cage protects the:", options: ["brain", "spinal cord", "heart and lungs", "digestive organs"], correctIndex: 2, explanation: "The correct answer is heart and lungs." },
    { kind: "mc", q: "Red and white blood cells are produced in the bone marrow of all EXCEPT:", options: ["ribs", "humerus", "vertebrae", "skull"], correctIndex: 3, explanation: "The correct answer is skull." },
    { kind: "mc", q: "How many bones compose the adult skeleton?", options: ["106", "206", "306", "406"], correctIndex: 1, explanation: "The correct answer is 206." },
    { kind: "mc", q: "Bones that are cylindrical in shape, longer than wide, and act as levers are:", options: ["Long bones", "Short bones", "Flat bones", "Irregular bones"], correctIndex: 0, explanation: "The correct answer is Long bones." },
    { kind: "mc", q: "Which of the following is an example of a long bone?", options: ["Carpals", "Femur", "Sternum", "Vertebrae"], correctIndex: 1, explanation: "The correct answer is Femur." },
    { kind: "mc", q: "Bones that are cube-like in shape, equal in length, width, and thickness are:", options: ["Long bones", "Short bones", "Flat bones", "Sesamoid bones"], correctIndex: 1, explanation: "The correct answer is Short bones." },
    { kind: "mc", q: "The only short bones in the human skeleton are found in the:", options: ["carpals and tarsals", "humerus and femur", "sternum and ribs", "vertebrae and sacrum"], correctIndex: 0, explanation: "The correct answer is carpals and tarsals." },
    { kind: "mc", q: "Flat bones are typically thin and often curved. Which of the following is a flat bone?", options: ["Femur", "Scapulae", "Carpals", "Patella"], correctIndex: 1, explanation: "The correct answer is Scapulae." },
    { kind: "mc", q: "Bones that do not have any easily characterized shape and tend to have complex shapes, like the vertebrae, are:", options: ["Long bones", "Short bones", "Flat bones", "Irregular bones"], correctIndex: 3, explanation: "The correct answer is Irregular bones." },
    { kind: "mc", q: "Small, round bones shaped like a sesame seed, embedded in tendons, and protecting tendons from compressive forces are:", options: ["Long bones", "Short bones", "Irregular bones", "Sesamoid bones"], correctIndex: 3, explanation: "The correct answer is Sesamoid bones." },
    { kind: "mc", q: "The only sesamoid bones found in common with every person are the:", options: ["carpals", "tarsals", "patellae", "phalanges"], correctIndex: 2, explanation: "The correct answer is patellae." },
    { kind: "mc", q: "The skeleton is divided into two parts: the axial skeleton and the:", options: ["appendicular skeleton", "peripheral skeleton", "central skeleton", "lateral skeleton"], correctIndex: 0, explanation: "The correct answer is appendicular skeleton." },
    { kind: "mc", q: "The shoulder girdle is made up of:", options: ["two clavicles and two scapulas", "two humerus and two radius", "two femurs and two tibias", "two ulnas and two radius"], correctIndex: 0, explanation: "The correct answer is two clavicles and two scapulas." },
    { kind: "mc", q: "How many carpal bones are in the wrist?", options: ["5", "7", "8", "12"], correctIndex: 2, explanation: "The correct answer is 8." },
    { kind: "mc", q: "The female pelvis is wider and shallower than the male pelvis. This makes:", options: ["childbearing easier but running less efficient", "childbearing harder but running more efficient", "both childbearing and running easier", "both childbearing and running harder"], correctIndex: 0, explanation: "The correct answer is childbearing easier but running less efficient." },
    { kind: "mc", q: "How many tarsals are there in the foot?", options: ["5", "7", "8", "12"], correctIndex: 1, explanation: "The correct answer is 7." },
    { kind: "mc", q: "The skull is made up of how many bones?", options: ["14", "22", "28", "34"], correctIndex: 2, explanation: "The correct answer is 28." },
    { kind: "mc", q: "How many bones are in the face?", options: ["6", "14", "28", "34"], correctIndex: 1, explanation: "The correct answer is 14." },
    { kind: "mc", q: "How many bones are in the ear?", options: ["6", "14", "28", "34"], correctIndex: 0, explanation: "The correct answer is 6." },
    { kind: "mc", q: "The ribs are made up of how many pairs joined to the vertebral column?", options: ["7", "10", "12", "14"], correctIndex: 2, explanation: "The correct answer is 12." },
    { kind: "mc", q: "How many pairs of ribs are joined to the sternum?", options: ["3", "7", "12", "14"], correctIndex: 1, explanation: "The correct answer is 7." },
    { kind: "mc", q: "How many pairs of ribs are joined to the seventh rib (false ribs)?", options: ["2", "3", "7", "12"], correctIndex: 1, explanation: "The correct answer is 3." },
    { kind: "mc", q: "How many ribs are unattached (floating ribs)?", options: ["2", "3", "7", "12"], correctIndex: 0, explanation: "The correct answer is 2." },
    { kind: "mc", q: "Joints capable of movement by muscular force, where two bones have been fused together, are:", options: ["Immovable joints", "Slightly movable joints", "Free movable joints", "Synovial joints"], correctIndex: 0, explanation: "The correct answer is Immovable joints." },
    { kind: "mc", q: "An example of a slightly movable joint is:", options: ["the spine", "the shoulder", "the elbow", "the knee"], correctIndex: 0, explanation: "The correct answer is the spine." },
    { kind: "mc", q: "Free movable joints are found in all EXCEPT:", options: ["shoulder", "elbow", "wrist", "cranium"], correctIndex: 3, explanation: "The correct answer is cranium." },
    { kind: "mc", q: "The vertical plane extending in an anteroposterior direction dividing the body into right and left parts is the:", options: ["mid-sagittal (median) plane", "coronal (frontal) plane", "transverse (horizontal) plane", "oblique plane"], correctIndex: 0, explanation: "The correct answer is mid-sagittal (median) plane." },
    { kind: "mc", q: "The vertical plane at right angles to the sagittal plane that divides the body into anterior and posterior portions is the:", options: ["sagittal plane", "coronal (frontal) plane", "transverse plane", "median plane"], correctIndex: 1, explanation: "The correct answer is coronal (frontal) plane." },
    { kind: "mc", q: "The horizontal cross-section dividing the body into upper and lower sections is the:", options: ["sagittal plane", "coronal plane", "transverse (horizontal) plane", "median plane"], correctIndex: 2, explanation: "The correct answer is transverse (horizontal) plane." },
    { kind: "match", q: "Flexion", options: ["B. Movement causing a decrease in the angle at the joint", "C. Ankle flexed, top of foot draws closer to tibia", "D. Body segment flexes through the horizontal plane", "E. Opposite movement at the ankle"], correctIndex: 0, explanation: "Correct match: B. Movement causing a decrease in the angle at the joint." },
    { kind: "match", q: "Lateral Flexion", options: ["A. Bending sideways", "B. Movement causing a decrease in the angle at the joint", "C. Ankle flexed, top of foot draws closer to tibia", "D. Body segment flexes through the horizontal plane"], correctIndex: 0, explanation: "Correct match: A. Bending sideways." },
    { kind: "match", q: "Horizontal Flexion", options: ["D. Body segment flexes through the horizontal plane", "E. Opposite movement at the ankle", "F. Extension beyond normal extended position", "G. Movement in opposite direction of flexion; increases angle at joint"], correctIndex: 0, explanation: "Correct match: D. Body segment flexes through the horizontal plane." },
    { kind: "match", q: "Dorsiflex", options: ["C. Ankle flexed, top of foot draws closer to tibia", "D. Body segment flexes through the horizontal plane", "E. Opposite movement at the ankle", "F. Extension beyond normal extended position"], correctIndex: 0, explanation: "Correct match: C. Ankle flexed, top of foot draws closer to tibia." },
    { kind: "match", q: "Plantar Flexion", options: ["E. Opposite movement at the ankle", "F. Extension beyond normal extended position", "G. Movement in opposite direction of flexion; increases angle at joint", "H. Body segment extends through the horizontal plane"], correctIndex: 0, explanation: "Correct match: E. Opposite movement at the ankle." },
    { kind: "match", q: "Extension", options: ["G. Movement in opposite direction of flexion; increases angle at joint", "H. Body segment extends through the horizontal plane", "I. Movement toward the midline", "J. Movement away from the midline"], correctIndex: 0, explanation: "Correct match: G. Movement in opposite direction of flexion; increases angle at joint." },
    { kind: "match", q: "Horizontal Extension", options: ["H. Body segment extends through the horizontal plane", "I. Movement toward the midline", "J. Movement away from the midline", "K. Rotation of the hand/forearm downward (palm-down)"], correctIndex: 0, explanation: "Correct match: H. Body segment extends through the horizontal plane." },
    { kind: "match", q: "Hyperextension", options: ["F. Extension beyond normal extended position", "G. Movement in opposite direction of flexion; increases angle at joint", "H. Body segment extends through the horizontal plane", "I. Movement toward the midline"], correctIndex: 0, explanation: "Correct match: F. Extension beyond normal extended position." },
    { kind: "match", q: "Abduction", options: ["J. Movement away from the midline", "K. Rotation of the hand/forearm downward (palm-down)", "L. Movement around its own longitudinal axis", "M. Rotating the foot, sole outward"], correctIndex: 0, explanation: "Correct match: J. Movement away from the midline." },
    { kind: "match", q: "Adduction", options: ["I. Movement toward the midline", "J. Movement away from the midline", "K. Rotation of the hand/forearm downward (palm-down)", "L. Movement around its own longitudinal axis"], correctIndex: 0, explanation: "Correct match: I. Movement toward the midline." },
    { kind: "match", q: "Rotation", options: ["L. Movement around its own longitudinal axis", "M. Rotating the foot, sole outward", "N. Rotation of the hand/forearm upward (palm-up)", "O. Circular or cone-like movement of a body segment"], correctIndex: 0, explanation: "Correct match: L. Movement around its own longitudinal axis." },
    { kind: "match", q: "Pronation", options: ["K. Rotation of the hand/forearm downward (palm-down)", "L. Movement around its own longitudinal axis", "M. Rotating the foot, sole outward", "N. Rotation of the hand/forearm upward (palm-up)"], correctIndex: 0, explanation: "Correct match: K. Rotation of the hand/forearm downward (palm-down)." },
    { kind: "match", q: "Supination", options: ["N. Rotation of the hand/forearm upward (palm-up)", "O. Circular or cone-like movement of a body segment", "P. Rotating the foot, sole inward", "Q. Movement of the shoulder girdle toward the midline"], correctIndex: 0, explanation: "Correct match: N. Rotation of the hand/forearm upward (palm-up)." },
    { kind: "match", q: "Inversion", options: ["P. Rotating the foot, sole inward", "Q. Movement of the shoulder girdle toward the midline", "R. Lifting the shoulder upward (shrugging)", "S. Lowering of the shoulder girdle"], correctIndex: 0, explanation: "Correct match: P. Rotating the foot, sole inward." },
    { kind: "match", q: "Eversion", options: ["M. Rotating the foot, sole outward", "N. Rotation of the hand/forearm upward (palm-up)", "O. Circular or cone-like movement of a body segment", "P. Rotating the foot, sole inward"], correctIndex: 0, explanation: "Correct match: M. Rotating the foot, sole outward." },
    { kind: "match", q: "Circumduction", options: ["O. Circular or cone-like movement of a body segment", "P. Rotating the foot, sole inward", "Q. Movement of the shoulder girdle toward the midline", "R. Lifting the shoulder upward (shrugging)"], correctIndex: 0, explanation: "Correct match: O. Circular or cone-like movement of a body segment." },
    { kind: "match", q: "Elevation", options: ["R. Lifting the shoulder upward (shrugging)", "S. Lowering of the shoulder girdle", "T. Movement of the shoulder girdle away from the midline", "A. Bending sideways"], correctIndex: 0, explanation: "Correct match: R. Lifting the shoulder upward (shrugging)." },
    { kind: "match", q: "Depression", options: ["S. Lowering of the shoulder girdle", "T. Movement of the shoulder girdle away from the midline", "A. Bending sideways", "B. Movement causing a decrease in the angle at the joint"], correctIndex: 0, explanation: "Correct match: S. Lowering of the shoulder girdle." },
    { kind: "match", q: "Protraction", options: ["T. Movement of the shoulder girdle away from the midline", "A. Bending sideways", "B. Movement causing a decrease in the angle at the joint", "C. Ankle flexed, top of foot draws closer to tibia"], correctIndex: 0, explanation: "Correct match: T. Movement of the shoulder girdle away from the midline." },
    { kind: "match", q: "Retraction", options: ["Q. Movement of the shoulder girdle toward the midline", "R. Lifting the shoulder upward (shrugging)", "S. Lowering of the shoulder girdle", "T. Movement of the shoulder girdle away from the midline"], correctIndex: 0, explanation: "Correct match: Q. Movement of the shoulder girdle toward the midline." },
    { kind: "type", q: "The type of muscle that is voluntary and under our control.", accepted: ["SKELETAL", "SKELETAL MUSCLE"], answer: "Skeletal muscle", explanation: "Correct answer: Skeletal muscle." },
    { kind: "type", q: "The type of muscle that works automatically and is not under conscious control (internal organs).", accepted: ["SMOOTH", "SMOOTH MUSCLE"], answer: "Smooth muscle", explanation: "Correct answer: Smooth muscle." },
    { kind: "type", q: "The special type of involuntary muscle found only in the heart.", accepted: ["CARDIAC", "CARDIAC MUSCLE"], answer: "Cardiac muscle", explanation: "Correct answer: Cardiac muscle." },
    { kind: "type", q: "The muscle that moves the arm in all directions at the shoulder (e.g., bowling in cricket).", accepted: ["DELTOID", "DELTOIDS"], answer: "Deltoid", explanation: "Correct answer: Deltoid." },
    { kind: "type", q: "The muscle that extends the forearm at the elbow (e.g., smash in badminton).", accepted: ["TRICEPS", "TRICEPS BRACHII"], answer: "Triceps", explanation: "Correct answer: Triceps." },
    { kind: "type", q: "The muscle group that extends the hip joint and flexes the knee joint.", accepted: ["HAMSTRINGS", "HAMSTRING"], answer: "Hamstrings", explanation: "Correct answer: Hamstrings." },
    { kind: "type", q: "The muscle that helps control the shoulder girdle (e.g., rugby scrum).", accepted: ["TRAPEZIUS"], answer: "Trapezius", explanation: "Correct answer: Trapezius." },
    { kind: "type", q: "The muscle that adducts and extends the arm at the shoulder (e.g., butterfly stroke).", accepted: ["LATISSIMUS DORSI", "LATS", "LATISSIMUS"], answer: "Latissimus dorsi", explanation: "Correct answer: Latissimus dorsi." },
    { kind: "type", q: "The muscle that flexes the forearm at the elbow (e.g., drawing a bow in archery).", accepted: ["BICEPS", "BICEPS BRACHII"], answer: "Biceps", explanation: "Correct answer: Biceps." },
    { kind: "type", q: "The muscle group that flexes the hip joint and extends the knee joint (e.g., high jump).", accepted: ["QUADRICEPS", "QUADS", "QUADRICEPS FEMORIS"], answer: "Quadriceps", explanation: "Correct answer: Quadriceps." },
    { kind: "tf", q: "The skeletal system provides leverage, protection, and support for the body.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "tf", q: "Smooth muscles are voluntary and under our conscious control.", options: ["True", "False"], correctIndex: 1, explanation: "The correct answer is False." },
    { kind: "tf", q: "The female pelvis is wider and shallower than the male pelvis to make childbearing easier.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "tf", q: "In an eccentric contraction, the muscle lengthens while developing tension.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "tf", q: "The appendicular skeleton includes the skull, vertebral column, and rib cage.", options: ["True", "False"], correctIndex: 1, explanation: "The correct answer is False." },
    { kind: "tf", q: "There are over 600 skeletal muscles in the body, 150 of which are in the head and neck.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "tf", q: "In an isometric contraction, the muscle develops tension with no change in overall muscle length.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "tf", q: "The agonist is the muscle that must relax to allow movement to occur.", options: ["True", "False"], correctIndex: 1, explanation: "The correct answer is False." },
    { kind: "tf", q: "A stabilizer holds a body part firm so another segment can move.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "tf", q: "A neutralizer equalizes or nullifies one or more actions of another muscle.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "study", q: "List the four critical functions of the skeletal system.", modelAnswer: "Protect vital organs; support the body; enable movement at joints (leverage); produce blood cells.", explanation: "Study card — not graded." },
    { kind: "study", q: "Differentiate concentric and eccentric contractions with an example of each.", modelAnswer: "Concentric shortens under tension (lifting a dumbbell); eccentric lengthens under tension (lowering it slowly).", explanation: "Study card — not graded." },
    { kind: "study", q: "Explain the roles of agonist, antagonist, stabilizer, and neutralizer.", modelAnswer: "Agonist causes the movement; antagonist opposes it (relaxes); stabilizer holds a part firm; neutralizer cancels unwanted actions.", explanation: "Study card — not graded." },
    { kind: "study", q: "List the 11 effects of exercise on muscles as stated in the PDF.", modelAnswer: "Richer blood flow; greater oxygen use; faster, more frequent contractions; heat production; carbon-dioxide and lactic-acid buildup; soreness; fatigue; cramps; strain — hence warm up and recover.", explanation: "Study card — not graded." },
    { kind: "study", q: "Name five muscles and their primary functions.", modelAnswer: "Deltoid (arm in all directions); biceps (flex the forearm); triceps (extend the forearm); quadriceps (flex hip, extend knee); hamstrings (extend hip, flex knee).", explanation: "Study card — not graded." },
  ],
  "UNIT III": [
    { kind: "mc", q: "Physical fitness depends on several key factors. Which is NOT one of them?", options: ["Access to reliable medical and dental care", "Maintaining a balanced and nutritious diet", "Sufficient periods of rest and relaxation", "Irregular exercise"], correctIndex: 3, explanation: "The correct answer is Irregular exercise." },
    { kind: "mc", q: "Physical fitness is defined as the ability to perform daily tasks efficiently without undue fatigue but with:", options: ["extra “reserve” in case of emergency", "maximum muscle size", "minimal rest", "high body fat"], correctIndex: 0, explanation: "The correct answer is extra “reserve” in case of emergency." },
    { kind: "mc", q: "Which of the following activities meet emergency demands?", options: ["watching TV or movie", "performing social obligations", "going to school on time", "playing sports"], correctIndex: 1, explanation: "The correct answer is performing social obligations." },
    { kind: "mc", q: "The amount of time left after the daily routine activities have been accomplished is called:", options: ["leisure time", "recreation", "emergency time", "work time"], correctIndex: 0, explanation: "The correct answer is leisure time." },
    { kind: "mc", q: "Any activity participated in during leisure time on a voluntary basis because it provides immediate satisfaction is called:", options: ["recreation", "work", "obligation", "emergency"], correctIndex: 0, explanation: "The correct answer is recreation." },
    { kind: "mc", q: "Organic Vigor refers to the soundness of the:", options: ["heart and lungs", "muscles and bones", "brain and nerves", "skin and hair"], correctIndex: 0, explanation: "The correct answer is heart and lungs." },
    { kind: "mc", q: "The ability to sustain long-continued contractions where a number of muscle groups are used is:", options: ["endurance", "strength", "power", "flexibility"], correctIndex: 0, explanation: "The correct answer is endurance." },
    { kind: "mc", q: "The capacity to sustain the application of force without yielding or breaking is:", options: ["endurance", "strength", "power", "agility"], correctIndex: 1, explanation: "The correct answer is strength." },
    { kind: "mc", q: "The ability of the muscle to release maximum force in the shortest period of time is:", options: ["endurance", "strength", "power", "flexibility"], correctIndex: 2, explanation: "The correct answer is power." },
    { kind: "mc", q: "A quality of plasticity that gives the ability to do a wide range of movements is:", options: ["flexibility", "agility", "balance", "speed"], correctIndex: 0, explanation: "The correct answer is flexibility." },
    { kind: "mc", q: "The ability of an individual to change direction or position in space with quickness and lightness of movement is:", options: ["flexibility", "agility", "balance", "speed"], correctIndex: 1, explanation: "The correct answer is agility." },
    { kind: "mc", q: "The ability to control organic equipment neuromuscular, a state of equilibrium, is:", options: ["flexibility", "agility", "balance", "speed"], correctIndex: 2, explanation: "The correct answer is balance." },
    { kind: "mc", q: "The ability to make successive movements of the same kind in the shortest period is:", options: ["flexibility", "agility", "balance", "speed"], correctIndex: 3, explanation: "The correct answer is speed." },
    { kind: "mc", q: "Which of the following is a health-related component of physical fitness?", options: ["Agility", "Balance", "Cardiovascular endurance", "Speed"], correctIndex: 2, explanation: "The correct answer is Cardiovascular endurance." },
    { kind: "mc", q: "All of the following are health-related components of physical fitness EXCEPT:", options: ["cardio-vascular endurance", "flexibility", "muscular strength and endurance", "agility"], correctIndex: 3, explanation: "The correct answer is agility." },
    { kind: "mc", q: "The ability of the muscle to exert maximum effort in brief duration is:", options: ["muscular strength", "muscular endurance", "cardiovascular endurance", "flexibility"], correctIndex: 0, explanation: "The correct answer is muscular strength." },
    { kind: "mc", q: "The ability of the muscle to endure a submaximal effort for a prolonged period is:", options: ["muscular strength", "muscular endurance", "cardiovascular endurance", "flexibility"], correctIndex: 1, explanation: "The correct answer is muscular endurance." },
    { kind: "mc", q: "The ability of the heart, blood vessels, and lungs to adapt to physical exertion for a prolonged duration is:", options: ["muscular strength", "muscular endurance", "cardiovascular endurance", "flexibility"], correctIndex: 2, explanation: "The correct answer is cardiovascular endurance." },
    { kind: "mc", q: "The proportion of lean body mass to fat body mass is:", options: ["body composition", "flexibility", "muscular endurance", "cardiovascular endurance"], correctIndex: 0, explanation: "The correct answer is body composition." },
    { kind: "mc", q: "Isotonic contractions in which muscles shorten during exercise are:", options: ["Concentric contractions", "Eccentric contractions", "Isometric contractions", "Isokinetic contractions"], correctIndex: 0, explanation: "The correct answer is Concentric contractions." },
    { kind: "mc", q: "Isotonic contractions in which muscles lengthen during exercise are:", options: ["Concentric contractions", "Eccentric contractions", "Isometric contractions", "Isokinetic contractions"], correctIndex: 1, explanation: "The correct answer is Eccentric contractions." },
    { kind: "mc", q: "Contractions in which the muscles are contracted against an immovable resistance, with no observed movement, are:", options: ["Isotonic contractions", "Isometric contractions", "Isokinetic contractions", "Eccentric contractions"], correctIndex: 1, explanation: "The correct answer is Isometric contractions." },
    { kind: "mc", q: "Contractions in which the muscles are exposed to fixed machines with variable degrees of resistance are:", options: ["Isotonic contractions", "Isometric contractions", "Isokinetic contractions", "Eccentric contractions"], correctIndex: 2, explanation: "The correct answer is Isokinetic contractions." },
    { kind: "mc", q: "Strength training increases muscle strength by what percentage within 6–8 weeks?", options: ["5–10%", "10–25%", "25–40%", "50%"], correctIndex: 1, explanation: "The correct answer is 10–25%." },
    { kind: "mc", q: "The increase in muscle size from strength training is called:", options: ["muscle atrophy", "muscle hypertrophy", "muscle dystrophy", "muscle fatigue"], correctIndex: 1, explanation: "The correct answer is muscle hypertrophy." },
    { kind: "mc", q: "Which variable of cardiovascular endurance refers to how stressful the exercise is?", options: ["Intensity", "Duration", "Frequency", "Mode"], correctIndex: 0, explanation: "The correct answer is Intensity." },
    { kind: "mc", q: "Which variable refers to how long the exercise will be performed?", options: ["Intensity", "Duration", "Frequency", "Mode"], correctIndex: 1, explanation: "The correct answer is Duration." },
    { kind: "mc", q: "Which variable refers to the number of times the individual will exercise each week?", options: ["Intensity", "Duration", "Frequency", "Mode"], correctIndex: 2, explanation: "The correct answer is Frequency." },
    { kind: "mc", q: "The least effective exercise for promoting cardiovascular endurance is:", options: ["bicycling", "weight-lifting", "walking", "swimming"], correctIndex: 1, explanation: "The correct answer is weight-lifting." },
    { kind: "mc", q: "The component of physical fitness most conducive to longevity is:", options: ["muscular strength", "cardiovascular endurance", "muscular endurance", "body composition"], correctIndex: 1, explanation: "The correct answer is cardiovascular endurance." },
    { kind: "mc", q: "All of the following are skill-related components of physical fitness EXCEPT:", options: ["Agility", "Coordination", "Balance", "Flexibility"], correctIndex: 3, explanation: "The correct answer is Flexibility." },
    { kind: "mc", q: "The ability of the individual to maintain equilibrium about changes in body position is:", options: ["Coordination", "Balance", "Power", "Speed"], correctIndex: 1, explanation: "The correct answer is Balance." },
    { kind: "mc", q: "Which of the following is NOT a benefit of physical fitness?", options: ["general health", "Relaxation", "Aging", "Posture"], correctIndex: 2, explanation: "The correct answer is Aging." },
    { kind: "mc", q: "Which benefit of physical fitness is achieved when one values continued participation in regular, proper amounts and severity of exercise as one grows older?", options: ["retards aging process", "improves personality and social skills", "relieves low back pain", "helps mental fitness"], correctIndex: 0, explanation: "The correct answer is retards aging process." },
    { kind: "mc", q: "When one participates actively in games and sports, one achieves which benefit of physical fitness?", options: ["improves personality and social skills", "Relaxation", "relieves low back pain", "Vitality"], correctIndex: 0, explanation: "The correct answer is improves personality and social skills." },
    { kind: "match", q: "Vitality", options: ["A. Fit muscles use less energy to perform the same task", "B. Development of anti-gravity muscles maintaining good abdominal wall and arm/shoulder girdle", "C. Exercises that strengthen the back and abdominal muscles relieve this", "D. Continued participation in regular exercises of proper amount and severity"], correctIndex: 0, explanation: "Correct match: A. Fit muscles use less energy to perform the same task." },
    { kind: "match", q: "Posture", options: ["B. Development of anti-gravity muscles maintaining good abdominal wall and arm/shoulder girdle", "C. Exercises that strengthen the back and abdominal muscles relieve this", "D. Continued participation in regular exercises of proper amount and severity", "E. Sedentary living habits cause the body to operate ineffectively even at near maximum effort"], correctIndex: 0, explanation: "Correct match: B. Development of anti-gravity muscles maintaining good abdominal wall and arm/shoulder girdle." },
    { kind: "match", q: "Relieves Lowback Pain", options: ["C. Exercises that strengthen the back and abdominal muscles relieve this", "D. Continued participation in regular exercises of proper amount and severity", "E. Sedentary living habits cause the body to operate ineffectively even at near maximum effort", "F. Smooth, efficient coordination of the muscular system"], correctIndex: 0, explanation: "Correct match: C. Exercises that strengthen the back and abdominal muscles relieve this." },
    { kind: "match", q: "Retards Aging Process", options: ["D. Continued participation in regular exercises of proper amount and severity", "E. Sedentary living habits cause the body to operate ineffectively even at near maximum effort", "F. Smooth, efficient coordination of the muscular system", "G. Physical outlets for accumulated emotional and muscular tensions"], correctIndex: 0, explanation: "Correct match: D. Continued participation in regular exercises of proper amount and severity." },
    { kind: "match", q: "Physical Fitness and Ability to Meet Emergencies", options: ["E. Sedentary living habits cause the body to operate ineffectively even at near maximum effort", "F. Smooth, efficient coordination of the muscular system", "G. Physical outlets for accumulated emotional and muscular tensions", "H. Participation in games and sports aids in this"], correctIndex: 0, explanation: "Correct match: E. Sedentary living habits cause the body to operate ineffectively even at near maximum effort." },
    { kind: "match", q: "Neuromuscular Skill", options: ["F. Smooth, efficient coordination of the muscular system", "G. Physical outlets for accumulated emotional and muscular tensions", "H. Participation in games and sports aids in this", "I. Aids natural mental processes to function with increased efficiency"], correctIndex: 0, explanation: "Correct match: F. Smooth, efficient coordination of the muscular system." },
    { kind: "match", q: "Relaxation", options: ["G. Physical outlets for accumulated emotional and muscular tensions", "H. Participation in games and sports aids in this", "I. Aids natural mental processes to function with increased efficiency", "J. High degree of general resistance, avoiding minor illness"], correctIndex: 0, explanation: "Correct match: G. Physical outlets for accumulated emotional and muscular tensions." },
    { kind: "match", q: "Improvement of Personality and Social Skills", options: ["H. Participation in games and sports aids in this", "I. Aids natural mental processes to function with increased efficiency", "J. High degree of general resistance, avoiding minor illness", "A. Fit muscles use less energy to perform the same task"], correctIndex: 0, explanation: "Correct match: H. Participation in games and sports aids in this." },
    { kind: "match", q: "Mental Fitness", options: ["I. Aids natural mental processes to function with increased efficiency", "J. High degree of general resistance, avoiding minor illness", "A. Fit muscles use less energy to perform the same task", "B. Development of anti-gravity muscles maintaining good abdominal wall and arm/shoulder girdle"], correctIndex: 0, explanation: "Correct match: I. Aids natural mental processes to function with increased efficiency." },
    { kind: "match", q: "General Growth", options: ["J. High degree of general resistance, avoiding minor illness", "A. Fit muscles use less energy to perform the same task", "B. Development of anti-gravity muscles maintaining good abdominal wall and arm/shoulder girdle", "C. Exercises that strengthen the back and abdominal muscles relieve this"], correctIndex: 0, explanation: "Correct match: J. High degree of general resistance, avoiding minor illness." },
    { kind: "match", q: "1", options: ["A. Prolonged brisk walking", "B. Playing football", "C. Stationary bicycling", "D. Hiking"], correctIndex: 0, explanation: "Correct match: A. Prolonged brisk walking." },
    { kind: "match", q: "2", options: ["B. Playing football", "C. Stationary bicycling", "D. Hiking", "E. Playing basketball"], correctIndex: 0, explanation: "Correct match: B. Playing football." },
    { kind: "match", q: "3", options: ["C. Stationary bicycling", "D. Hiking", "E. Playing basketball", "F. Continuous swimming"], correctIndex: 0, explanation: "Correct match: C. Stationary bicycling." },
    { kind: "match", q: "4", options: ["D. Hiking", "E. Playing basketball", "F. Continuous swimming", "G. Rowing"], correctIndex: 0, explanation: "Correct match: D. Hiking." },
    { kind: "match", q: "5", options: ["E. Playing basketball", "F. Continuous swimming", "G. Rowing", "H. Aerobic dancing"], correctIndex: 0, explanation: "Correct match: E. Playing basketball." },
    { kind: "match", q: "6", options: ["F. Continuous swimming", "G. Rowing", "H. Aerobic dancing", "I. Prolonged jogging"], correctIndex: 0, explanation: "Correct match: F. Continuous swimming." },
    { kind: "match", q: "7", options: ["G. Rowing", "H. Aerobic dancing", "I. Prolonged jogging", "J. Prolonged skipping rope"], correctIndex: 0, explanation: "Correct match: G. Rowing." },
    { kind: "match", q: "8", options: ["H. Aerobic dancing", "I. Prolonged jogging", "J. Prolonged skipping rope", "A. Prolonged brisk walking"], correctIndex: 0, explanation: "Correct match: H. Aerobic dancing." },
    { kind: "match", q: "9", options: ["I. Prolonged jogging", "J. Prolonged skipping rope", "A. Prolonged brisk walking", "B. Playing football"], correctIndex: 0, explanation: "Correct match: I. Prolonged jogging." },
    { kind: "match", q: "10", options: ["J. Prolonged skipping rope", "A. Prolonged brisk walking", "B. Playing football", "C. Stationary bicycling"], correctIndex: 0, explanation: "Correct match: J. Prolonged skipping rope." },
    { kind: "type", q: "The body type characterized as lean and small with greater surface area to mass ratio.", accepted: ["ECTOMORPHIC", "ECTOMORPH"], answer: "Ectomorphic", explanation: "Correct answer: Ectomorphic." },
    { kind: "type", q: "The body type with a relative predominance of muscles and large, heavy bones.", accepted: ["MESOMORPHIC", "MESOMORPH"], answer: "Mesomorphic", explanation: "Correct answer: Mesomorphic." },
    { kind: "type", q: "The body type with a relative predominance of soft roundness and large digestive viscera.", accepted: ["ENDOMORPHIC", "ENDOMORPH"], answer: "Endomorphic", explanation: "Correct answer: Endomorphic." },
    { kind: "type", q: "The developer of somatotyping during the 1940s and 1950s.", accepted: ["SHELDON", "WILLIAM SHELDON", "WILLIAM HERBERT SHELDON"], answer: "Sheldon", explanation: "Correct answer: Sheldon." },
    { kind: "type", q: "The principle stating that fitness gains diminish when exercise is discontinued.", accepted: ["REVERSIBILITY", "PRINCIPLE OF REVERSIBILITY"], answer: "Principle of Reversibility", explanation: "Correct answer: Principle of Reversibility." },
    { kind: "type", q: "The principle recognizing that individuals respond differently to exercise stimuli.", accepted: ["INDIVIDUAL VARIATION", "PRINCIPLE OF INDIVIDUAL VARIATION", "INDIVIDUAL DIFFERENCES", "PRINCIPLE OF INDIVIDUAL DIFFERENCES"], answer: "Principle of Individual Variation", explanation: "Correct answer: Principle of Individual Variation." },
    { kind: "type", q: "The principle stating that adequate rest and recovery periods are essential.", accepted: ["RECOVERY", "PRINCIPLE OF RECOVERY", "REST AND RECOVERY", "PRINCIPLE OF REST AND RECOVERY"], answer: "Principle of Recovery", explanation: "Correct answer: Principle of Recovery." },
    { kind: "type", q: "The ability to maintain equilibrium in a fixed position.", accepted: ["STATIC BALANCE", "STATIC"], answer: "Static balance", explanation: "Correct answer: Static balance." },
    { kind: "type", q: "The ability to maintain equilibrium while the body is in motion.", accepted: ["DYNAMIC BALANCE", "DYNAMIC"], answer: "Dynamic balance", explanation: "Correct answer: Dynamic balance." },
    { kind: "type", q: "The number of measurable parameters of physical fitness.", accepted: ["4", "FOUR"], answer: "4", explanation: "Correct answer: 4." },
    { kind: "type", q: "The late president who said, “Physical Fitness is not only one of the most important keys to a healthy body; it is the basis of dynamic, creative, and intellectual activity.”", accepted: ["KENNEDY", "JOHN F KENNEDY", "JOHN FITZGERALD KENNEDY", "JFK"], answer: "Kennedy", explanation: "Correct answer: Kennedy." },
    { kind: "type", q: "The number of ways to prevent injury during physical exercise listed in the PDF.", accepted: ["10", "TEN"], answer: "10", explanation: "Correct answer: 10." },
    { kind: "type", q: "The test conducted twice a year where the initial test is administered at the beginning and end of the year.", accepted: ["PHYSICAL FITNESS TEST", "PFT", "FITNESS TEST"], answer: "Physical Fitness Test", explanation: "Correct answer: Physical Fitness Test." },
    { kind: "type", q: "The number of basic movements involved in flexibility.", accepted: ["4", "FOUR"], answer: "4", explanation: "Correct answer: 4." },
    { kind: "type", q: "The number of factors that influence flexibility.", accepted: ["3", "THREE"], answer: "3", explanation: "Correct answer: 3." },
    { kind: "tf", q: "Physical fitness is dynamic rather than static; it diminishes when individuals stop their regular exercise routines.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "tf", q: "Flexibility is influenced by the structure of the joints and the extensibility of ligaments, tendons, and muscle tissue.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "tf", q: "An ectomorphic body type is characterized by a relative predominance of soft roundness and large digestive viscera.", options: ["True", "False"], correctIndex: 1, explanation: "The correct answer is False." },
    { kind: "tf", q: "The principle of overload states that to improve fitness, the body must be stressed beyond its normal levels.", options: ["True", "False"], correctIndex: 0, explanation: "The correct answer is True." },
    { kind: "tf", q: "Muscular endurance is the ability of the muscle to exert maximum effort in a brief duration.", options: ["True", "False"], correctIndex: 1, explanation: "The correct answer is False." },
    { kind: "study", q: "List the three important aspects an individual must meet to be considered physically fit.", modelAnswer: "Perform daily tasks without undue fatigue; enjoy leisure and recreation; meet emergency demands.", explanation: "Study card — not graded." },
    { kind: "study", q: "List the five health-related components of physical fitness.", modelAnswer: "Muscular strength, muscular endurance, cardiovascular endurance, flexibility, body composition.", explanation: "Study card — not graded." },
    { kind: "study", q: "List the five performance-related components of physical fitness.", modelAnswer: "Agility, balance, coordination, power, speed.", explanation: "Study card — not graded." },
    { kind: "study", q: "List the eight physiological benefits of cardiovascular training.", modelAnswer: "Lower resting heart rate; faster recovery; more blood volume; more red cells for oxygen delivery; stronger heart muscle; bigger stroke volume; longer rest between beats; higher aerobic capacity and lower heart-disease risk.", explanation: "Study card — not graded." },
    { kind: "study", q: "List the ten ways to prevent injury during physical exercise.", modelAnswer: "Warm up; progress gradually; use proper technique; wear proper gear; hydrate and nourish; listen to your body; take rest days; cross-train; cool down; seek professional guidance.", explanation: "Study card — not graded." },
  ]
};

function duoKicker(kind) {
  if (kind === 'mc') return 'PICK THE ANSWER';
  if (kind === 'tf') return 'TRUE OR FALSE';
  if (kind === 'match') return 'MATCH IT';
  if (kind === 'type') return 'TYPE THE ANSWER';
  return 'STUDY CARD';
}

function duoPrompt(kind) {
  if (kind === 'study') return 'Read this, then continue';
  if (kind === 'type') return 'Type the correct term';
  if (kind === 'tf') return 'Is this true or false?';
  if (kind === 'match') return 'Choose the correct match';
  return 'Choose the correct answer';
}

function escapeHtml(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function duoSlideHTML(slideData, index, total) {
  const isStudy = slideData.questionType === 'duo-study';
  const isType = slideData.questionType === 'duo-type';
  const pct = Math.round(((index + 1) / total) * 100);
  const options = (slideData.options || []).map((option, optionIndex) => `
    <button class="quiz-option duo-option" data-option="${optionIndex}" type="button">
      <span class="duo-option-key">${String.fromCharCode(65 + optionIndex)}</span>
      <span>${escapeHtml(option)}</span>
    </button>`).join('');
  return `
    <div class="duo-top">
      <button class="duo-close" type="button" data-duo-close aria-label="Exit lesson">✕</button>
      <div class="duo-progress" aria-label="Lesson progress"><div class="duo-progress-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="duo-body">
      <div class="duo-kicker">${duoKicker(slideData.duoKind)} · ${escapeHtml(slideData.unit)} · ${index + 1}/${total}</div>
      <h2 class="duo-prompt">${duoPrompt(slideData.duoKind)}</h2>
      <div class="duo-row">
        <div class="duo-mascot" aria-hidden="true">🏃</div>
        <div class="duo-bubble">${escapeHtml(slideData.question)}</div>
      </div>
      ${isStudy
        ? `<div class="duo-study-answer"><strong>Model answer:</strong> ${escapeHtml(slideData.answer || '')}</div>`
        : isType
          ? `<div class="duo-typebox">
               <label class="duo-type-label" for="duo-type-${index}">Type your answer</label>
               <input id="duo-type-${index}" class="quiz-answer duo-type-input" type="text" autocomplete="off"
                 placeholder="TYPE YOUR ANSWER" data-duo-type-input>
             </div>`
          : `<div class="quiz-options duo-options">${options}</div>`}
    </div>
    <div class="duo-feedback" hidden>
      <div class="duo-feedback-title">Correct!</div>
      <div class="duo-feedback-sub"></div>
    </div>
    <div class="duo-bottom">
      <button class="duo-check" type="button" ${isStudy ? '' : 'disabled'}>${isStudy ? 'GOT IT · CONTINUE' : 'CHECK'}</button>
    </div>`;
}

function createCheckpointSlides(lessonPages) {
  const checkpointSlides = [];
  const unitNames = [...new Set(lessonPages.map((slide) => slide.unit))]
    .filter((unit) => /^UNIT\s+[IVX]+$/.test(unit));

  function shuffleQuestions(questions) {
    const shuffled = [...questions];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }

    for (let index = 1; index < shuffled.length; index += 1) {
      const previousQuestion = shuffled[index - 1].question.trim().toLowerCase();
      if (shuffled[index].question.trim().toLowerCase() !== previousQuestion) continue;

      const alternativeIndex = shuffled.findIndex((question, candidateIndex) =>
        candidateIndex > index && question.question.trim().toLowerCase() !== previousQuestion
      );

      if (alternativeIndex >= 0) {
        [shuffled[index], shuffled[alternativeIndex]] = [shuffled[alternativeIndex], shuffled[index]];
      }
    }

    return shuffled;
  }

  unitNames.forEach((unit) => {
    if (unit === 'CLOSING') return;

    const unitPages = lessonPages.filter((slide) => slide.unit === unit);
    const identificationBank = identificationQuestions[unit] || [];
    const multipleChoiceBank = multipleChoiceQuestions[unit] || [];
    const combinedBank = [];

    for (let i = 0; i < Math.max(identificationBank.length, multipleChoiceBank.length); i += 1) {
      if (i < identificationBank.length) {
        combinedBank.push({
          type: 'identification',
          question: identificationBank[i][0],
          answer: identificationBank[i][1],
          explanation: `The answer is ${identificationBank[i][1]}.`
        });
      }
      if (i < multipleChoiceBank.length) {
        const [prompt, options, correctIndex] = multipleChoiceBank[i];
        combinedBank.push({
          type: 'multiple-choice',
          question: prompt,
          options,
          correctIndex,
          answer: options[correctIndex],
          explanation: `The correct answer is ${options[correctIndex]}.`
        });
      }
    }

    const mixedBank = shuffleQuestions(combinedBank);
    const questionCount = mixedBank.length || 1;

    mixedBank.forEach((questionItem, questionIndex) => {
      const lessonPage = unitPages[questionIndex % unitPages.length] || unitPages[0];
      checkpointSlides.push({
        type: 'quiz',
        questionType: questionItem.type,
        unit,
        title: `${unit} CHECKPOINT`,
        text: `Question ${questionIndex + 1} of ${questionCount}`,
        question: questionItem.question,
        options: questionItem.options || [questionItem.answer],
        correctIndex: questionItem.correctIndex ?? 0,
        answer: questionItem.answer,
        explanation: questionItem.explanation || `This was covered in ${lessonPage.title} as part of ${unit}.`
      });
    });
  });

  return checkpointSlides;
}

const lessonSlides = paginateSlides(slidesData);
const slideSequence = [];
const lessonUnits = [...new Set(lessonSlides.map((slide) => slide.unit))];
const selectedUnit = { value: 'UNIT I' };

lessonUnits.forEach((unit) => {
  const unitSlides = lessonSlides.filter((slide) => slide.unit === unit);
  slideSequence.push(...unitSlides);
  slideSequence.push(...createCheckpointSlides(unitSlides));
});

let activeSlide = 0;
let isTransitioning = false;
let isLongQuizMode = false;
let slides = [];
let quizSlideIndexes = [];
let mistakeCount = 0;

function resetQuizDeckState() {
  isTransitioning = false;
  activeSlide = 0;
  quizSlideIndexes = [];
  slides = [];
}

const imageThemes = [
  {
    keywords: ['skeletal', 'skeleton', 'bone', 'bones', 'joint', 'joints', 'ligament', 'cartilage', 'axial', 'appendicular'],
    tags: 'skeleton,anatomy,bones',
    images: [
      'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  {
    keywords: ['historical', 'history', 'legal bases', 'international', 'constitutional'],
    tags: 'history,education,school',
    images: [
      'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  {
    keywords: ['dance', 'cultural', 'aesthetic', 'unity'],
    tags: 'dance,physical,education',
    images: [
      'https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  {
    keywords: ['sports', 'sport', 'athletic', 'teamwork', 'leadership', 'games'],
    tags: 'sports,team,athletics',
    images: [
      'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  {
    keywords: ['movement', 'motor skills', 'competency', 'coordination', 'education through movement'],
    tags: 'movement,exercise,fitness',
    images: [
      'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  {
    keywords: ['fitness', 'exercise', 'health', 'physical development', 'recommendations', 'inactivity'],
    tags: 'fitness,exercise,health',
    images: [
      'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  {
    keywords: ['curriculum', 'objectives', 'purpose', 'directions', 'general objectives'],
    tags: 'students,learning,education',
    images: [
      'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  }
];

const defaultImages = [
  'https://images.pexels.com/photos/3768004/pexels-photo-3768004.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3768007/pexels-photo-3768007.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3768010/pexels-photo-3768010.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3768019/pexels-photo-3768019.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3768020/pexels-photo-3768020.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3768021/pexels-photo-3768021.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3768022/pexels-photo-3768022.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3768023/pexels-photo-3768023.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3768024/pexels-photo-3768024.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3768025/pexels-photo-3768025.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3768026/pexels-photo-3768026.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3768031/pexels-photo-3768031.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3768039/pexels-photo-3768039.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3768043/pexels-photo-3768043.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3768047/pexels-photo-3768047.jpeg?auto=compress&cs=tinysrgb&w=1200'
];

const svgImages = [
  './assets/fitness-1.svg',
  './assets/fitness-2.svg',
  './assets/fitness-3.svg',
  './assets/fitness-4.svg',
  './assets/fitness-5.svg'
];

const usedImageUrls = new Set();

function getSlideImages(slideData) {
  const searchableText = `${slideData.title} ${slideData.text} ${(slideData.bullets || []).join(' ')}`.toLowerCase();
  const theme = imageThemes.find(({ keywords }) => keywords.some((keyword) => searchableText.includes(keyword)));
  const candidates = [...(theme ? theme.images : []), ...defaultImages, ...svgImages];
  const available = candidates.filter((imageUrl) => !usedImageUrls.has(imageUrl));
  const images = available.slice(0, 2);

  images.forEach((imageUrl) => usedImageUrls.add(imageUrl));
  return images.length === 2 ? images : [images[0] || defaultImages[0], images[1] || defaultImages[1]];
}

function buildSlides(deck = slideSequence) {
  slidesContainer.innerHTML = '';

  deck.forEach((slideData, index) => {
    const section = document.createElement('section');
    const bulletLength = slideData.bullets ? slideData.bullets.join(' ').length : 0;
    const density = bulletLength > 700 ? ' is-very-dense' : bulletLength > 480 ? ' is-dense' : '';
    const quizClass = slideData.type === 'quiz' ? ' quiz-slide' : '';
    section.className = `slide${index === 0 ? ' is-active' : ''}${density}${quizClass}`;
    section.dataset.slide = String(index);
    section.dataset.answered = slideData.type === 'quiz' ? 'false' : 'true';
    if (slideData.type === 'quiz') section.dataset.correctIndex = String(slideData.correctIndex);
    if (slideData.type === 'quiz') section.dataset.answer = slideData.answer || '';
    if (slideData.type === 'quiz') section.dataset.explanation = slideData.explanation || '';
    section.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');

    const accentColors = ['#f5d5b9', '#c9efff', '#dff7d7', '#f9e7f7', '#dffcf6', '#fff3d8', '#ffe4ef', '#e5f2ff', '#f9ead6'];
    const accent = accentColors[index % accentColors.length];
    if (slideData.type === 'quiz') {
      section.innerHTML = `
        <div class="headline-panel">
          <div class="headline-copy">
            <div class="unit-tag">${slideData.unit}</div>
            <h1>${slideData.title}</h1>
            <p>${slideData.text}</p>
          </div>
        </div>

        <div class="quiz-panel">
          <div class="quiz-copy">
            <p class="quiz-question">${slideData.question}</p>
            ${slideData.questionType === 'identification'
              ? `
                <label class="quiz-identification-label" for="answer-${index}">Type your answer</label>
                <div class="quiz-identification">
                  <input id="answer-${index}" class="quiz-answer" type="text" autocomplete="off"
                    placeholder="TYPE YOUR ANSWER IN CAPITAL LETTERS">
                  <button class="quiz-submit" type="button">CHECK ANSWER</button>
                </div>
              `
              : `
                <div class="quiz-options">
                  ${slideData.options.map((option, optionIndex) => `
                    <button class="quiz-option" data-option="${optionIndex}">${option}</button>
                  `).join('')}
                </div>
              `}
            <p class="quiz-feedback" aria-live="polite"></p>
            ${slideData.questionType === 'identification'
              ? '<p class="quiz-answer-reveal" aria-live="polite"></p>'
              : ''}
          </div>
        </div>
      `;
      slidesContainer.appendChild(section);
      return;
    }

    section.innerHTML = `
      <div class="headline-panel">
        <div class="headline-copy">
          <div class="unit-tag">${slideData.unit}</div>
          <h1>${slideData.title}</h1>
          <p>${slideData.text}</p>
        </div>
      </div>

      <div class="content-panel">
        <div class="left-copy">
          <h2>Slide ${index + 1}</h2>
          <ul>
            ${slideData.bullets.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>

      </div>
    `;

    slidesContainer.appendChild(section);
  });

  slides = Array.from(document.querySelectorAll('.slide'));
  quizSlideIndexes = slides
    .map((slide, index) => slide.classList.contains('quiz-slide') ? index : -1)
    .filter((index) => index >= 0);
}

function updateLessonChrome() {
  const quizPosition = quizSlideIndexes.indexOf(activeSlide);
  const displayPosition = isLongQuizMode && quizPosition >= 0 ? quizPosition + 1 : activeSlide + 1;
  const displayTotal = isLongQuizMode ? quizSlideIndexes.length : slides.length;
  const progress = displayTotal > 0 ? (displayPosition / displayTotal) * 100 : 0;
  const activeSlideEl = slides[activeSlide];
  const activeQuiz = activeSlideEl?.classList.contains('quiz-slide');
  const isDuo = activeSlideEl?.classList.contains('duo-slide');
  const unansweredQuiz = activeQuiz && activeSlideEl.dataset.answered !== 'true';
  const isLastQuiz = isLongQuizMode && quizPosition === quizSlideIndexes.length - 1;
  const isLastSlide = activeSlide === slides.length - 1;

  progressFill.style.width = `${progress}%`;
  backButton.disabled = isLongQuizMode
    ? quizPosition <= 0
    : activeSlide === 0;
  continueButton.textContent = isLastQuiz || isLastSlide
    ? 'FINISH ✓'
    : unansweredQuiz
      ? 'NEXT ▶'
      : 'CONTINUE ▶';
  // Duolingo mode: force answering inside the card (CHECK/CONTINUE) before global nav.
  continueButton.disabled = isDuo && unansweredQuiz;
  clipCurrent.textContent = String(displayPosition);
  clipTotal.textContent = String(displayTotal);
}

function showSlide(nextSlide, direction) {
  let targetSlide = nextSlide;

  if (isLongQuizMode) {
    const quizPosition = quizSlideIndexes.indexOf(activeSlide);
    const targetPosition = quizPosition + (direction === 'forward' ? 1 : -1);
    targetSlide = quizSlideIndexes[targetPosition];
  }

  if (isTransitioning || typeof targetSlide !== 'number' || targetSlide < 0 || targetSlide >= slides.length || targetSlide === activeSlide) return;

  isTransitioning = true;
  slides[activeSlide].classList.remove('is-active');
  slides[activeSlide].setAttribute('aria-hidden', 'true');

  const incoming = slides[targetSlide];
  incoming.classList.remove('is-forward', 'is-back');
  void incoming.offsetWidth;
  incoming.classList.add('is-active', direction === 'forward' ? 'is-forward' : 'is-back');
  incoming.setAttribute('aria-hidden', 'false');
  activeSlide = targetSlide;
  updateLessonChrome();

  window.setTimeout(() => {
    incoming.classList.remove('is-forward', 'is-back');
    isTransitioning = false;
  }, 380);
}

buildSlides();

function shuffleOptions(options, correctIndex) {
  const order = options.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return {
    options: order.map((i) => options[i]),
    correctIndex: order.indexOf(correctIndex)
  };
}

function getUnitQuizSlides(unitName = selectedUnit.value) {
  const bank = hardMockBanks[unitName] || [];
  return bank.map((item) => {
    const isStudy = item.kind === 'study';
    const isType = item.kind === 'type';
    let options = item.options || [];
    let correctIndex = item.correctIndex ?? 0;
    // Shuffle answer order every run so positions are unpredictable.
    if (!isStudy && !isType && options.length > 1) {
      const shuffled = shuffleOptions(options, correctIndex);
      options = shuffled.options;
      correctIndex = shuffled.correctIndex;
    }
    return {
      type: 'quiz',
      questionType: isStudy ? 'duo-study' : (isType ? 'duo-type' : 'duo-choice'),
      duoKind: item.kind,
      unit: unitName,
      title: `${unitName} · MOCK TEST`,
      text: isStudy ? 'Study card — not graded' : 'Duolingo mode',
      question: item.q,
      options,
      correctIndex,
      accepted: item.accepted || [],
      answer: isStudy ? (item.modelAnswer || '') : (isType ? (item.answer || '') : (options[correctIndex] || '')),
      explanation: item.explanation || ''
    };
  });
}

function buildDuoDeck(deckSlides) {
  slidesContainer.innerHTML = '';
  const total = deckSlides.length;
  deckSlides.forEach((slideData, index) => {
    const section = document.createElement('section');
    section.className = `slide${index === 0 ? ' is-active' : ''} quiz-slide duo-slide`;
    section.dataset.slide = String(index);
    section.dataset.answered = 'false';
    section.dataset.correctIndex = String(slideData.correctIndex ?? 0);
    section.dataset.answer = slideData.answer || '';
    section.dataset.explanation = slideData.explanation || '';
    section.dataset.duoKind = slideData.duoKind || 'mc';
    try {
      section.dataset.accept = JSON.stringify(slideData.accepted && slideData.accepted.length
        ? slideData.accepted
        : (slideData.answer ? [String(slideData.answer).toUpperCase()] : []));
    } catch (err) {
      section.dataset.accept = '[]';
    }
    section.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
    section.innerHTML = duoSlideHTML(slideData, index, total);
    slidesContainer.appendChild(section);
  });

  slides = Array.from(document.querySelectorAll('.slide'));
  quizSlideIndexes = slides.map((slide, index) => index);
  activeSlide = 0;
  slides.forEach((slide, index) => {
    slide.classList.toggle('is-active', index === 0);
    slide.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
  });
  lessonShell.classList.remove('is-home');
  lessonShell.classList.add('is-duo');
  lessonShell.scrollTop = 0;
  restoreWindow();
  isLongQuizMode = true;
  updateLessonChrome();
}

function showUnitQuiz(unitName = selectedUnit.value) {
  resetQuizResults();
  resetQuizDeckState();
  selectedUnit.value = unitName;
  const unitQuizSlides = getUnitQuizSlides(unitName);

  if (!unitQuizSlides.length) return;

  buildDuoDeck(unitQuizSlides);
}

function openLongQuiz() {
  resetQuizResults();
  resetQuizDeckState();
  const allQuizSlides = [];
  ['UNIT I', 'UNIT II', 'UNIT III'].forEach((unit) => {
    allQuizSlides.push(...getUnitQuizSlides(unit));
  });

  if (!allQuizSlides.length) return;

  buildDuoDeck(allQuizSlides);
  ['position', 'left', 'top', 'width', 'height', 'margin'].forEach((property) => {
    appWindow.style.removeProperty(property);
  });
  appWindow.classList.remove('is-fullscreen');
  updateLessonChrome();
}

function openQuiz() {
  showUnitQuiz(selectedUnit.value);
}

function openLessonApp() {
  resetQuizDeckState();
  const selectedUnitDeck = slideSequence.filter((slide) => slide.unit === selectedUnit.value);
  buildSlides(selectedUnitDeck);
  lessonShell.classList.remove('is-home');
  lessonShell.classList.remove('is-duo');
  lessonShell.scrollTop = 0;
  restoreWindow();
  isLongQuizMode = false;

  if (!window.matchMedia('(max-width: 700px)').matches) {
    ['position', 'left', 'top', 'width', 'height', 'margin'].forEach((property) => {
      appWindow.style.removeProperty(property);
    });
    appWindow.classList.add('is-fullscreen');
    maximizeWindow.setAttribute('aria-label', 'Restore window');
  }

  if (slides.length && activeSlide !== 0) {
    slides[activeSlide].classList.remove('is-active');
    slides[activeSlide].setAttribute('aria-hidden', 'true');
    slides[0].classList.add('is-active');
    slides[0].setAttribute('aria-hidden', 'false');
    activeSlide = 0;
  }

  updateLessonChrome();
}

function showQuizSummary() {
  if (!quizSummary) return;
  quizSummary.hidden = false;
  quizSummary.textContent = `Quiz complete — Mistakes: ${mistakeCount}`;
}

function resetQuizResults() {
  mistakeCount = 0;
  clearQuizSummary();
}

function clearQuizSummary() {
  if (!quizSummary) return;
  quizSummary.hidden = true;
  quizSummary.textContent = 'Quiz complete — Mistakes: 0';
}

function showAppHome(preserveQuizSummary = false) {
  resetQuizDeckState();
  if (!preserveQuizSummary) resetQuizResults();
  isLongQuizMode = false;
  lessonShell.classList.remove('is-duo');
  lessonShell.classList.add('is-home');
  lessonShell.scrollTop = 0;
}

function openCourseMap() {
  buildSlides();
  lessonShell.classList.remove('is-duo');
  const courseMapIndex = slideSequence.findIndex((slide) => slide.title === 'PHYSICAL EDUCATION CURRICULUM MAP');
  if (courseMapIndex < 0) return;
  lessonShell.classList.remove('is-home');
  lessonShell.scrollTop = 0;
  showSlide(courseMapIndex, 'forward');
}

slidesContainer.addEventListener('click', (event) => {
  const duoClose = event.target.closest('[data-duo-close]');
  if (duoClose) {
    showQuizSummary();
    showAppHome(true);
    return;
  }

  const duoCheck = event.target.closest('.duo-check');
  if (duoCheck) {
    const quizSlide = duoCheck.closest('.quiz-slide');
    if (!quizSlide) return;
    // Phase 2: already answered -> CONTINUE to next / finish.
    if (quizSlide.dataset.answered === 'true') {
      const isLastQuiz = isLongQuizMode && quizSlideIndexes.length > 0 && activeSlide === quizSlideIndexes[quizSlideIndexes.length - 1];
      if (isLastQuiz) {
        showQuizSummary();
        showAppHome(true);
        return;
      }
      showSlide(activeSlide + 1, 'forward');
      return;
    }
    const duoKind = quizSlide.dataset.duoKind || 'mc';
    // Study cards: no grading.
    if (duoKind === 'study') {
      quizSlide.dataset.answered = 'true';
      const feedback = quizSlide.querySelector('.duo-feedback');
      feedback.hidden = false;
      feedback.classList.remove('is-wrong');
      feedback.classList.add('is-correct');
      feedback.querySelector('.duo-feedback-title').textContent = 'Noted!';
      feedback.querySelector('.duo-feedback-sub').textContent = quizSlide.dataset.explanation || 'Study card complete.';
      duoCheck.textContent = 'CONTINUE';
      duoCheck.classList.add('is-continue');
      updateLessonChrome();
      return;
    }
    // Type-in cards: grade the typed answer (case-insensitive).
    if (duoKind === 'type') {
      const input = quizSlide.querySelector('[data-duo-type-input]');
      const norm = (input ? input.value : '').trim().replace(/\s+/g, ' ').toUpperCase();
      if (!norm) return;
      let accepted = [];
      try { accepted = JSON.parse(quizSlide.dataset.accept || '[]'); } catch (err) { accepted = []; }
      const isCorrect = accepted.indexOf(norm) >= 0;
      const options = Array.from(quizSlide.querySelectorAll('.quiz-option'));
      const feedback = quizSlide.querySelector('.duo-feedback');
      feedback.hidden = false;
      if (isCorrect) {
        feedback.classList.remove('is-wrong');
        feedback.classList.add('is-correct');
        feedback.querySelector('.duo-feedback-title').textContent = 'Correct!';
        feedback.querySelector('.duo-feedback-sub').textContent = quizSlide.dataset.explanation || 'Nice work.';
      } else {
        mistakeCount += 1;
        feedback.classList.remove('is-correct');
        feedback.classList.add('is-wrong');
        feedback.querySelector('.duo-feedback-title').textContent = 'Correct answer:';
        feedback.querySelector('.duo-feedback-sub').textContent = `${quizSlide.dataset.answer} — ${quizSlide.dataset.explanation}`;
      }
      quizSlide.dataset.answered = 'true';
      if (input) input.disabled = true;
      duoCheck.textContent = 'CONTINUE';
      duoCheck.classList.add('is-continue');
      duoCheck.classList.toggle('is-wrong-btn', !isCorrect);
      duoCheck.disabled = false;
      updateLessonChrome();
      return;
    }
    // Graded: require a selection first.
    const selected = quizSlide.querySelector('.quiz-option.is-selected');
    if (!selected) return;
    const selectedIndex = Number(selected.dataset.option);
    const correctIndex = Number(quizSlide.dataset.correctIndex);
    const isCorrect = selectedIndex === correctIndex;
    const options = Array.from(quizSlide.querySelectorAll('.quiz-option'));
    options.forEach((opt) => {
      opt.disabled = true;
      const idx = Number(opt.dataset.option);
      if (idx === correctIndex) opt.classList.add('is-correct');
      if (opt === selected && !isCorrect) opt.classList.add('is-incorrect');
    });
    const feedback = quizSlide.querySelector('.duo-feedback');
    feedback.hidden = false;
    if (isCorrect) {
      feedback.classList.remove('is-wrong');
      feedback.classList.add('is-correct');
      feedback.querySelector('.duo-feedback-title').textContent = 'Correct!';
      feedback.querySelector('.duo-feedback-sub').textContent = quizSlide.dataset.explanation || 'Nice work.';
    } else {
      mistakeCount += 1;
      feedback.classList.remove('is-correct');
      feedback.classList.add('is-wrong');
      feedback.querySelector('.duo-feedback-title').textContent = 'Correct answer:';
      feedback.querySelector('.duo-feedback-sub').textContent = `${quizSlide.dataset.answer} — ${quizSlide.dataset.explanation}`;
    }
    quizSlide.dataset.answered = 'true';
    duoCheck.textContent = 'CONTINUE';
    duoCheck.classList.add('is-continue');
    duoCheck.classList.toggle('is-wrong-btn', !isCorrect);
    duoCheck.disabled = false;
    updateLessonChrome();
    return;
  }

  const submitButton = event.target.closest('.quiz-submit');
  if (submitButton) {
    const quizSlide = submitButton.closest('.quiz-slide');
    const answer = quizSlide.querySelector('.quiz-answer');
    const expectedAnswer = quizSlide.dataset.answer;
    const normalizedUser = answer.value.trim().replace(/\s+/g, ' ');
    const normalizedExpected = expectedAnswer.trim().replace(/\s+/g, ' ');
    const isCorrect = normalizedUser === normalizedExpected;
    if (!isCorrect) mistakeCount += 1;
    quizSlide.querySelector('.quiz-feedback').textContent = isCorrect
      ? 'Correct. You may continue.'
      : 'Answer submitted. Review the correct answer, then continue.';
    const answerReveal = quizSlide.querySelector('.quiz-answer-reveal');
    answerReveal.textContent = `Correct answer: ${expectedAnswer} Explanation: ${quizSlide.dataset.explanation}`;
    answerReveal.classList.add('is-visible', isCorrect ? 'is-correct' : 'is-incorrect');
    quizSlide.dataset.answered = 'true';
    answer.disabled = true;
    submitButton.disabled = true;
    updateLessonChrome();
    return;
  }

  const option = event.target.closest('.quiz-option');
  if (!option) return;

  const quizSlide = option.closest('.quiz-slide');
  if (!quizSlide || quizSlide.dataset.answered === 'true') return;

  // Duolingo cards: select only — grading happens on CHECK.
  if (quizSlide.classList.contains('duo-slide')) {
    quizSlide.querySelectorAll('.quiz-option').forEach((opt) => opt.classList.remove('is-selected'));
    option.classList.add('is-selected');
    const check = quizSlide.querySelector('.duo-check');
    if (check && quizSlide.dataset.answered !== 'true') check.disabled = false;
    return;
  }

  const options = Array.from(quizSlide.querySelectorAll('.quiz-option'));
  const selectedIndex = Number(option.dataset.option);
  const isCorrect = selectedIndex === Number(quizSlide.dataset.correctIndex);
  if (!isCorrect) mistakeCount += 1;
  option.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
  quizSlide.querySelector('.quiz-feedback').textContent = isCorrect
    ? 'Correct. You may continue.'
    : 'Try again.';

  if (isCorrect) {
    quizSlide.dataset.answered = 'true';
    options.forEach((quizOption) => {
      quizOption.disabled = true;
    });
    updateLessonChrome();
  }
});

slidesContainer.addEventListener('input', (event) => {
  if (!event.target.matches('.quiz-answer')) return;
  event.target.value = event.target.value.toUpperCase();
  const duoCard = event.target.closest('.duo-slide');
  if (duoCard && duoCard.dataset.answered !== 'true' && duoCard.dataset.duoKind === 'type') {
    const check = duoCard.querySelector('.duo-check');
    if (check) check.disabled = event.target.value.trim().length === 0;
  }
});

backButton.addEventListener('click', () => showSlide(activeSlide - 1, 'back'));
continueButton.addEventListener('click', () => {
  const isLastQuiz = isLongQuizMode && quizSlideIndexes.length > 0 && activeSlide === quizSlideIndexes[quizSlideIndexes.length - 1];
  const isLastSlide = !isLongQuizMode && slides.length > 0 && activeSlide === slides.length - 1;

  if (isLastQuiz) {
    showQuizSummary();
    showAppHome(true);
    return;
  }
  if (isLastSlide) {
    showAppHome();
    return;
  }

  showSlide(activeSlide + 1, 'forward');
});

window.addEventListener('keydown', (event) => {
  if (event.target.matches('input, textarea, select, button')) return;
  if (event.key === 'ArrowRight') showSlide(activeSlide + 1, 'forward');
  if (event.key === 'ArrowLeft') showSlide(activeSlide - 1, 'back');
});

let touchStartX = 0;
let touchStartY = 0;

slidesContainer.addEventListener('touchstart', (event) => {
  const touch = event.changedTouches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
}, { passive: true });

slidesContainer.addEventListener('touchend', (event) => {
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - touchStartX;
  const deltaY = touch.clientY - touchStartY;

  if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY)) return;
  if (deltaX < 0) showSlide(activeSlide + 1, 'forward');
  if (deltaX > 0) showSlide(activeSlide - 1, 'back');
}, { passive: true });

updateLessonChrome();
showAppHome();

function restoreWindow() {
  appWindow.classList.remove('is-minimized', 'is-closed', 'is-fullscreen');
  maximizeWindow.setAttribute('aria-label', 'Fullscreen window');
  taskbarApp.classList.add('is-active');
}

maximizeWindow.addEventListener('click', () => {
  appWindow.classList.remove('is-minimized', 'is-closed');
  taskbarApp.classList.add('is-active');
  const enteringFullscreen = !appWindow.classList.contains('is-fullscreen');
  ['position', 'left', 'top', 'width', 'height', 'margin'].forEach((property) => {
    appWindow.style.removeProperty(property);
  });
  appWindow.classList.toggle('is-fullscreen', enteringFullscreen);
  maximizeWindow.setAttribute(
    'aria-label',
    enteringFullscreen ? 'Restore window' : 'Fullscreen window'
  );
});

trafficMaximize.addEventListener('click', () => {
  if (appWindow.classList.contains('is-closed') || appWindow.classList.contains('is-minimized')) {
    restoreWindow();
  }

  const enteringFullscreen = !appWindow.classList.contains('is-fullscreen');
  ['position', 'left', 'top', 'width', 'height', 'margin'].forEach((property) => {
    appWindow.style.removeProperty(property);
  });
  appWindow.classList.toggle('is-fullscreen', enteringFullscreen);
  maximizeWindow.setAttribute(
    'aria-label',
    enteringFullscreen ? 'Restore window' : 'Fullscreen window'
  );
});

trafficClose.addEventListener('click', () => {
  appWindow.classList.remove('is-fullscreen', 'is-minimized');
  appWindow.classList.add('is-closed');
  taskbarApp.classList.remove('is-active');
});

trafficMinimize.addEventListener('click', () => {
  if (appWindow.classList.contains('is-closed')) {
    restoreWindow();
    return;
  }

  appWindow.classList.remove('is-closed');
  appWindow.classList.toggle('is-minimized');
  taskbarApp.classList.toggle('is-active', !appWindow.classList.contains('is-minimized'));
});

closeWindow.addEventListener('click', () => {
  appWindow.classList.remove('is-fullscreen', 'is-minimized');
  appWindow.classList.add('is-closed');
  maximizeWindow.setAttribute('aria-label', 'Fullscreen window');
  taskbarApp.classList.remove('is-active');
});

taskbarApp.addEventListener('click', restoreWindow);
desktopAppIcon.addEventListener('click', openLessonApp);
courseFilesIcon.addEventListener('click', openCourseMap);
document.querySelector('.nav-icon').addEventListener('click', () => showAppHome());
longQuizIcon.addEventListener('click', openLongQuiz);
quizIcon.addEventListener('click', openQuiz);
androidBack.addEventListener('click', () => showSlide(activeSlide - 1, 'back'));
androidHome.addEventListener('click', () => showAppHome());
androidOverview.addEventListener('click', restoreWindow);
startLessonsButton.addEventListener('click', openLessonApp);
openQuizButton.addEventListener('click', openQuiz);
openLongQuizButton.addEventListener('click', openLongQuiz);
openCourseMapButton.addEventListener('click', openCourseMap);

document.querySelectorAll('.unit-option').forEach((button) => {
  button.addEventListener('click', () => {
    selectedUnit.value = button.dataset.unit;
    document.querySelectorAll('.unit-option').forEach((option) => {
      const isSelected = option === button;
      option.classList.toggle('is-selected', isSelected);
      option.setAttribute('aria-pressed', String(isSelected));
    });
  });
});

if (window.location.hash === '#long-quiz') window.setTimeout(openLongQuiz, 0);

let dragState = null;

appTopbar.addEventListener('pointerdown', (event) => {
  if (event.target.closest('button, .address-bar') || appWindow.classList.contains('is-fullscreen')) return;

  const bounds = appWindow.getBoundingClientRect();
  appWindow.style.position = 'fixed';
  appWindow.style.left = `${bounds.left}px`;
  appWindow.style.top = `${bounds.top}px`;
  appWindow.style.width = `${bounds.width}px`;
  appWindow.style.height = `${bounds.height}px`;
  appWindow.style.margin = '0';
  appWindow.setPointerCapture(event.pointerId);
  appWindow.classList.add('is-dragging');

  dragState = {
    startX: event.clientX,
    startY: event.clientY,
    left: bounds.left,
    top: bounds.top
  };
});

appWindow.addEventListener('pointermove', (event) => {
  if (!dragState) return;

  const nextLeft = dragState.left + event.clientX - dragState.startX;
  const nextTop = dragState.top + event.clientY - dragState.startY;
  appWindow.style.left = `${Math.max(0, nextLeft)}px`;
  appWindow.style.top = `${Math.max(0, nextTop)}px`;
});

appWindow.addEventListener('pointerup', (event) => {
  if (!dragState) return;
  appWindow.releasePointerCapture(event.pointerId);
  appWindow.classList.remove('is-dragging');
  dragState = null;
});
