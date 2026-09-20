const i18nData = {
    th: {
        nav_projects: "ผลงาน",
        nav_education: "การศึกษา",
        nav_contact: "ติดต่อ",
        btn_download: "โหลด Resume",
        lang_label: "EN 🌐",
        
        hero_name: "นาย ปัญญากร เขียวชู",
        hero_faculty: "วิศวกรรมคอมพิวเตอร์และระบบไอโอที",
        hero_major: "สาขาวิศวกรรมศาสตร์ (ระดับปริญญาตรี)",

        title_projects: "โปรเจกต์และผลงาน",
        btn_view_work: "คลิกดูการทำงาน ➔",
        modal_work_label: "ขั้นตอนและสถาปัตยกรรมการทำงานจริง:",

        proj1_title: "ระบบคาดการณ์การกระจายตัวของปลาทูในอ่าวไทย โดยใช้ AI (2569 - ปัจจุบัน)",
        proj1_short: "วิเคราะห์ข้อมูลสิ่งแวดล้อมทางทะเลเพื่อคาดการณ์ปริมาณการจับปลาทูผ่าน Machine Learning และ Web Dashboard",
        proj1_desc: `
            <p>ระบบคาดการณ์แบบครบวงจรที่ผสาน Machine Learning บน Python เข้ากับ Web Dashboard ด้วย PHP และ MySQL:</p>
            <ul style="padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.5rem;">
                <li><strong>การเตรียมและบูรณาการข้อมูล (Data Preprocessing & Integration):</strong> รวมข้อมูลปริมาณการจับปลา เครื่องมือประมง ร่วมกับปัจจัยทางทะเล ได้แก่ อุณหภูมิผิวน้ำทะเล (SST), คลอโรฟิลล์-เอ (Chlorophyll-a), ปริมาณฝน และความเร็วลม</li>
                <li><strong>แดชบอร์ด Linear Regression:</strong> คาดการณ์ปริมาณการจับปลาทูเป็นรายเดือนและรายจังหวัด พร้อมกราฟเปรียบเทียบค่าพยากรณ์กับค่าจริง</li>
            </ul>
            <img src="img/a1.png" class="workflow-preview-img" alt="Linear Regression Dashboard">
            <div class="img-caption">หน้าต่าง Linear Regression Dashboard แสดงการคาดการณ์และเปรียบเทียบกับค่าจริงรายเดือน</div>

            <h4 style="margin-top: 1.2rem; color: #0f172a;">1. โมเดลจำแนกกลุ่ม Random Forest Classification</h4>
            <p style="font-size: 0.9rem; color: #64748b;">จำแนกระดับความหนาแน่นของปลาทู (ต่ำ / ปานกลาง / สูง) พร้อมแสดงค่า Confusion Matrix, Precision, Recall และ F1-score</p>
            <img src="img/a2.png" class="workflow-preview-img" alt="Random Forest Classification UI">
            <div class="img-caption">หน้าต่าง Random Forest Classification แสดงผลลัพธ์และตัววัดประสิทธิภาพของโมเดล</div>

            <h4 style="margin-top: 1.2rem; color: #0f172a;">2. การจัดกลุ่มเชิงพื้นที่ด้วย K-Means & แผนที่ Heatmap</h4>
            <p style="font-size: 0.9rem; color: #64748b;">จัดกลุ่มพื้นที่ทะเลตามปัจจัยสิ่งแวดล้อม พร้อมแสดงตำแหน่งพื้นที่วิกฤตและจุดปลาชุกชุมบนแผนที่ GIS อ่าวไทยตอนบน</p>
            <img src="img/a3.png" class="workflow-preview-img" alt="K-Means Clustering UI">
            <div class="img-caption">หน้าต่าง K-Means Clustering แสดงการวิเคราะห์และแผนที่ Heatmap เชิงพื้นที่</div>
        `,

        proj2_title: "เว็บไซต์บริษัทและระบบ ERP บริหารจัดการธุรกิจกาแฟ (2568)",
        proj2_short: "เว็บแอปพลิเคชัน ERP ครบวงจรสำหรับจัดการกระบวนการผลิต จัดซื้อ-ขาย สต็อกสินค้า และงานฝ่ายบุคคล (HR)",
        proj2_desc: `
            <p>ระบบบริหารจัดการธุรกิจกาแฟที่ครอบคลุมทั้งหน้าเว็บแนะนำแบรนด์และระบบ ERP หลังบ้าน (BackEnd):</p>
            <ul style="padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.4rem; margin: 0.5rem 0 1rem;">
                <li><strong>หน้าร้าน Coffee Test EXPERIENCE:</strong> หน้าร้านออนไลน์สำหรับนำเสนอเมล็ดกาแฟและเครื่องดื่ม</li>
                <li><strong>ระบบรักษาความปลอดภัย & RBAC:</strong> ควบคุมสิทธิ์การเข้าใช้งานระบบตามบทบาทหน้าที่ของพนักงาน</li>
                <li><strong>ระบบคลังและการผลิต (Inventory & Production):</strong> ติดตามสต็อกเมล็ดกาแฟ Arabica/Robusta และรอบการคั่วการผลิต</li>
                <li><strong>ระบบทรัพยากรบุคคล (HR):</strong> บันทึกเวลาเข้างาน การลางาน และคำนวณเงินเดือนพนักงาน</li>
            </ul>

            <h4 style="margin-top: 1.2rem; color: #0f172a;">โมดูลบันทึกความต้องการจัดซื้อ (Purchase Requirement - PR)</h4>
            <p style="font-size: 0.9rem; color: #64748b;">หน้าสำหรับบันทึกและส่งคำขอจัดซื้อเมล็ดกาแฟ พร้อมคำนวณต้นทุนและจับคู่ข้อมูลคู่ค้า (Supplier) อัตโนมัติ</p>
            <img src="img/c2.png" class="workflow-preview-img" alt="Purchase Requirement Module">
            <div class="img-caption">หน้าจอระบบหลังบ้าน: โมดูล Purchase Requirement สำหรับสร้างใบขอสั่งซื้อวัตถุดิบกาแฟ</div>

            <h4 style="margin-top: 1.2rem; color: #0f172a;">โมดูลบันทึกและเพิ่มใบเสนอราคา (Quotation)</h4>
            <p style="font-size: 0.9rem; color: #64748b;">หน้าสำหรับบันทึกและสร้างใบเสนอราคาให้ลูกค้า</p>
            <img src="img/c3.png" class="workflow-preview-img" alt="Quotation Module">
            <div class="img-caption">หน้าจอระบบหลังบ้าน: โมดูล Quotation สำหรับสร้างใบเสนอราคา</div>
            
            <h4 style="margin-top: 1.2rem; color: #0f172a;">โมดูลบันทึกและจัดการแบบแผนการผลิต (Batch Production)</h4>
            <p style="font-size: 0.9rem; color: #64748b;">หน้าสำหรับวางแผน กำหนดจำนวนผลิต และติดตามล็อตการผลิต</p>
            <img src="img/c4.png" class="workflow-preview-img" alt="Batch Management Module">
            <div class="img-caption">หน้าจอระบบหลังบ้าน: โมดูล Batch สำหรับจัดการและติดตามรอบการผลิต</div>
            
            <h4 style="margin-top: 1.2rem; color: #0f172a;">โมดูลบันทึกและจัดการพนักงาน (Employee Management)</h4>
            <p style="font-size: 0.9rem; color: #64748b;">หน้าสำหรับบันทึกข้อมูล ประวัติ และจัดการสิทธิ์การเข้าใช้งานของพนักงาน การลางาน เเละ การจ่ายเงินเดือนเเละส่งข้อมูลไปบัญชี(Accounting)</p>
            <img src="img/e1.png" class="workflow-preview-img" alt="Employee Management Module1">
            <img src="img/e2.png" class="workflow-preview-img" alt="Employee Management Module2">
            <img src="img/e3.png" class="workflow-preview-img" alt="Employee Management Module3">
            <div class="img-caption">หน้าจอระบบหลังบ้าน: โมดูล Employee สำหรับจัดการข้อมูลและสิทธิ์พนักงาน</div>          
        `,

        title_education: "ประวัติการศึกษา",
        edu1_year: "2566 - 2570 (ปี 4)",
        edu1_degree: "ระดับปริญญาตรี (วศ.บ.)",
        edu1_school: "มหาวิทยาลัยเทคโนโลยีราชมงคลกรุงเทพ (RMUTK)",
        edu1_detail: "คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์และระบบไอโอที | เกรดเฉลี่ย: 2.95",
        
        edu2_year: "มัธยมศึกษาตอนปลาย (ม.ปลาย)",
        edu2_degree: "สายการเรียน อังกฤษ - คอมพิวเตอร์",
        edu2_school: "โรงเรียนวัดประดู่ในทรงธรรม",
        edu2_detail: "พื้นฐานการใช้ภาษาอังกฤษ และคอมพิวเตอร์เบื้องต้น | เกรดเฉลี่ย: 3.59",

        title_contact: "ช่องทางการติดต่อ",
        contact_phone: "เบอร์โทรศัพท์",
        contact_email: "อีเมล",
        contact_github: "GitHub / ผลงาน"
    },
    en: {
        nav_projects: "Projects",
        nav_education: "Education",
        nav_contact: "Contact",
        btn_download: "Download",
        lang_label: "ไทย 🇹🇭",
        
        hero_name: "Mr. Panyakorn Khaiwchoo",
        hero_faculty: "Computer Engineering and IoT System",
        hero_major: "Bachelor's Degree (Field of Study: Engineering)",

        title_projects: "Projects & Experience",
        btn_view_work: "View Workflow ➔",
        modal_work_label: "Execution Process & Architecture:",

        proj1_title: "Mackerel Distribution Prediction System Using AI (2026 - Present)",
        proj1_short: "Predicting mackerel distribution and catch volume in the Upper Gulf of Thailand via Machine Learning and Web Dashboard.",
        proj1_desc: `
            <p>Comprehensive predictive ecosystem integrating Python ML models with PHP web dashboards:</p>
            <ul style="padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.5rem;">
                <li><strong>Data Preprocessing & Integration:</strong> Formatted marine indicators (SST, Chlorophyll-a, rainfall, wind velocity) with historical catch volumes.</li>
                <li><strong>Linear Regression Dashboard:</strong> Provides month-by-month and province-based forecasts compared directly with actual harvest figures.</li>
            </ul>
            <img src="img/a1.png" class="workflow-preview-img" alt="Linear Regression Dashboard UI">
            <div class="img-caption">Linear Regression Dashboard displaying predicted vs actual mackerel catches.</div>

            <h4 style="margin-top: 1.2rem; color: #0f172a;">1. Random Forest Classification Module</h4>
            <p style="font-size: 0.9rem; color: #64748b;">Classifies mackerel density levels (Low / Medium / High) accompanied by real-time Confusion Matrix, Precision, Recall, and F1-score evaluation metrics.</p>
            <img src="img/a2.png" class="workflow-preview-img" alt="Random Forest Classification UI">
            <div class="img-caption">Random Forest Classification Dashboard showing live model metrics and prediction output.</div>

            <h4 style="margin-top: 1.2rem; color: #0f172a;">2. K-Means Spatial Clustering Heatmap</h4>
            <p style="font-size: 0.9rem; color: #64748b;">Applies spatial grouping based on dynamic environmental indicators, visualizing high-abundance vs critical marine sectors on an interactive GIS map.</p>
            <img src="img/a3.png" class="workflow-preview-img" alt="K-Means Clustering UI">
            <div class="img-caption">K-Means Clustering Spatial Distribution Heatmap over the Upper Gulf of Thailand.</div>
        `,

        proj2_title: "Coffee Company Website - Business Management & ERP System (2025)",
        proj2_short: "A comprehensive web-based ERP handling production, sales, procurement, inventory, and HR management.",
        proj2_desc: `
            <p>An enterprise-grade coffee management platform covering customer-facing web presence and back-office ERP modules:</p>
            <ul style="padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.4rem; margin: 0.5rem 0 1rem;">
                <li><strong>Coffee Test EXPERIENCE:</strong> Modern storefront interface designed for coffee beans and beverage presentations.</li>
                <li><strong>Security & RBAC:</strong> Granular permissions controlling staff access across administrative modules.</li>
                <li><strong>Inventory & Production:</strong> Real-time tracking of Arabica / Robusta green bean stock levels and roast batches.</li>
                <li><strong>Human Resources:</strong> Integrated attendance logs, leave submissions, and payroll calculation.</li>
            </ul>

            <h4 style="margin-top: 1.2rem; color: #0f172a;">Purchase Requirement (PR) Operations Module</h4>
            <p style="font-size: 0.9rem; color: #64748b;">Workflow view illustrating automated purchase requisitions for coffee bean supplies mapped to designated vendors.</p>
            <img src="img/c2.png" class="workflow-preview-img" alt="Purchase Requirement Module">
            <div class="img-caption">BackEnd Module: Purchase Requirement requisition interface with inventory cost calculations.</div>


            <h4 style="margin-top: 1.2rem; color: #0f172a;">Quotation Management Module</h4>
            <p style="font-size: 0.9rem; color: #64748b;">Page for recording and generating sales quotations for clients.</p>
            <img src="img/c3.png" class="workflow-preview-img" alt="Quotation Module">
            <div class="img-caption">Back-office Interface: Quotation module for creating quotations</div>
            
            <h4 style="margin-top: 1.2rem; color: #0f172a;">Batch Production Management Module</h4>
            <p style="font-size: 0.9rem; color: #64748b;">Page for production planning, setting output quantities, and tracking batch lots.</p>
            <img src="img/c4.png" class="workflow-preview-img" alt="Batch Management Module">
            <div class="img-caption">Back-office Interface: Batch module for managing and tracking production cycles</div>
            
            <h4 style="margin-top: 1.2rem; color: #0f172a;">Employee Management Module</h4>
            <p style="font-size: 0.9rem; color: #64748b;">Page for recording employee profiles, managing access permissions, handling leave requests, processing payroll, and syncing data with Accounting.</p>
            <img src="img/e1.png" class="workflow-preview-img" alt="Employee Management Module 1">
            <img src="img/e2.png" class="workflow-preview-img" alt="Employee Management Module 2">
            <img src="img/e3.png" class="workflow-preview-img" alt="Employee Management Module 3">
            <div class="img-caption">Back-office Interface: Employee module for managing staff data and access rights</div>
        `,

        title_education: "Education",
        edu1_year: "4th Year (Graduating 2026 / 2027)",
        edu1_degree: "Bachelor's Degree (B.Eng.)",
        edu1_school: "Rajamangala University of Technology Krungthep (RMUTK)",
        edu1_detail: "Computer Engineering and IoT System | GPA: 2.95",
        
        edu2_year: "High School Diploma",
        edu2_degree: "English - Computer Program",
        edu2_school: "Wat Pradunasongtham School",
        edu2_detail: "Fundamentals of English communication and computer technology | GPA: 3.59",

        title_contact: "Contact Information",
        contact_phone: "Phone",
        contact_email: "Email",
        contact_github: "GitHub"
    }
};

