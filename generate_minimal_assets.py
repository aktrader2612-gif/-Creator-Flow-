import os
from PIL import Image, ImageDraw, ImageFont

# Set up paths
output_dir = r"C:\Users\Cominn\.gemini\antigravity\scratch\creatorflow\assets\images"
os.makedirs(output_dir, exist_ok=True)

# Helper for loading fonts
def get_font(size, bold=False):
    try:
        font_name = "arialbd.ttf" if bold else "arial.ttf"
        return ImageFont.truetype(font_name, size)
    except:
        return ImageFont.load_default()

# -------------------------------------------------------------
# 1. HERO DASHBOARD IMAGE (1200 x 675)
# -------------------------------------------------------------
def make_hero_dashboard():
    w, h = 1200, 675
    img = Image.new("RGB", (w, h), "#ffffff")
    draw = ImageDraw.Draw(img)

    # Main Card Outline
    draw.rounded_rectangle([40, 30, w-40, h-30], radius=20, fill="#ffffff", outline="#e2e8f0", width=2)
    
    # Royal Blue Header Bar
    draw.rounded_rectangle([40, 30, w-40, 110], radius=20, fill="#235AE5")
    draw.rectangle([40, 70, w-40, 110], fill="#235AE5")

    # Header Logo & Text
    font_title = get_font(24, bold=True)
    font_subtitle = get_font(14, bold=False)
    draw.text((80, 55), "CreatorFlow AI Workspace", fill="#ffffff", font=font_title)
    draw.rounded_rectangle([w-260, 52, w-70, 88], radius=18, fill="#1d4ed8")
    draw.text((w-240, 60), "● AI Workflow Active", fill="#ffffff", font=get_font(14, bold=True))

    # Card 1: Prompts Library
    draw.rounded_rectangle([80, 150, 410, 580], radius=16, fill="#ffffff", outline="#e2e8f0", width=2)
    draw.rounded_rectangle([100, 175, 150, 225], radius=12, fill="#eff6ff")
    draw.text((115, 185), "⚡", fill="#235AE5", font=get_font(24))
    draw.text((100, 245), "Prompts Library", fill="#0f172a", font=get_font(22, bold=True))
    draw.text((100, 280), "24+ Tested AI Formulas", fill="#64748b", font=get_font(15))

    # Prompts Card Bars
    draw.rounded_rectangle([100, 320, 390, 365], radius=8, fill="#f8fafc", outline="#cbd5e1", width=1)
    draw.rounded_rectangle([115, 338, 260, 348], radius=4, fill="#235AE5")
    
    draw.rounded_rectangle([100, 380, 390, 425], radius=8, fill="#f8fafc", outline="#cbd5e1", width=1)
    draw.rounded_rectangle([115, 398, 300, 408], radius=4, fill="#94a3b8")

    draw.rounded_rectangle([100, 440, 390, 485], radius=8, fill="#f8fafc", outline="#cbd5e1", width=1)
    draw.rounded_rectangle([115, 458, 220, 468], radius=4, fill="#94a3b8")

    draw.rounded_rectangle([100, 510, 390, 555], radius=10, fill="#235AE5")
    draw.text((245, 523), "Copy Prompt", fill="#ffffff", font=get_font(16, bold=True), anchor="mm")

    # Card 2: 6-Stage Workflow
    draw.rounded_rectangle([440, 150, 760, 580], radius=16, fill="#ffffff", outline="#235AE5", width=3)
    draw.rounded_rectangle([460, 175, 510, 225], radius=12, fill="#235AE5")
    draw.text((475, 185), "🔄", fill="#ffffff", font=get_font(24))
    draw.text((525, 182), "6-Stage Workflow", fill="#0f172a", font=get_font(22, bold=True))
    draw.text((525, 212), "Repeatable Content Pipeline", fill="#64748b", font=get_font(14))

    # Workflow Steps
    steps = [
        ("01 IDEATION", "#235AE5"),
        ("02 OUTLINE", "#3b82f6"),
        ("03 DRAFT", "#235AE5"),
        ("04 EDIT & REFINE", "#3b82f6"),
        ("05 SEO OPTIMIZATION", "#235AE5"),
        ("06 REPURPOSE", "#1d4ed8")
    ]

    for i, (text, col) in enumerate(steps):
        y_pos = 265 + i * 48
        draw.rounded_rectangle([460, y_pos, 740, y_pos + 38], radius=8, fill="#f0f5ff", outline="#bfdbfe", width=1)
        draw.text((480, y_pos + 10), text, fill=col, font=get_font(14, bold=True))

    # Card 3: Freelance ROI
    draw.rounded_rectangle([790, 150, 1120, 580], radius=16, fill="#ffffff", outline="#e2e8f0", width=2)
    draw.rounded_rectangle([810, 175, 860, 225], radius=12, fill="#ecfdf5")
    draw.text((825, 185), "📈", fill="#10b981", font=get_font(24))
    draw.text((810, 245), "Freelance ROI", fill="#0f172a", font=get_font(22, bold=True))
    draw.text((810, 280), "5x Faster Deliverables", fill="#64748b", font=get_font(15))

    # Upward Curve Line Simulation
    draw.rounded_rectangle([810, 320, 1100, 480], radius=12, fill="#f8fafc", outline="#e2e8f0", width=1)
    points = [(830, 450), (880, 430), (940, 390), (1000, 360), (1080, 330)]
    draw.line(points, fill="#235AE5", width=5)
    for p in points:
        draw.ellipse([p[0]-5, p[1]-5, p[0]+5, p[1]+5], fill="#235AE5")

    draw.rounded_rectangle([810, 510, 1100, 555], radius=10, fill="#235AE5")
    draw.text((955, 523), "+250% Productivity", fill="#ffffff", font=get_font(17, bold=True), anchor="mm")

    img.save(os.path.join(output_dir, "hero_dashboard.jpg"), quality=95)
    print("Created hero_dashboard.jpg")

