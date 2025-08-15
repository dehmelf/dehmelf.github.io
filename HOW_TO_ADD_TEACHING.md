# How to Add Your Teaching Experience

## Quick Guide

1. **Edit the main teaching page**: `/content/courses/_index.md`
2. **Add your teaching materials**: Put PDFs in `/static/teaching/[course_name]/`
3. **Link to materials**: Use format `/teaching/course_name/filename.pdf`

## Step-by-Step Instructions

### 1. Edit Your Teaching Page

Open `/content/courses/_index.md` and replace the placeholder text with your actual teaching experience.

### 2. Format for Different Roles

#### As Main Instructor:
```markdown
### ACADEMIC YEAR 2024/2025

**CS 70: Discrete Mathematics**, UC Berkeley  
Lecture notes: [Lecture 1](/teaching/cs70/lecture1.pdf), [Lecture 2](/teaching/cs70/lecture2.pdf)  
Tutorials: [Tutorial 1](/teaching/cs70/tutorial1.pdf), [Tutorial 2](/teaching/cs70/tutorial2.pdf)
```

#### As Teaching Assistant:
```markdown
### ACADEMIC YEAR 2023/2024

**CS 61B: Data Structures**, undergraduate Computer Science  
[Midterm review](/teaching/cs61b/midterm.pdf), [Final review](/teaching/cs61b/final.pdf)
```

#### Simple listing (no materials):
```markdown
**CS 170: Algorithms**, undergraduate Computer Science
```

### 3. Add Teaching Materials

1. Create a folder for each course:
   ```bash
   mkdir -p static/teaching/cs70
   mkdir -p static/teaching/cs61b
   ```

2. Copy your PDFs into the appropriate folders:
   ```bash
   cp ~/Desktop/my_lecture.pdf static/teaching/cs70/lecture1.pdf
   ```

3. Link to them in your markdown:
   ```markdown
   [Lecture 1](/teaching/cs70/lecture1.pdf)
   ```

### 4. Example Entry

Here's a complete example for a TA position:

```markdown
### ACADEMIC YEAR 2023/2024

**CS 61A: Structure and Interpretation of Computer Programs**, undergraduate Computer Science  
Discussion sections: Tuesday/Thursday 2-3pm  
[Discussion 1](/teaching/cs61a/disc01.pdf), [Discussion 2](/teaching/cs61a/disc02.pdf)  
[Midterm review](/teaching/cs61a/midterm-review.pdf)  
Office hours: Monday 3-5pm, Soda Hall
```

### 5. Tips

- List courses chronologically (newest first)
- Include course numbers and full names
- Specify your role clearly
- Add materials only if you have permission to share them
- Use consistent formatting throughout

### 6. Preview Your Changes

```bash
# Test locally
cd /Users/dehmelf/personal-website/dehmelf.github.io
hugo server

# Visit http://localhost:1313/courses/
```

### 7. Deploy Changes

```bash
git add .
git commit -m "Update teaching experience"
git push origin main
```

Your website will update automatically!
