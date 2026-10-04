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

const HEARTS_MAX = 5;
let heartsLeft = HEARTS_MAX;

/* Hard Mock Test banks (from pathfitmocktest.html), with answer keys.
   kind: mc | match | tf | study. Graded: mc, match, tf. study = no grading. */
const hardMockBanks = {
  'UNIT I': [
    { kind: 'mc', q: 'Wunderlich (1967) outlined benefits of movement in education. Which of the following is NOT one of those benefits?', options: ['It provides sensory data.', 'It broadens the perspective horizon.', 'It stimulates the function and structure of all bodily organs.', 'It guarantees a muscular physique.'], correctIndex: 3, explanation: 'Wunderlich cited sensory data, broader horizons, and organ stimulation — not a guaranteed muscular physique.' },
    { kind: 'mc', q: 'The shift from "education of the physical" to "education through the physical" primarily reflects a change from:', options: ['muscle strengthening to holistic development', 'drill to calisthenics', 'physical fitness to athletic competition', 'individual to team sports'], correctIndex: 0, explanation: 'The shift moves from muscle-only training to holistic development through movement.' },
    { kind: 'mc', q: 'Which legal document first made Physical Education a formal subject in secondary school curricula?', options: ['1901 Physical exercise mandate', '1920 mandatory PE in public schools', '1937 PE as a formal secondary subject', '1969 School of Physical Education and Sports Development Act'], correctIndex: 2, explanation: '1937 made PE a formal subject in secondary curricula.' },
    { kind: 'mc', q: 'A teacher observes four outcomes after a fitness unit. Which one shows the INTEGRATIVE function of PE?', options: ['Students lower their resting heart rates through jogging', 'Students take turns leading warm-ups and settle disagreements fairly', 'A student manages frustration and trains consistently despite setbacks', 'Students build leg strength through squats and lunges'], correctIndex: 2, explanation: 'Integrative = personality integration (discipline, resilience). Heart rate and strength are biological; fair turn-taking is social.' },
    { kind: 'mc', q: 'According to the WHO (2010), physical inactivity is the ____ leading risk factor for global mortality:', options: ['first; infectious diseases', 'second; non-communicable diseases', 'third; genetic disorders', 'fourth; non-communicable diseases'], correctIndex: 3, explanation: 'WHO 2010: physical inactivity is the 4th leading risk factor, linked to non-communicable diseases.' },
    { kind: 'mc', q: 'Which statement accurately reflects the relationship between CMO 39 and CMO 40 (2021)?', options: ['CMO 39 covers general education PE; CMO 40 the BPEd program.', 'CMO 39 covers the BPEd program; CMO 40 general education PE.', 'Both CMOs focus exclusively on K-12 PE.', 'CMO 39 replaces CMO 40 entirely.'], correctIndex: 1, explanation: 'CMO 39 covers the BPEd program; CMO 40 covers PE in general education.' },
    { kind: 'mc', q: 'A 55-year-old office worker wants to improve fitness. Based on WHO recommendations, which is the most appropriate weekly target?', options: ['60 minutes of moderate activity daily', '75 minutes of vigorous activity + 2 days muscle strengthening', '150 minutes of moderate activity only', '30 minutes of light walking daily'], correctIndex: 1, explanation: 'Adults need 150 min moderate OR 75 min vigorous per week, plus muscle-strengthening 2+ days.' },
    { kind: 'mc', q: 'Which best exemplifies the "learn to move, move to learn" concept?', options: ['A student memorizes the rules of volleyball.', 'A student masters jumping and uses that skill to understand physics concepts.', 'A student watches a documentary on fitness.', 'A student lifts weights to increase muscle size.'], correctIndex: 1, explanation: 'Mastering a movement and using it to learn something else is the core idea.' },
    { kind: 'mc', q: 'The "good life" in fitness is characterized by all EXCEPT:', options: ['meeting basic needs such as love and security', 'harmonious relationships with others', 'commitment to serving humanity with integrity', 'prioritizing personal wealth above community well-being'], correctIndex: 3, explanation: 'The good life involves service and relationships, not wealth above community.' },
    { kind: 'mc', q: 'The 1982 MAPE program integrated which three learning areas?', options: ['Music, Arts, Physical Education', 'Mathematics, Arts, Physical Education', 'Music, Agriculture, Physical Education', 'Music, Arts, Psychology Education'], correctIndex: 0, explanation: 'MAPE = Music, Arts, Physical Education.' },
    { kind: 'mc', q: 'After a gymnastics unit, which outcome shows MENTAL development?', options: ['Holds a balance pose 30 seconds longer than before', 'Attempts a difficult roll again after falling, staying composed', 'Takes turns, spots partners, and follows the rotation fairly', 'Analyzes hip angle to correct a faulty landing'], correctIndex: 3, explanation: 'Mental = analyzing principles and strategies. Longer holds are physical, composure is emotional, fair rotation is social.' },
    { kind: 'mc', q: 'After a basketball unit, which outcome shows the SOCIAL function of PE?', options: ['Students sprint faster and jump higher than last month', 'A timid student finishes every drill without quitting', 'Students assign roles, resolve a foul dispute, and rotate a captain', 'Students diagram three offensive plays from memory'], correctIndex: 2, explanation: 'Social = cooperation, respect, leadership. Speed is biological, persistence is integrative, diagramming plays is mental.' },
    { kind: 'mc', q: 'After a dance unit, which outcome shows EMOTIONAL development?', options: ['Performs more repetitions without getting tired', 'Controls stage fright and performs confidently after a mistake', 'Memorizes the full step sequence and counts', 'Shares props and thanks partners after the show'], correctIndex: 1, explanation: 'Emotional = self-expression, confidence, self-control. Stamina is physical, memorizing is mental, sharing is social.' },
    { kind: 'mc', q: 'PATHFit 1 as Movement Competency-Based Training primarily focuses on:', options: ['competitive athletic performance', 'developing fundamental movement skills and competency', 'advanced dance choreography', 'outdoor adventure activities'], correctIndex: 1, explanation: 'MCT focuses on fundamental movement skills and competency.' },
    { kind: 'mc', q: 'Why has Physical Education historically been neglected in the curriculum?', options: ['Lack of student interest', 'Misunderstandings among teachers and administrators', 'Insufficient funding only', 'Government prohibition'], correctIndex: 1, explanation: 'Misunderstandings among teachers and administrators caused setbacks.' },
    { kind: 'mc', q: 'The "education through movement" approach uses all of the following as mediums EXCEPT:', options: ['games', 'dance', 'gymnastics', 'rote memorization'], correctIndex: 3, explanation: 'Games, dance, and gymnastics are mediums; rote memorization is not.' },
    { kind: 'match', q: '1901 — match with the correct description.', options: ['MAPE introduced (music, arts, PE)', 'PE became a formal secondary subject', 'Physical exercise entered public schools with athletic programs', 'PE became mandatory in all public schools', 'School PE and Sports Development Act'], correctIndex: 2, explanation: '1901: physical exercise entered public school subjects with athletic programs.' },
    { kind: 'match', q: '1920 — match with the correct description.', options: ['MAPE introduced (music, arts, PE)', 'PE became a formal secondary subject', 'Physical exercise entered public schools with athletic programs', 'PE became mandatory in all public schools', 'School PE and Sports Development Act'], correctIndex: 3, explanation: '1920: PE became mandatory in all public schools.' },
    { kind: 'match', q: '1937 — match with the correct description.', options: ['MAPE introduced (music, arts, PE)', 'PE became a formal secondary subject', 'Physical exercise entered public schools with athletic programs', 'PE became mandatory in all public schools', 'School PE and Sports Development Act'], correctIndex: 1, explanation: '1937: PE became a formal secondary subject.' },
    { kind: 'match', q: '1969 — match with the correct description.', options: ['MAPE introduced (music, arts, PE)', 'PE became a formal secondary subject', 'Physical exercise entered public schools with athletic programs', 'PE became mandatory in all public schools', 'School PE and Sports Development Act'], correctIndex: 4, explanation: '1969: School of Physical Education and Sports Development Act.' },
    { kind: 'match', q: '1982 — match with the correct description.', options: ['MAPE introduced (music, arts, PE)', 'PE became a formal secondary subject', 'Physical exercise entered public schools with athletic programs', 'PE became mandatory in all public schools', 'School PE and Sports Development Act'], correctIndex: 0, explanation: '1982: MAPE was introduced.' },
    { kind: 'tf', q: 'PE in the Philippines has historically been well-understood and prioritized by all teachers and administrators.', options: ['True', 'False'], correctIndex: 1, explanation: 'False — it faced neglect due to misunderstandings.' },
    { kind: 'tf', q: 'The "learn to move, move to learn" concept emphasizes that mastering movement facilitates learning.', options: ['True', 'False'], correctIndex: 0, explanation: 'True — movement mastery supports learning.' },
    { kind: 'tf', q: 'The biological function of PE focuses on integrating personality traits through diverse activities.', options: ['True', 'False'], correctIndex: 1, explanation: 'False — that is the integrative function; biological is growth and healthy movement.' },
    { kind: 'tf', q: 'Article XIV Section 19 of the 1987 Constitution mandates regular sports activities in all educational institutions.', options: ['True', 'False'], correctIndex: 0, explanation: 'True — in cooperation with athletic clubs and other sectors.' },
    { kind: 'tf', q: 'The WHO recommends older adults (65+) with good mobility focus on balance, endurance, strength, and flexibility.', options: ['True', 'False'], correctIndex: 0, explanation: 'True — per WHO older-adult guidance.' },
    { kind: 'study', q: 'Differentiate "education of the physical" from "education through the physical."', modelAnswer: 'Education of the physical trains the body itself (strength, drill). Education through the physical uses movement as a medium for holistic growth — physical, mental, emotional, social.', explanation: 'Study card — no hearts lost. Compare body-as-target vs movement-as-medium.' },
    { kind: 'study', q: 'Why is the integrative function of PE important for holistic development?', modelAnswer: 'It integrates discipline, resilience, teamwork, and critical thinking — building the whole person, not just muscles.', explanation: 'Study card — no hearts lost.' },
    { kind: 'study', q: 'How does the WHO 2010 report on inactivity impact the role of PE in schools?', modelAnswer: 'With inactivity the 4th leading mortality risk, PE must teach, build skills, and promote active lifestyles against non-communicable disease.', explanation: 'Study card — no hearts lost.' },
    { kind: 'study', q: 'What is the significance of CHED CMO 40 in the tertiary PE curriculum?', modelAnswer: 'CMO 40 guides PE in general education — physical literacy, wellness, lifelong fitness. (CMO 39 is for the BPEd program.)', explanation: 'Study card — no hearts lost.' },
    { kind: 'study', q: 'Explain how PE contributes to nationalism and cultural preservation.', modelAnswer: 'Through indigenous games, dance, and sports, PE builds love and pride for culture plus unity and international brotherhood.', explanation: 'Study card — no hearts lost.' }
  ],
  'UNIT II': [
    { kind: 'mc', q: 'Movement education as a multidisciplinary field incorporates all EXCEPT:', options: ['kinesiology', 'biomechanics', 'astrology', 'motor learning'], correctIndex: 2, explanation: 'Kinesiology, biomechanics, motor learning apply; astrology does not.' },
    { kind: 'mc', q: 'Which correctly pairs a bone type with its function?', options: ['Long bones - stability, limited motion', 'Short bones - act as levers', 'Flat bones - protect organs, anchor muscles', 'Sesamoid bones - support the spinal cord'], correctIndex: 2, explanation: 'Flat bones protect organs and anchor muscles.' },
    { kind: 'mc', q: 'The appendicular skeleton includes all EXCEPT:', options: ['shoulder girdle', 'arms', 'vertebral column', 'legs'], correctIndex: 2, explanation: 'Vertebral column is axial; girdles and limbs are appendicular.' },
    { kind: 'mc', q: 'Which statement about the female pelvis is correct?', options: ['Narrower and deeper than male pelvis.', 'Wider and shallower, running more efficient.', 'Wider and shallower, childbearing easier but running less efficient.', 'Identical to the male pelvis.'], correctIndex: 2, explanation: 'Wider, shallower pelvis eases childbearing but is less efficient for running.' },
    { kind: 'mc', q: 'A player jumps and lands, bending the knees to absorb force. This primarily involves:', options: ['flexion at the knee', 'extension at the knee', 'abduction at the hip', 'circumduction at the ankle'], correctIndex: 0, explanation: 'Bending the knee to absorb force is knee flexion.' },
    { kind: 'mc', q: 'Which is the BEST example of an isometric contraction?', options: ['Raising a dumbbell in a curl', 'Lowering a dumbbell in a curl', 'Holding a dumbbell stationary', 'Swinging a kettlebell'], correctIndex: 2, explanation: 'Isometric = tension with no change in muscle length.' },
    { kind: 'mc', q: 'During a biceps curl, the triceps brachii acts as the:', options: ['agonist', 'antagonist', 'stabilizer', 'neutralizer'], correctIndex: 1, explanation: 'The triceps relaxes to let the biceps flex — the antagonist.' },
    { kind: 'mc', q: 'Pectoralis major and latissimus dorsi both adduct the humerus. Neutralizing flexion/extension gives:', options: ['pure abduction', 'pure adduction', 'circumduction', 'rotation'], correctIndex: 1, explanation: 'Canceling opposite actions leaves pure adduction.' },
    { kind: 'mc', q: 'Which plane divides the body into anterior and posterior portions?', options: ['Sagittal plane', 'Coronal plane', 'Transverse plane', 'Median plane'], correctIndex: 1, explanation: 'Coronal (frontal) plane divides front from back.' },
    { kind: 'mc', q: 'Upward scapular movement, as in shrugging, is called:', options: ['depression', 'elevation', 'protraction', 'retraction'], correctIndex: 1, explanation: 'Upward movement is elevation.' },
    { kind: 'mc', q: 'Which is an example of a slightly movable joint?', options: ['Shoulder joint', 'Elbow joint', 'Joints of the spine', 'Knee joint'], correctIndex: 2, explanation: 'Spinal joints allow only a few degrees of motion.' },
    { kind: 'mc', q: 'In butterfly swimming, which muscle adducts and extends the arm at the shoulder?', options: ['Deltoid', 'Latissimus dorsi', 'Trapezius', 'Pectorals'], correctIndex: 1, explanation: 'Latissimus dorsi adducts and extends the arm powerfully.' },
    { kind: 'mc', q: 'Which muscle group extends the knee, as in high-jump takeoff?', options: ['Hamstrings', 'Quadriceps', 'Gluteals', 'Abdominals'], correctIndex: 1, explanation: 'Quadriceps extend the knee.' },
    { kind: 'mc', q: 'Rotating hand/forearm upward to palm-up is:', options: ['pronation', 'supination', 'inversion', 'eversion'], correctIndex: 1, explanation: 'Palm-up is supination; palm-down is pronation.' },
    { kind: 'mc', q: 'Which best describes a stabilizer muscle?', options: ['Causes the intended movement.', 'Relaxes to allow movement.', 'Holds a body part firm so another can move.', 'Equalizes opposite actions.'], correctIndex: 2, explanation: 'A stabilizer holds one part firm during movement elsewhere.' },
    { kind: 'match', q: 'Deltoid — match with its primary action.', options: ['Extends the forearm at the elbow', 'Flexes the forearm at the elbow', 'Moves the arm in all directions at the shoulder', 'Extends the hip, flexes the knee', 'Flexes the hip, extends the knee'], correctIndex: 2, explanation: 'Deltoid moves the arm in all directions at the shoulder.' },
    { kind: 'match', q: 'Triceps — match with its primary action.', options: ['Extends the forearm at the elbow', 'Flexes the forearm at the elbow', 'Moves the arm in all directions at the shoulder', 'Extends the hip, flexes the knee', 'Flexes the hip, extends the knee'], correctIndex: 0, explanation: 'Triceps extends the forearm at the elbow.' },
    { kind: 'match', q: 'Hamstrings — match with their action.', options: ['Extends the forearm at the elbow', 'Flexes the forearm at the elbow', 'Moves the arm in all directions at the shoulder', 'Extends the hip, flexes the knee', 'Flexes the hip, extends the knee'], correctIndex: 3, explanation: 'Hamstrings extend the hip and flex the knee.' },
    { kind: 'match', q: 'Biceps — match with its primary action.', options: ['Extends the forearm at the elbow', 'Flexes the forearm at the elbow', 'Moves the arm in all directions at the shoulder', 'Extends the hip, flexes the knee', 'Flexes the hip, extends the knee'], correctIndex: 1, explanation: 'Biceps flexes the forearm at the elbow.' },
    { kind: 'match', q: 'Quadriceps — match with its action.', options: ['Extends the forearm at the elbow', 'Flexes the forearm at the elbow', 'Moves the arm in all directions at the shoulder', 'Extends the hip, flexes the knee', 'Flexes the hip, extends the knee'], correctIndex: 4, explanation: 'Quadriceps flexes the hip and extends the knee.' },
    { kind: 'tf', q: 'The skeletal system provides leverage, protection, and support.', options: ['True', 'False'], correctIndex: 0, explanation: 'True — plus blood production.' },
    { kind: 'tf', q: 'Smooth muscles are voluntary and under conscious control.', options: ['True', 'False'], correctIndex: 1, explanation: 'False — smooth is involuntary; skeletal is voluntary.' },
    { kind: 'tf', q: 'The female pelvis is wider and shallower to make childbearing easier.', options: ['True', 'False'], correctIndex: 0, explanation: 'True.' },
    { kind: 'tf', q: 'In an eccentric contraction, the muscle lengthens while developing tension.', options: ['True', 'False'], correctIndex: 0, explanation: 'True — lengthening under tension.' },
    { kind: 'tf', q: 'The appendicular skeleton includes the skull, vertebral column, and rib cage.', options: ['True', 'False'], correctIndex: 1, explanation: 'False — those are the axial skeleton.' },
    { kind: 'study', q: 'Name the freely movable joint type found in shoulder, elbow, wrist, hip, and knee.', modelAnswer: 'Synovial / diarthrosis (freely movable) joints.', explanation: 'Study card — no hearts lost.' },
    { kind: 'study', q: 'Which bone classification is small, round, and embedded in tendons?', modelAnswer: 'Sesamoid bones (e.g., patellae).', explanation: 'Study card — no hearts lost.' },
    { kind: 'study', q: 'Which muscle role equalizes or nullifies another muscle action?', modelAnswer: 'Neutralizer.', explanation: 'Study card — no hearts lost.' },
    { kind: 'study', q: 'Which plane divides the body into upper and lower sections?', modelAnswer: 'Transverse (horizontal) plane.', explanation: 'Study card — no hearts lost.' },
    { kind: 'study', q: 'Why is warming up important for muscle contraction and joint movement?', modelAnswer: 'It raises blood flow and tissue temperature, improving contraction, oxygen delivery, and range — cutting strain and sprain risk.', explanation: 'Study card — no hearts lost.' }
  ],
  'UNIT III': [
    { kind: 'mc', q: 'Which is NOT one of the three aspects of being physically fit?', options: ['Daily tasks without getting too tired', 'Enjoying leisure recreation', 'Meeting emergency demands', 'Maximum muscle hypertrophy'], correctIndex: 3, explanation: 'Fit = daily tasks, leisure, emergencies — not max hypertrophy.' },
    { kind: 'mc', q: 'A marathoner sustaining submaximal effort long-term shows high:', options: ['muscular strength', 'muscular endurance', 'flexibility', 'power'], correctIndex: 1, explanation: 'Sustained submaximal effort is muscular endurance.' },
    { kind: 'mc', q: 'Which is NOT a physiological benefit of cardiovascular training?', options: ['Decreased resting heart rate', 'Increased blood volume', 'Decreased aerobic capacity', 'Stronger heart muscle'], correctIndex: 2, explanation: 'Training increases aerobic capacity.' },
    { kind: 'mc', q: 'The principle of specificity states that:', options: ['gains diminish when exercise stops', 'the body adapts specifically to imposed stress', 'individuals respond differently', 'rest is essential'], correctIndex: 1, explanation: 'Specificity = adaptations match the imposed stress.' },
    { kind: 'mc', q: 'Which somatotype has more body fat than lean mass?', options: ['Ectomorphic', 'Mesomorphic', 'Endomorphic', 'None of the above'], correctIndex: 2, explanation: 'Endomorphic = soft roundness, higher fat.' },
    { kind: 'mc', q: 'Fixed machines where resistance equals force through range describes:', options: ['Isotonic', 'Isometric', 'Isokinetic', 'Eccentric'], correctIndex: 2, explanation: 'Isokinetic machines match resistance to applied force.' },
    { kind: 'mc', q: 'Maintaining equilibrium in a fixed position (one-foot stand) is:', options: ['dynamic balance', 'static balance', 'coordination', 'agility'], correctIndex: 1, explanation: 'Fixed-position equilibrium is static balance.' },
    { kind: 'mc', q: 'Efficient muscle function (sedentary bodies fail even near max effort) refers to:', options: ['Vitality', 'Posture', 'Ability to Meet Emergencies', 'Neuromuscular Skill'], correctIndex: 0, explanation: 'Vitality = fit muscles use less energy and work efficiently.' },
    { kind: 'mc', q: 'Which is NOT a factor influencing flexibility?', options: ['Joint structure', 'Tissues around the joint', 'Extensibility of ligaments/tendons/muscles', 'Blood type'], correctIndex: 3, explanation: 'Blood type does not affect flexibility.' },
    { kind: 'mc', q: 'Cardio endurance program variables include all EXCEPT:', options: ['intensity', 'duration', 'frequency', 'somatotype'], correctIndex: 3, explanation: 'Intensity, duration, frequency, mode matter.' },
    { kind: 'mc', q: 'A fit person holds lower heart rate during activity because:', options: ['the heart is smaller', 'each beat pumps a greater blood volume', 'the lungs are larger', 'the muscles are smaller'], correctIndex: 1, explanation: 'Greater stroke volume means fewer beats.' },
    { kind: 'mc', q: 'Which principle says rest and recovery are essential?', options: ['Overload', 'Specificity', 'Recovery', 'Reversibility'], correctIndex: 2, explanation: 'Recovery = repair and grow stronger.' },
    { kind: 'mc', q: 'Which is NOT a performance-related fitness component?', options: ['Agility', 'Balance', 'Coordination', 'Body composition'], correctIndex: 3, explanation: 'Body composition is health-related.' },
    { kind: 'mc', q: 'Which is NOT an effective injury-prevention strategy?', options: ['Warm-up properly', 'Sudden increases in intensity', 'Use proper technique', 'Stay hydrated'], correctIndex: 1, explanation: 'Progress gradually instead.' },
    { kind: 'mc', q: 'Releasing maximum force in the shortest time is:', options: ['strength', 'endurance', 'power', 'speed'], correctIndex: 2, explanation: 'Max force, shortest time = power.' },
    { kind: 'match', q: 'Muscular Strength — match its definition.', options: ['Sustain submaximal effort long-term', 'Max effort in brief duration', 'Lean vs fat proportion', 'Heart/lungs adapt to prolonged exertion', 'Full range of motion'], correctIndex: 1, explanation: 'Strength = max effort in brief duration.' },
    { kind: 'match', q: 'Muscular Endurance — match its definition.', options: ['Sustain submaximal effort long-term', 'Max effort in brief duration', 'Lean vs fat proportion', 'Heart/lungs adapt to prolonged exertion', 'Full range of motion'], correctIndex: 0, explanation: 'Endurance = sustained submaximal effort.' },
    { kind: 'match', q: 'Cardiovascular Endurance — match its definition.', options: ['Sustain submaximal effort long-term', 'Max effort in brief duration', 'Lean vs fat proportion', 'Heart/lungs adapt to prolonged exertion', 'Full range of motion'], correctIndex: 3, explanation: 'Cardio = heart, vessels, lungs adapting.' },
    { kind: 'match', q: 'Flexibility — match its definition.', options: ['Sustain submaximal effort long-term', 'Max effort in brief duration', 'Lean vs fat proportion', 'Heart/lungs adapt to prolonged exertion', 'Full range of motion'], correctIndex: 4, explanation: 'Flexibility = full range of motion.' },
    { kind: 'match', q: 'Body Composition — match its definition.', options: ['Sustain submaximal effort long-term', 'Max effort in brief duration', 'Lean vs fat proportion', 'Heart/lungs adapt to prolonged exertion', 'Full range of motion'], correctIndex: 2, explanation: 'Body composition = lean vs fat proportion.' },
    { kind: 'tf', q: 'Physical fitness is static and never diminishes when exercise stops.', options: ['True', 'False'], correctIndex: 1, explanation: 'False — fitness is dynamic (reversibility).' },
    { kind: 'tf', q: 'Flexibility depends on joint structure and tissue extensibility.', options: ['True', 'False'], correctIndex: 0, explanation: 'True.' },
    { kind: 'tf', q: 'Ectomorphic means soft roundness with large digestive viscera.', options: ['True', 'False'], correctIndex: 1, explanation: 'False — that is endomorphic; ectomorphic is lean.' },
    { kind: 'tf', q: 'Overload means stressing the body beyond normal levels to improve.', options: ['True', 'False'], correctIndex: 0, explanation: 'True.' },
    { kind: 'tf', q: 'Muscular endurance is max effort in a brief duration.', options: ['True', 'False'], correctIndex: 1, explanation: 'False — that is strength; endurance is sustained effort.' },
    { kind: 'study', q: 'Differentiate concentric vs eccentric contractions with an example.', modelAnswer: 'Concentric shortens under tension (lifting up). Eccentric lengthens under tension (lowering slowly).', explanation: 'Study card — no hearts lost.' },
    { kind: 'study', q: 'Why is cardiovascular endurance key to longevity?', modelAnswer: 'Stronger heart, better oxygen delivery, lower disease risk — longer energetic life.', explanation: 'Study card — no hearts lost.' },
    { kind: 'study', q: 'How does reversibility affect someone who stops exercising?', modelAnswer: 'Gains fade — strength, endurance, flexibility decline toward baseline.', explanation: 'Study card — no hearts lost.' },
    { kind: 'study', q: 'Static vs dynamic balance with a sport example each?', modelAnswer: 'Static = still (one-foot stand, gymnastics pose). Dynamic = moving (dribbling, skateboard turn).', explanation: 'Study card — no hearts lost.' },
    { kind: 'study', q: 'Why include rest days and cross-training?', modelAnswer: 'Rest repairs and builds muscle; cross-training balances growth and prevents overuse.', explanation: 'Study card — no hearts lost.' }
  ]
};

