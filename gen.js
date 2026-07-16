const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

// 1. PASS PAGE: A long, rich page.
const passHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Professional Services | Fixture Corp</title>
    <meta name="description" content="Expert professional services by Fixture Corp. We provide reliable solutions for your business needs." />
    <link rel="canonical" href="https://fixture.test/services/professional" />
</head>
<body>
    <header><a href="/">Home</a> <a href="/services/professional">Professional</a></header>
    <main>
        <h1>Professional Services in Test City</h1>
        <p>This is our premier service offering. We have been providing top-tier solutions for many years. Our clients trust our expertise. We pride ourselves on delivering excellent results, focusing on quality, speed, and customer satisfaction.</p>
        <p>Our methodology ensures that every project is handled with care. We assign dedicated professionals to evaluate requirements, create robust plans, and execute with precision. When unexpected challenges arise, our agile teams adapt quickly, implementing innovative solutions to keep projects on track. The industry has evolved significantly over the past decade, and we remain at the forefront of technological advancements, continuously training our staff in the latest methodologies and tools.</p>
        <p>Furthermore, our commitment extends beyond project completion. We offer comprehensive support and maintenance, ensuring long-term success. Many competitors focus solely on initial delivery, but we believe true value lies in sustained performance. We have partnered with numerous organizations across various sectors, from healthcare to finance, tailoring our approach to meet distinct regulatory and operational demands.</p>
        <p>Customer feedback is integral to our process. We actively solicit input at every stage, refining our deliverables to align perfectly with client vision. Transparency is a core value; we maintain open communication channels, providing regular progress reports and cost analyses. This proactive approach minimizes surprises and fosters strong, collaborative relationships.</p>
        <p>In addition to our core services, we provide strategic consulting. Our seasoned experts analyze market trends, identify growth opportunities, and develop actionable roadmaps. Whether you are a startup seeking to establish a foothold or an established enterprise looking to optimize operations, our strategic insights can drive significant improvements.</p>
        <p>We leverage advanced analytics to measure outcomes, quantifying the impact of our interventions. This data-driven approach allows us to demonstrate tangible return on investment, justifying every expenditure. Our holistic perspective ensures that all components of a business function cohesively, maximizing overall efficiency and profitability.</p>
        <p>In summary, our professional services encompass a wide array of capabilities, designed to elevate your business to new heights. We invite you to explore our portfolio and read testimonials from satisfied clients. Contact us today to schedule a consultation and discover how we can contribute to your success story.</p>
        <a href="/contact">Contact us</a>
        <a href="/about">About us</a>
    </main>
</body>
</html>`;
fs.mkdirSync(path.join(outDir, 'services'), { recursive: true });
fs.writeFileSync(path.join(outDir, 'services', 'professional.html'), passHtml);

// 2. REVIEW_REQUIRED PAGE: A pillar page with thin content (so it gets flagged but not excluded)
const reviewHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>About Fixture Corp</title>
    <meta name="description" content="Learn about us." />
    <link rel="canonical" href="https://fixture.test/about" />
</head>
<body>
    <header><a href="/">Home</a> <a href="/about">About</a></header>
    <main>
        <h1>About Us</h1>
        <p>We are Fixture Corp. We do things.</p>
        <a href="/contact">Contact</a>
    </main>
</body>
</html>`;
fs.writeFileSync(path.join(outDir, 'about.html'), reviewHtml);

// 3. EXCLUDED PAGE: A non-pillar page with a placeholder leak
const excludedHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Service Area [City]</title>
    <meta name="description" content="We serve [City]." />
    <link rel="canonical" href="https://fixture.test/locations/fake-city" />
</head>
<body>
    <header><a href="/">Home</a></header>
    <main>
        <h1>Service in [City]</h1>
        <p>Welcome to our page for [City]. We offer great services here in [City].</p>
    </main>
</body>
</html>`;
fs.mkdirSync(path.join(outDir, 'locations'), { recursive: true });
fs.writeFileSync(path.join(outDir, 'locations', 'fake-city.html'), excludedHtml);

console.log('Fixture pages created.');
