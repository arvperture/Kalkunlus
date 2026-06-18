-- Kalkunlus MySQL Database Schema
-- Educational Mathematics Learning Platform

CREATE DATABASE IF NOT EXISTS kalkunlus;

USE kalkunlus;

-- Users Table
CREATE TABLE users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    email_verified_at TIMESTAMP NULL,
    password VARCHAR(255) NOT NULL,
    level ENUM(
        'elementary',
        'junior_high',
        'senior_high',
        'university'
    ) DEFAULT 'junior_high',
    total_score INT DEFAULT 0,
    streak_days INT DEFAULT 0,
    remember_token VARCHAR(100),
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    INDEX idx_email (email),
    INDEX idx_level (level)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Topics Table (Math Curriculum)
CREATE TABLE topics (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description LONGTEXT,
    level ENUM(
        'elementary',
        'junior_high',
        'senior_high',
        'university'
    ) NOT NULL,
    category VARCHAR(255),
    icon VARCHAR(255),
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    INDEX idx_level (level),
    INDEX idx_category (category)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Questions Table (Quiz Database)
CREATE TABLE questions (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    topic_id BIGINT UNSIGNED NOT NULL,
    difficulty_level ENUM('easy', 'medium', 'hard') NOT NULL,
    question_text LONGTEXT NOT NULL,
    options JSON NOT NULL,
    correct_answer VARCHAR(255) NOT NULL,
    explanation LONGTEXT,
    math_formula LONGTEXT,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    FOREIGN KEY (topic_id) REFERENCES topics (id) ON DELETE CASCADE,
    INDEX idx_topic_id (topic_id),
    INDEX idx_difficulty (difficulty_level)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Quizzes Table (User Quiz Sessions)
CREATE TABLE quizzes (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    topic_id BIGINT UNSIGNED,
    score FLOAT,
    questions_count INT DEFAULT 5,
    correct_count INT,
    time_taken INT COMMENT 'Time in seconds',
    completed_at TIMESTAMP NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (topic_id) REFERENCES topics (id) ON DELETE SET NULL,
    INDEX idx_user_id (user_id),
    INDEX idx_topic_id (topic_id),
    INDEX idx_completed_at (completed_at)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Quiz Answers Table (Student Responses)
CREATE TABLE quiz_answers (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    quiz_id BIGINT UNSIGNED NOT NULL,
    question_id BIGINT UNSIGNED NOT NULL,
    user_answer VARCHAR(255) NOT NULL,
    is_correct BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    FOREIGN KEY (quiz_id) REFERENCES quizzes (id) ON DELETE CASCADE,
    FOREIGN KEY (question_id) REFERENCES questions (id) ON DELETE CASCADE,
    INDEX idx_quiz_id (quiz_id),
    INDEX idx_question_id (question_id),
    INDEX idx_is_correct (is_correct)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- User Progress Table (Learning Analytics)
CREATE TABLE user_progress (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    topic_id BIGINT UNSIGNED NOT NULL,
    progress_percentage FLOAT DEFAULT 0,
    quizzes_completed INT DEFAULT 0,
    total_score FLOAT DEFAULT 0,
    last_attempted_at TIMESTAMP NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    UNIQUE KEY unique_user_topic (user_id, topic_id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (topic_id) REFERENCES topics (id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_progress (progress_percentage)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- User Topics (Many-to-Many)
CREATE TABLE user_topics (
    user_id BIGINT UNSIGNED NOT NULL,
    topic_id BIGINT UNSIGNED NOT NULL,
    progress FLOAT DEFAULT 0,
    mastered_at TIMESTAMP NULL,
    PRIMARY KEY (user_id, topic_id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (topic_id) REFERENCES topics (id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Sample Data
INSERT INTO
    topics (
        name,
        description,
        level,
        category,
        icon,
        created_at,
        updated_at
    )
VALUES (
        'Algebra Basics',
        'Fundamental algebraic concepts and equations',
        'junior_high',
        'Algebra',
        '📐',
        NOW(),
        NOW()
    ),
    (
        'Quadratic Equations',
        'Solving quadratic equations using various methods',
        'junior_high',
        'Algebra',
        '📐',
        NOW(),
        NOW()
    ),
    (
        'Trigonometry',
        'Understanding trigonometric functions and identities',
        'senior_high',
        'Trigonometry',
        '∠',
        NOW(),
        NOW()
    ),
    (
        'Calculus Fundamentals',
        'Introduction to derivatives and integrals',
        'university',
        'Calculus',
        '∫',
        NOW(),
        NOW()
    ),
    (
        'Geometry Essentials',
        'Basic geometric shapes and properties',
        'elementary',
        'Geometry',
        '△',
        NOW(),
        NOW()
    );

INSERT INTO
    questions (
        topic_id,
        difficulty_level,
        question_text,
        options,
        correct_answer,
        explanation,
        math_formula
    )
VALUES (
        1,
        'easy',
        'Solve for x: 2x + 5 = 13',
        '["x=2", "x=3", "x=4", "x=5"]',
        'x=4',
        'Subtract 5 from both sides: 2x = 8, then divide by 2: x = 4',
        '2x + 5 = 13'
    ),
    (
        1,
        'medium',
        'Solve for x: 3x - 7 = 2(x + 1)',
        '["x=2", "x=3", "x=9", "x=-9"]',
        'x=9',
        'Expand right side: 3x - 7 = 2x + 2, subtract 2x: x - 7 = 2, add 7: x = 9',
        '3x - 7 = 2(x + 1)'
    ),
    (
        2,
        'medium',
        'Factor: x² + 5x + 6',
        '["(x+2)(x+3)", "(x+1)(x+6)", "(x+2)(x+2)", "(x+3)(x+3)"]',
        '(x+2)(x+3)',
        'Find two numbers that multiply to 6 and add to 5: 2 and 3',
        'x² + 5x + 6'
    ),
    (
        3,
        'medium',
        'What is sin(π/2)?',
        '["0", "1/2", "1", "√2/2"]',
        '1',
        'sin(π/2) = 1 is a fundamental trigonometric identity',
        'sin(π/2)'
    ),
    (
        5,
        'easy',
        'Find the area of a circle with radius 5',
        '["25π", "10π", "5π", "50π"]',
        '25π',
        'Area of circle = πr². With r=5: A = π(5)² = 25π',
        'A = πr²'
    );