function duoKicker(kind) {
  if (kind === 'mc') return 'PICK THE ANSWER';
  if (kind === 'tf') return 'TRUE OR FALSE';
  if (kind === 'match') return 'MATCH IT';
  return 'STUDY CARD';
}

function duoPrompt(kind) {
  if (kind === 'study') return 'Read this, then continue';
  if (kind === 'tf') return 'Is this true or false?';
  if (kind === 'match') return 'Choose the correct match';
  return 'Choose the correct answer';
}

function escapeHtml(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function duoSlideHTML(slideData, index, total) {
  const isStudy = slideData.questionType === 'duo-study';
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
      <div class="duo-hearts" aria-label="Hearts left">❤ <span class="duo-hearts-count">${heartsLeft}</span></div>
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

function updateDuoChrome() {
  const counts = document.querySelectorAll('.duo-hearts-count');
  counts.forEach((el) => { el.textContent = String(heartsLeft); });
  document.querySelectorAll('.duo-hearts').forEach((el) => {
    el.classList.toggle('is-low', heartsLeft <= 2 && heartsLeft > 0);
    el.classList.toggle('is-empty', heartsLeft <= 0);
  });
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

  if (typeof updateDuoChrome === 'function') updateDuoChrome();
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
    let options = item.options || [];
    let correctIndex = item.correctIndex ?? 0;
    // Shuffle answer order every run so positions are unpredictable.
    if (!isStudy && options.length > 1) {
      const shuffled = shuffleOptions(options, correctIndex);
      options = shuffled.options;
      correctIndex = shuffled.correctIndex;
    }
    return {
      type: 'quiz',
      questionType: isStudy ? 'duo-study' : 'duo-choice',
      duoKind: item.kind,
      unit: unitName,
      title: `${unitName} · HARD MOCK`,
      text: isStudy ? 'Study card — no hearts lost' : 'Duolingo mode — 5 hearts',
      question: item.q,
      options,
      correctIndex,
      answer: isStudy ? (item.modelAnswer || '') : (options[correctIndex] || ''),
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
  const heartsMsg = heartsLeft <= 0 ? ' — Out of hearts! Review the lessons and try again.' : ` — Hearts left: ${heartsLeft}/${HEARTS_MAX}`;
  quizSummary.textContent = `Quiz complete — Mistakes: ${mistakeCount}${heartsMsg}`;
}

function resetQuizResults() {
  mistakeCount = 0;
  heartsLeft = HEARTS_MAX;
  clearQuizSummary();
  if (typeof updateDuoChrome === 'function') updateDuoChrome();
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
    // Study cards: no grading, no hearts lost.
    if (duoKind === 'study') {
      quizSlide.dataset.answered = 'true';
      const feedback = quizSlide.querySelector('.duo-feedback');
      feedback.hidden = false;
      feedback.classList.remove('is-wrong');
      feedback.classList.add('is-correct');
      feedback.querySelector('.duo-feedback-title').textContent = 'Noted! No hearts lost.';
      feedback.querySelector('.duo-feedback-sub').textContent = quizSlide.dataset.explanation || 'Study card complete.';
      duoCheck.textContent = 'CONTINUE';
      duoCheck.classList.add('is-continue');
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
      heartsLeft = Math.max(0, heartsLeft - 1);
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
