# Full DSA Seed SQL (All Chapters)

```sql
-- =========================
-- QUESTION LEVELS
-- =========================

INSERT INTO question_levels (level)
VALUES
('Easy'),
('Medium'),
('Hard');


-- =========================
-- CHAPTERS
-- =========================

INSERT INTO chapters (name, sequence)
VALUES
('Arrays', 1),
('Strings', 2),
('Linked List', 3),
('Stacks', 4),
('Queues', 5),
('Binary Trees', 6),
('Binary Search Trees', 7),
('Heaps', 8),
('Hashing', 9),
('Graphs', 10),
('Greedy', 11),
('Recursion', 12),
('Backtracking', 13),
('Dynamic Programming', 14),
('Tries', 15),
('Bit Manipulation', 16);


-- =========================
-- COMPANIES
-- =========================

INSERT INTO companies (name, logo_link)
VALUES
('Amazon', 'https://logo.clearbit.com/amazon.com'),
('Google', 'https://logo.clearbit.com/google.com'),
('Microsoft', 'https://logo.clearbit.com/microsoft.com'),
('Adobe', 'https://logo.clearbit.com/adobe.com'),
('Flipkart', 'https://logo.clearbit.com/flipkart.com'),
('Uber', 'https://logo.clearbit.com/uber.com'),
('Goldman Sachs', 'https://logo.clearbit.com/goldmansachs.com'),
('Paytm', 'https://logo.clearbit.com/paytm.com'),
('Walmart', 'https://logo.clearbit.com/walmart.com'),
('Atlassian', 'https://logo.clearbit.com/atlassian.com');

-- =========================
-- ARRAYS QUESTIONS
-- =========================

INSERT INTO questions (
  chapter_id,
  level_id,
  name,
  article_link,
  youtube_link,
  leetcode_link,
  sequence
)
VALUES

(
  (SELECT id FROM chapters WHERE name = 'Arrays'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Two Sum',
  'https://www.geeksforgeeks.org/check-if-pair-with-given-sum-exists-in-array/',
  'https://www.youtube.com/watch?v=KLlXCFG5TnA',
  'https://leetcode.com/problems/two-sum/',
  1
),

(
  (SELECT id FROM chapters WHERE name = 'Arrays'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Best Time to Buy and Sell Stock',
  'https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/',
  'https://www.youtube.com/watch?v=1pkOgXD63yU',
  'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
  2
),

(
  (SELECT id FROM chapters WHERE name = 'Arrays'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Maximum Subarray',
  'https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/',
  'https://www.youtube.com/watch?v=5WZl3MMT0Eg',
  'https://leetcode.com/problems/maximum-subarray/',
  3
),

(
  (SELECT id FROM chapters WHERE name = 'Arrays'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Container With Most Water',
  'https://www.geeksforgeeks.org/container-with-most-water/',
  'https://www.youtube.com/watch?v=UuiTKBwPgAo',
  'https://leetcode.com/problems/container-with-most-water/',
  4
),

(
  (SELECT id FROM chapters WHERE name = 'Arrays'),
  (SELECT id FROM question_levels WHERE level = 'Hard'),
  'Trapping Rain Water',
  'https://www.geeksforgeeks.org/trapping-rain-water/',
  'https://www.youtube.com/watch?v=m18Hntz4go8',
  'https://leetcode.com/problems/trapping-rain-water/',
  5
);



-- =========================
-- STRINGS QUESTIONS
-- =========================

INSERT INTO questions (
  chapter_id,
  level_id,
  name,
  article_link,
  youtube_link,
  leetcode_link,
  sequence
)
VALUES

(
  (SELECT id FROM chapters WHERE name = 'Strings'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Valid Anagram',
  'https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/',
  'https://www.youtube.com/watch?v=9UtInBqnCgA',
  'https://leetcode.com/problems/valid-anagram/',
  1
),

(
  (SELECT id FROM chapters WHERE name = 'Strings'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Valid Palindrome',
  'https://www.geeksforgeeks.org/sentence-palindrome-palindrome-removing-spaces-dots-etc/',
  'https://www.youtube.com/watch?v=jJXJ16kPFWg',
  'https://leetcode.com/problems/valid-palindrome/',
  2
),

(
  (SELECT id FROM chapters WHERE name = 'Strings'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Longest Palindromic Substring',
  'https://www.geeksforgeeks.org/longest-palindromic-substring/',
  'https://www.youtube.com/watch?v=XYQecbcd6_c',
  'https://leetcode.com/problems/longest-palindromic-substring/',
  3
),

(
  (SELECT id FROM chapters WHERE name = 'Strings'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Group Anagrams',
  'https://www.geeksforgeeks.org/given-a-sequence-of-words-print-all-anagrams-together/',
  'https://www.youtube.com/watch?v=vzdNOK2oB2E',
  'https://leetcode.com/problems/group-anagrams/',
  4
),

(
  (SELECT id FROM chapters WHERE name = 'Strings'),
  (SELECT id FROM question_levels WHERE level = 'Hard'),
  'Minimum Window Substring',
  'https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/',
  'https://www.youtube.com/watch?v=jSto0O4AJbM',
  'https://leetcode.com/problems/minimum-window-substring/',
  5
);



-- =========================
-- LINKED LIST QUESTIONS
-- =========================

INSERT INTO questions (
  chapter_id,
  level_id,
  name,
  article_link,
  youtube_link,
  leetcode_link,
  sequence
)
VALUES

(
  (SELECT id FROM chapters WHERE name = 'Linked List'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Reverse Linked List',
  'https://www.geeksforgeeks.org/reverse-a-linked-list/',
  'https://www.youtube.com/watch?v=G0_I-ZF0S38',
  'https://leetcode.com/problems/reverse-linked-list/',
  1
),

(
  (SELECT id FROM chapters WHERE name = 'Linked List'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Merge Two Sorted Lists',
  'https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/',
  'https://www.youtube.com/watch?v=XIdigk956u0',
  'https://leetcode.com/problems/merge-two-sorted-lists/',
  2
),

(
  (SELECT id FROM chapters WHERE name = 'Linked List'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Linked List Cycle',
  'https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/',
  'https://www.youtube.com/watch?v=gBTe7lFR3vc',
  'https://leetcode.com/problems/linked-list-cycle/',
  3
),

(
  (SELECT id FROM chapters WHERE name = 'Linked List'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Remove Nth Node From End',
  'https://www.geeksforgeeks.org/remove-nth-node-from-end-of-the-linked-list/',
  'https://www.youtube.com/watch?v=XVuQxVej6y8',
  'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
  4
),

(
  (SELECT id FROM chapters WHERE name = 'Linked List'),
  (SELECT id FROM question_levels WHERE level = 'Hard'),
  'Merge k Sorted Lists',
  'https://www.geeksforgeeks.org/merge-k-sorted-linked-lists/',
  'https://www.youtube.com/watch?v=q5a5OiGbT6Q',
  'https://leetcode.com/problems/merge-k-sorted-lists/',
  5
);



-- =========================
-- STACK QUESTIONS
-- =========================

INSERT INTO questions (
  chapter_id,
  level_id,
  name,
  article_link,
  youtube_link,
  leetcode_link,
  sequence
)
VALUES

(
  (SELECT id FROM chapters WHERE name = 'Stacks'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Valid Parentheses',
  'https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/',
  'https://www.youtube.com/watch?v=WTzjTskDFMg',
  'https://leetcode.com/problems/valid-parentheses/',
  1
),

(
  (SELECT id FROM chapters WHERE name = 'Stacks'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Min Stack',
  'https://www.geeksforgeeks.org/design-and-implement-special-stack-data-structure/',
  'https://www.youtube.com/watch?v=qkLl7nAwDPo',
  'https://leetcode.com/problems/min-stack/',
  2
),

(
  (SELECT id FROM chapters WHERE name = 'Stacks'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Daily Temperatures',
  'https://www.geeksforgeeks.org/find-the-nearest-smaller-numbers-on-left-side-in-an-array/',
  'https://www.youtube.com/watch?v=cTBiBSnjO3c',
  'https://leetcode.com/problems/daily-temperatures/',
  3
),

(
  (SELECT id FROM chapters WHERE name = 'Stacks'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Evaluate Reverse Polish Notation',
  'https://www.geeksforgeeks.org/evaluation-of-postfix-expression/',
  'https://www.youtube.com/watch?v=iu0082c4HDE',
  'https://leetcode.com/problems/evaluate-reverse-polish-notation/',
  4
),

(
  (SELECT id FROM chapters WHERE name = 'Stacks'),
  (SELECT id FROM question_levels WHERE level = 'Hard'),
  'Largest Rectangle in Histogram',
  'https://www.geeksforgeeks.org/largest-rectangle-under-histogram/',
  'https://www.youtube.com/watch?v=zx5Sw9130L0',
  'https://leetcode.com/problems/largest-rectangle-in-histogram/',
  5
);

-- =========================
-- QUEUES QUESTIONS
-- =========================

INSERT INTO questions (
  chapter_id,
  level_id,
  name,
  article_link,
  youtube_link,
  leetcode_link,
  sequence
)
VALUES

(
  (SELECT id FROM chapters WHERE name = 'Queues'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Implement Queue using Stacks',
  'https://www.geeksforgeeks.org/queue-using-stacks/',
  'https://www.youtube.com/watch?v=oxxo7x0sjK8',
  'https://leetcode.com/problems/implement-queue-using-stacks/',
  1
),

(
  (SELECT id FROM chapters WHERE name = 'Queues'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'First Unique Character',
  'https://www.geeksforgeeks.org/first-non-repeating-character-stream-characters/',
  'https://www.youtube.com/watch?v=St47WC5RzPM',
  'https://leetcode.com/problems/first-unique-character-in-a-string/',
  2
),

(
  (SELECT id FROM chapters WHERE name = 'Queues'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Sliding Window Maximum',
  'https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/',
  'https://www.youtube.com/watch?v=DfljaUwZsOk',
  'https://leetcode.com/problems/sliding-window-maximum/',
  3
),

(
  (SELECT id FROM chapters WHERE name = 'Queues'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Design Circular Queue',
  'https://www.geeksforgeeks.org/introduction-to-circular-queue/',
  'https://www.youtube.com/watch?v=okr-XE8yTO8',
  'https://leetcode.com/problems/design-circular-queue/',
  4
),

(
  (SELECT id FROM chapters WHERE name = 'Queues'),
  (SELECT id FROM question_levels WHERE level = 'Hard'),
  'Shortest Subarray with Sum at Least K',
  'https://www.geeksforgeeks.org/smallest-subarray-from-a-given-array-with-sum-greater-than-or-equal-to-k/',
  'https://www.youtube.com/watch?v=K0NgGYEAkA4',
  'https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/',
  5
);



-- =========================
-- BINARY TREES QUESTIONS
-- =========================

INSERT INTO questions (
  chapter_id,
  level_id,
  name,
  article_link,
  youtube_link,
  leetcode_link,
  sequence
)
VALUES

(
  (SELECT id FROM chapters WHERE name = 'Binary Trees'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Maximum Depth of Binary Tree',
  'https://www.geeksforgeeks.org/find-the-maximum-depth-or-height-of-a-tree/',
  'https://www.youtube.com/watch?v=eD3tmO66aBA',
  'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
  1
),

(
  (SELECT id FROM chapters WHERE name = 'Binary Trees'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Invert Binary Tree',
  'https://www.geeksforgeeks.org/write-an-efficient-c-function-to-convert-a-tree-into-its-mirror-tree/',
  'https://www.youtube.com/watch?v=OnSn2XEQ4MY',
  'https://leetcode.com/problems/invert-binary-tree/',
  2
),

(
  (SELECT id FROM chapters WHERE name = 'Binary Trees'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Binary Tree Level Order Traversal',
  'https://www.geeksforgeeks.org/level-order-tree-traversal/',
  'https://www.youtube.com/watch?v=EoAsWbO7sqg',
  'https://leetcode.com/problems/binary-tree-level-order-traversal/',
  3
),

(
  (SELECT id FROM chapters WHERE name = 'Binary Trees'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Path Sum II',
  'https://www.geeksforgeeks.org/root-to-leaf-path-sum-equal-to-a-given-number/',
  'https://www.youtube.com/watch?v=Q9wXgdxJq48',
  'https://leetcode.com/problems/path-sum-ii/',
  4
),

(
  (SELECT id FROM chapters WHERE name = 'Binary Trees'),
  (SELECT id FROM question_levels WHERE level = 'Hard'),
  'Serialize and Deserialize Binary Tree',
  'https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/',
  'https://www.youtube.com/watch?v=u4JAi2JJhI8',
  'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
  5
);



-- =========================
-- BINARY SEARCH TREES QUESTIONS
-- =========================

INSERT INTO questions (
  chapter_id,
  level_id,
  name,
  article_link,
  youtube_link,
  leetcode_link,
  sequence
)
VALUES

(
  (SELECT id FROM chapters WHERE name = 'Binary Search Trees'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Search in BST',
  'https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/',
  'https://www.youtube.com/watch?v=KcNt6v_56cc',
  'https://leetcode.com/problems/search-in-a-binary-search-tree/',
  1
),

(
  (SELECT id FROM chapters WHERE name = 'Binary Search Trees'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Validate Binary Search Tree',
  'https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/',
  'https://www.youtube.com/watch?v=s6ATEkipzow',
  'https://leetcode.com/problems/validate-binary-search-tree/',
  2
),

(
  (SELECT id FROM chapters WHERE name = 'Binary Search Trees'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Lowest Common Ancestor of BST',
  'https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-search-tree/',
  'https://www.youtube.com/watch?v=gs2LMfuOR9k',
  'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
  3
),

(
  (SELECT id FROM chapters WHERE name = 'Binary Search Trees'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Kth Smallest Element in BST',
  'https://www.geeksforgeeks.org/find-k-th-smallest-element-in-bst-order-statistics-in-bst/',
  'https://www.youtube.com/watch?v=9TJYWh0adfk',
  'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
  4
),

(
  (SELECT id FROM chapters WHERE name = 'Binary Search Trees'),
  (SELECT id FROM question_levels WHERE level = 'Hard'),
  'Recover Binary Search Tree',
  'https://www.geeksforgeeks.org/fix-two-swapped-nodes-of-bst/',
  'https://www.youtube.com/watch?v=ZWGW7FminDM',
  'https://leetcode.com/problems/recover-binary-search-tree/',
  5
);

-- =========================
-- HEAPS QUESTIONS
-- =========================

INSERT INTO questions (
  chapter_id,
  level_id,
  name,
  article_link,
  youtube_link,
  leetcode_link,
  sequence
)
VALUES

(
  (SELECT id FROM chapters WHERE name = 'Heaps'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Kth Largest Element in an Array',
  'https://www.geeksforgeeks.org/kth-largest-element-in-an-array/',
  'https://www.youtube.com/watch?v=XEmy13g1Qxc',
  'https://leetcode.com/problems/kth-largest-element-in-an-array/',
  1
),

(
  (SELECT id FROM chapters WHERE name = 'Heaps'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Top K Frequent Elements',
  'https://www.geeksforgeeks.org/find-k-numbers-occurrences-given-array/',
  'https://www.youtube.com/watch?v=YPTqKIgVk-k',
  'https://leetcode.com/problems/top-k-frequent-elements/',
  2
);



-- =========================
-- HASHING QUESTIONS
-- =========================

INSERT INTO questions (
  chapter_id,
  level_id,
  name,
  article_link,
  youtube_link,
  leetcode_link,
  sequence
)
VALUES

(
  (SELECT id FROM chapters WHERE name = 'Hashing'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Contains Duplicate',
  'https://www.geeksforgeeks.org/find-duplicates-in-on-time-and-constant-extra-space/',
  'https://www.youtube.com/watch?v=3OamzN90kPg',
  'https://leetcode.com/problems/contains-duplicate/',
  1
),

(
  (SELECT id FROM chapters WHERE name = 'Hashing'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Longest Consecutive Sequence',
  'https://www.geeksforgeeks.org/longest-consecutive-subsequence/',
  'https://www.youtube.com/watch?v=P6RZZMu_maU',
  'https://leetcode.com/problems/longest-consecutive-sequence/',
  2
);



-- =========================
-- GRAPHS QUESTIONS
-- =========================

INSERT INTO questions (
  chapter_id,
  level_id,
  name,
  article_link,
  youtube_link,
  leetcode_link,
  sequence
)
VALUES

(
  (SELECT id FROM chapters WHERE name = 'Graphs'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Number of Islands',
  'https://www.geeksforgeeks.org/find-number-of-islands/',
  'https://www.youtube.com/watch?v=pV2kpPD66nE',
  'https://leetcode.com/problems/number-of-islands/',
  1
),

(
  (SELECT id FROM chapters WHERE name = 'Graphs'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Clone Graph',
  'https://www.geeksforgeeks.org/clone-an-undirected-graph/',
  'https://www.youtube.com/watch?v=mQeF6bN8hMk',
  'https://leetcode.com/problems/clone-graph/',
  2
);



-- =========================
-- GREEDY QUESTIONS
-- =========================

INSERT INTO questions (
  chapter_id,
  level_id,
  name,
  article_link,
  youtube_link,
  leetcode_link,
  sequence
)
VALUES

(
  (SELECT id FROM chapters WHERE name = 'Greedy'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Assign Cookies',
  'https://www.geeksforgeeks.org/assign-cookies/',
  'https://www.youtube.com/watch?v=H9bfqozjoqs',
  'https://leetcode.com/problems/assign-cookies/',
  1
),

(
  (SELECT id FROM chapters WHERE name = 'Greedy'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Jump Game',
  'https://www.geeksforgeeks.org/minimum-number-jumps-reach-endset-2on-solution/',
  'https://www.youtube.com/watch?v=Yan0cv2cLy8',
  'https://leetcode.com/problems/jump-game/',
  2
);



-- =========================
-- RECURSION QUESTIONS
-- =========================

INSERT INTO questions (
  chapter_id,
  level_id,
  name,
  article_link,
  youtube_link,
  leetcode_link,
  sequence
)
VALUES

(
  (SELECT id FROM chapters WHERE name = 'Recursion'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Factorial of a Number',
  'https://www.geeksforgeeks.org/program-for-factorial-of-a-number/',
  'https://www.youtube.com/watch?v=_ECMnx4_eZk',
  'https://leetcode.com/problems/factorial-trailing-zeroes/',
  1
),

(
  (SELECT id FROM chapters WHERE name = 'Recursion'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Generate Parentheses',
  'https://www.geeksforgeeks.org/print-all-combinations-of-balanced-parentheses/',
  'https://www.youtube.com/watch?v=s9fokUqJ76A',
  'https://leetcode.com/problems/generate-parentheses/',
  2
);



-- =========================
-- BACKTRACKING QUESTIONS
-- =========================

INSERT INTO questions (
  chapter_id,
  level_id,
  name,
  article_link,
  youtube_link,
  leetcode_link,
  sequence
)
VALUES

(
  (SELECT id FROM chapters WHERE name = 'Backtracking'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Subsets',
  'https://www.geeksforgeeks.org/backtracking-to-find-all-subsets/',
  'https://www.youtube.com/watch?v=REOH22Xwdkk',
  'https://leetcode.com/problems/subsets/',
  1
),

(
  (SELECT id FROM chapters WHERE name = 'Backtracking'),
  (SELECT id FROM question_levels WHERE level = 'Hard'),
  'Sudoku Solver',
  'https://www.geeksforgeeks.org/sudoku-backtracking-7/',
  'https://www.youtube.com/watch?v=FWAIf_EVUKE',
  'https://leetcode.com/problems/sudoku-solver/',
  2
);



-- =========================
-- DYNAMIC PROGRAMMING QUESTIONS
-- =========================

INSERT INTO questions (
  chapter_id,
  level_id,
  name,
  article_link,
  youtube_link,
  leetcode_link,
  sequence
)
VALUES

(
  (SELECT id FROM chapters WHERE name = 'Dynamic Programming'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Climbing Stairs',
  'https://www.geeksforgeeks.org/count-ways-reach-nth-stair/',
  'https://www.youtube.com/watch?v=Y0lT9Fck7qI',
  'https://leetcode.com/problems/climbing-stairs/',
  1
),

(
  (SELECT id FROM chapters WHERE name = 'Dynamic Programming'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'House Robber',
  'https://www.geeksforgeeks.org/find-maximum-possible-stolen-value-houses/',
  'https://www.youtube.com/watch?v=73r3KWiEvyk',
  'https://leetcode.com/problems/house-robber/',
  2
);



-- =========================
-- TRIES QUESTIONS
-- =========================

INSERT INTO questions (
  chapter_id,
  level_id,
  name,
  article_link,
  youtube_link,
  leetcode_link,
  sequence
)
VALUES

(
  (SELECT id FROM chapters WHERE name = 'Tries'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Implement Trie',
  'https://www.geeksforgeeks.org/trie-insert-and-search/',
  'https://www.youtube.com/watch?v=dBGUmUQhjaM',
  'https://leetcode.com/problems/implement-trie-prefix-tree/',
  1
),

(
  (SELECT id FROM chapters WHERE name = 'Tries'),
  (SELECT id FROM question_levels WHERE level = 'Hard'),
  'Word Search II',
  'https://www.geeksforgeeks.org/boggle-find-possible-words-board-characters/',
  'https://www.youtube.com/watch?v=asbcE9mZz_U',
  'https://leetcode.com/problems/word-search-ii/',
  2
);



-- =========================
-- BIT MANIPULATION QUESTIONS
-- =========================

INSERT INTO questions (
  chapter_id,
  level_id,
  name,
  article_link,
  youtube_link,
  leetcode_link,
  sequence
)
VALUES

(
  (SELECT id FROM chapters WHERE name = 'Bit Manipulation'),
  (SELECT id FROM question_levels WHERE level = 'Easy'),
  'Single Number',
  'https://www.geeksforgeeks.org/find-element-appears-array-every-element-appears-twice/',
  'https://www.youtube.com/watch?v=qMPX1AOa83k',
  'https://leetcode.com/problems/single-number/',
  1
),

(
  (SELECT id FROM chapters WHERE name = 'Bit Manipulation'),
  (SELECT id FROM question_levels WHERE level = 'Medium'),
  'Counting Bits',
  'https://www.geeksforgeeks.org/count-total-set-bits-in-all-numbers-from-1-to-n/',
  'https://www.youtube.com/watch?v=RyBM56RIWrM',
  'https://leetcode.com/problems/counting-bits/',
  2
);


-- =========================
-- QUESTION COMPANIES
-- =========================

INSERT INTO question_companies (
  question_id,
  company_id
)
VALUES

-- ARRAYS

(
  (SELECT id FROM questions WHERE name = 'Two Sum'),
  (SELECT id FROM companies WHERE name = 'Amazon')
),

(
  (SELECT id FROM questions WHERE name = 'Two Sum'),
  (SELECT id FROM companies WHERE name = 'Google')
),

(
  (SELECT id FROM questions WHERE name = 'Best Time to Buy and Sell Stock'),
  (SELECT id FROM companies WHERE name = 'Microsoft')
),

(
  (SELECT id FROM questions WHERE name = 'Maximum Subarray'),
  (SELECT id FROM companies WHERE name = 'Adobe')
),

(
  (SELECT id FROM questions WHERE name = 'Container With Most Water'),
  (SELECT id FROM companies WHERE name = 'Uber')
),

(
  (SELECT id FROM questions WHERE name = 'Trapping Rain Water'),
  (SELECT id FROM companies WHERE name = 'Goldman Sachs')
),



-- STRINGS

(
  (SELECT id FROM questions WHERE name = 'Valid Anagram'),
  (SELECT id FROM companies WHERE name = 'Google')
),

(
  (SELECT id FROM questions WHERE name = 'Valid Palindrome'),
  (SELECT id FROM companies WHERE name = 'Amazon')
),

(
  (SELECT id FROM questions WHERE name = 'Longest Palindromic Substring'),
  (SELECT id FROM companies WHERE name = 'Adobe')
),

(
  (SELECT id FROM questions WHERE name = 'Group Anagrams'),
  (SELECT id FROM companies WHERE name = 'Microsoft')
),

(
  (SELECT id FROM questions WHERE name = 'Minimum Window Substring'),
  (SELECT id FROM companies WHERE name = 'Uber')
),



-- LINKED LIST

(
  (SELECT id FROM questions WHERE name = 'Reverse Linked List'),
  (SELECT id FROM companies WHERE name = 'Flipkart')
),

(
  (SELECT id FROM questions WHERE name = 'Merge Two Sorted Lists'),
  (SELECT id FROM companies WHERE name = 'Amazon')
),

(
  (SELECT id FROM questions WHERE name = 'Linked List Cycle'),
  (SELECT id FROM companies WHERE name = 'Google')
),

(
  (SELECT id FROM questions WHERE name = 'Remove Nth Node From End'),
  (SELECT id FROM companies WHERE name = 'Microsoft')
),

(
  (SELECT id FROM questions WHERE name = 'Merge k Sorted Lists'),
  (SELECT id FROM companies WHERE name = 'Adobe')
),



-- STACKS

(
  (SELECT id FROM questions WHERE name = 'Valid Parentheses'),
  (SELECT id FROM companies WHERE name = 'Amazon')
),

(
  (SELECT id FROM questions WHERE name = 'Min Stack'),
  (SELECT id FROM companies WHERE name = 'Google')
),

(
  (SELECT id FROM questions WHERE name = 'Daily Temperatures'),
  (SELECT id FROM companies WHERE name = 'Microsoft')
),

(
  (SELECT id FROM questions WHERE name = 'Evaluate Reverse Polish Notation'),
  (SELECT id FROM companies WHERE name = 'Adobe')
),

(
  (SELECT id FROM questions WHERE name = 'Largest Rectangle in Histogram'),
  (SELECT id FROM companies WHERE name = 'Uber')
),



-- QUEUES

(
  (SELECT id FROM questions WHERE name = 'Implement Queue using Stacks'),
  (SELECT id FROM companies WHERE name = 'Amazon')
),

(
  (SELECT id FROM questions WHERE name = 'Sliding Window Maximum'),
  (SELECT id FROM companies WHERE name = 'Google')
),

(
  (SELECT id FROM questions WHERE name = 'Design Circular Queue'),
  (SELECT id FROM companies WHERE name = 'Microsoft')
),



-- BINARY TREES

(
  (SELECT id FROM questions WHERE name = 'Maximum Depth of Binary Tree'),
  (SELECT id FROM companies WHERE name = 'Amazon')
),

(
  (SELECT id FROM questions WHERE name = 'Invert Binary Tree'),
  (SELECT id FROM companies WHERE name = 'Google')
),

(
  (SELECT id FROM questions WHERE name = 'Binary Tree Level Order Traversal'),
  (SELECT id FROM companies WHERE name = 'Microsoft')
),

(
  (SELECT id FROM questions WHERE name = 'Serialize and Deserialize Binary Tree'),
  (SELECT id FROM companies WHERE name = 'Adobe')
),



-- BST

(
  (SELECT id FROM questions WHERE name = 'Search in BST'),
  (SELECT id FROM companies WHERE name = 'Amazon')
),

(
  (SELECT id FROM questions WHERE name = 'Validate Binary Search Tree'),
  (SELECT id FROM companies WHERE name = 'Google')
),

(
  (SELECT id FROM questions WHERE name = 'Kth Smallest Element in BST'),
  (SELECT id FROM companies WHERE name = 'Microsoft')
),



-- HEAPS

(
  (SELECT id FROM questions WHERE name = 'Kth Largest Element in an Array'),
  (SELECT id FROM companies WHERE name = 'Amazon')
),

(
  (SELECT id FROM questions WHERE name = 'Top K Frequent Elements'),
  (SELECT id FROM companies WHERE name = 'Google')
),



-- HASHING

(
  (SELECT id FROM questions WHERE name = 'Contains Duplicate'),
  (SELECT id FROM companies WHERE name = 'Microsoft')
),

(
  (SELECT id FROM questions WHERE name = 'Longest Consecutive Sequence'),
  (SELECT id FROM companies WHERE name = 'Adobe')
),



-- GRAPHS

(
  (SELECT id FROM questions WHERE name = 'Number of Islands'),
  (SELECT id FROM companies WHERE name = 'Amazon')
),

(
  (SELECT id FROM questions WHERE name = 'Clone Graph'),
  (SELECT id FROM companies WHERE name = 'Google')
),



-- GREEDY

(
  (SELECT id FROM questions WHERE name = 'Assign Cookies'),
  (SELECT id FROM companies WHERE name = 'Flipkart')
),

(
  (SELECT id FROM questions WHERE name = 'Jump Game'),
  (SELECT id FROM companies WHERE name = 'Uber')
),



-- RECURSION

(
  (SELECT id FROM questions WHERE name = 'Factorial of a Number'),
  (SELECT id FROM companies WHERE name = 'Paytm')
),

(
  (SELECT id FROM questions WHERE name = 'Generate Parentheses'),
  (SELECT id FROM companies WHERE name = 'Atlassian')
),



-- BACKTRACKING

(
  (SELECT id FROM questions WHERE name = 'Subsets'),
  (SELECT id FROM companies WHERE name = 'Amazon')
),

(
  (SELECT id FROM questions WHERE name = 'Sudoku Solver'),
  (SELECT id FROM companies WHERE name = 'Google')
),



-- DP

(
  (SELECT id FROM questions WHERE name = 'Climbing Stairs'),
  (SELECT id FROM companies WHERE name = 'Microsoft')
),

(
  (SELECT id FROM questions WHERE name = 'House Robber'),
  (SELECT id FROM companies WHERE name = 'Adobe')
),



-- TRIES

(
  (SELECT id FROM questions WHERE name = 'Implement Trie'),
  (SELECT id FROM companies WHERE name = 'Google')
),

(
  (SELECT id FROM questions WHERE name = 'Word Search II'),
  (SELECT id FROM companies WHERE name = 'Amazon')
),



-- BIT MANIPULATION

(
  (SELECT id FROM questions WHERE name = 'Single Number'),
  (SELECT id FROM companies WHERE name = 'Microsoft')
),

(
  (SELECT id FROM questions WHERE name = 'Counting Bits'),
  (SELECT id FROM companies WHERE name = 'Google')
);
```