# -------------------------------------------------------------
# 2. WORKFLOW PIPELINE IMAGE (1200 x 450)
# -------------------------------------------------------------
def make_workflow_pipeline():
    w, h = 1200, 450
    img = Image.new("RGB", (w, h), "#ffffff")
    draw = ImageDraw.Draw(img)

    # Canvas Border
    draw.rounded_rectangle([20, 20, w-20, h-20], radius=16, fill="#ffffff", outline="#e2e8f0", width=2)

    # Title & Subtitle
    draw.text((w//2, 60), "6-STAGE AI CONTENT WORKFLOW PIPELINE", fill="#0f172a", font=get_font(26, bold=True), anchor="mm")
    draw.text((w//2, 95), "Repeatable, High-Leverage Content Automation System", fill="#235AE5", font=get_font(15, bold=True), anchor="mm")

    # Connecting Line
    draw.line([(80, 230), (1120, 230)], fill="#cbd5e1", width=4)

    # 6 Step Cards
    step_data = [
        ("01", "Ideation", "💡", 60),
        ("02", "Outline", "📋", 235),
        ("03", "Draft", "✍️", 410),
        ("04", "Edit", "🔍", 585),
        ("05", "SEO", "⚡", 760),
        ("06", "Repurpose", "🔄", 935)
    ]

    for num, label, icon, x in step_data:
        # Card Body
        draw.rounded_rectangle([x, 140, x+165, 330], radius=16, fill="#ffffff", outline="#235AE5", width=2)
        # Circle Badge
        draw.ellipse([x+57, 160, x+107, 210], fill="#235AE5")
        draw.text((x+82, 176), num, fill="#ffffff", font=get_font(18, bold=True), anchor="mm")
        # Icon & Label
        draw.text((x+82, 245), icon, fill="#0f172a", font=get_font(32), anchor="mm")
        draw.text((x+82, 290), label, fill="#0f172a", font=get_font(17, bold=True), anchor="mm")

    # Bottom Accent Bar
    draw.rounded_rectangle([60, 365, w-60, 405], radius=10, fill="#235AE5")
    draw.text((w//2, 385), "High-Speed Pipeline  •  Copy-Paste Automation  •  Multichannel Distribution", fill="#ffffff", font=get_font(15, bold=True), anchor="mm")

    img.save(os.path.join(output_dir, "workflow_pipeline.jpg"), quality=95)
    print("Created workflow_pipeline.jpg")

# -------------------------------------------------------------
# 3. FREELANCE GROWTH IMAGE (1200 x 500)
# -------------------------------------------------------------
def make_freelance_growth():
    w, h = 1200, 500
    img = Image.new("RGB", (w, h), "#ffffff")
    draw = ImageDraw.Draw(img)

    # Canvas Border
    draw.rounded_rectangle([30, 30, w-30, h-30], radius=20, fill="#ffffff", outline="#e2e8f0", width=2)

    # Header Title
    draw.text((80, 75), "FREELANCER PRODUCTIVITY & ROI ANALYSIS", fill="#0f172a", font=get_font(24, bold=True))

    # Metric Badges
    badges = [
        ("PROPOSAL WIN RATE", "94.2%", 80, False),
        ("DELIVERABLE SPEED", "5x Faster", 330, False),
        ("MONTHLY TIME SAVED", "+42 Hours", 580, True)
    ]

    for title, val, x, is_blue in badges:
        bg_col = "#235AE5" if is_blue else "#f8fafc"
        text_col = "#ffffff" if is_blue else "#0f172a"
        sub_col = "#ffffff" if is_blue else "#64748b"
        border_col = "#235AE5" if is_blue else "#e2e8f0"

        draw.rounded_rectangle([x, 120, x+220, 200], radius=14, fill=bg_col, outline=border_col, width=1)
        draw.text((x+20, 140), title, fill=sub_col, font=get_font(12, bold=True))
        draw.text((x+20, 165), val, fill=text_col, font=get_font(24, bold=True))

    # Growth Chart Curve Section
    draw.line([(80, 420), (w-80, 420)], fill="#e2e8f0", width=2)
    draw.line([(80, 340), (w-80, 340)], fill="#f1f5f9", width=1)
    draw.line([(80, 260), (w-80, 260)], fill="#f1f5f9", width=1)

    chart_points = [(80, 410), (280, 380), (480, 330), (680, 280), (880, 240), (1080, 220)]
    draw.line(chart_points, fill="#235AE5", width=5)

    for px, py in chart_points:
        draw.ellipse([px-7, py-7, px+7, py+7], fill="#235AE5", outline="#ffffff", width=2)

    # Highlight Pill
    draw.rounded_rectangle([960, 175, 1100, 210], radius=8, fill="#235AE5")
    draw.text((1030, 192), "+250% Growth", fill="#ffffff", font=get_font(14, bold=True), anchor="mm")

    img.save(os.path.join(output_dir, "freelance_growth.jpg"), quality=95)
    print("Created freelance_growth.jpg")

if __name__ == "__main__":
    make_hero_dashboard()
    make_workflow_pipeline()
    make_freelance_growth()