let currentLang = "th";

function toggleLanguage() {
    currentLang = (currentLang === "th") ? "en" : "th";
    document.documentElement.lang = currentLang;
    
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (i18nData[currentLang][key]) {
            el.innerText = i18nData[currentLang][key];
        }
    });

    document.getElementById("langBtn").innerText = i18nData[currentLang].lang_label;

    // หากเปิดหน้าต่าง Modal ค้างอยู่ ให้รีเฟรชภาษาใน Modal ทันที
    const modal = document.getElementById("projectModal");
    if (modal && modal.style.display === "flex") {
        const activeKey = modal.getAttribute("data-active-project");
        if (activeKey) openModal(activeKey);
    }
}

function downloadResume() {
    const fileTh = "img/Panyakorn_khaiwchoo_Resume TH.jpg";
    const fileEng = "img/Panyakorn_khaiwchoo_Resume ENG.jpg";
    const targetFile = (currentLang === "th") ? fileTh : fileEng;
    const downloadName = (currentLang === "th") ? "Panyakorn_khaiwchoo_Resume TH.jpg" : "Panyakorn_khaiwchoo_Resume ENG.jpg";

    const link = document.createElement("a");
    link.href = targetFile;
    link.download = downloadName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

function openModal(projectKey) {
    modal.setAttribute("data-active-project", projectKey);
    modalTitle.innerText = i18nData[currentLang][`${projectKey}_title`];
    modalDesc.innerHTML = i18nData[currentLang][`${projectKey}_desc`];
    modal.style.display = "flex";
}

function forceCloseModal() {
    modal.style.display = "none";
}

function closeModal(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}