# Website Personalization Checklist

## Essential Updates (Do these first!)

### 1. config.yml
- [ ] Line 27: Update `description` with your research focus
- [ ] Line 53: Update `subtitle` with your actual bio (e.g., "PhD Candidate in Economics at MIT")
- [ ] Line 71: Change email to your real email address
- [ ] Line 73: Update ORCID ID or remove the section
- [ ] Lines 67-77: Add/remove social icons (LinkedIn, Twitter, Google Scholar, etc.)

### 2. Static Files
- [ ] Replace `/static/picture.jpeg` with your professional photo
- [ ] Replace `/static/Academic_Resume.pdf` with your actual CV
- [ ] Optional: Create custom favicons in `/static/img/` folder

### 3. Content Files
- [ ] Update `content/location.md` with your office/university address
- [ ] Update `content/news.md` with your recent accomplishments
- [ ] Update `content/cv/index.md` if you want different text

### 4. Research & Teaching Content
- [ ] Update papers in `content/papers/` folder
- [ ] Update courses in `content/courses/` folder
- [ ] Remove sample content from Louise's site

## Optional Customizations

### Navigation Menu (config.yml lines 11-24)
- Add/remove menu items
- Reorder sections (change `weight` values)
- Rename sections (e.g., "Research" to "Publications")

### Social Icons (config.yml lines 67-77)
Available icons: CV, Email, GitHub, LinkedIn, Twitter, GoogleScholar, ORCID, Location, YouTube, ResearchGate, etc.

### Color Scheme
- Edit CSS files in `assets/css/` folder
- Modify `assets/css/core/theme-vars.css` for colors

### Footer
- Edit `layouts/partials/footer.html` for footer content

## Testing Your Changes
```bash
# Test locally
cd /Users/dehmelf/personal-website/dehmelf.github.io
hugo server

# Visit http://localhost:1313 to preview

# Commit and push changes
git add .
git commit -m "Personalize website content"
git push origin main
```

## Remember
- Keep backups of your original files
- Test changes locally before pushing
- GitHub Actions will automatically deploy changes to https://dehmelf.github.io
