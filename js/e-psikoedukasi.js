/**
 * E-Psikoedukasi Module for NurseJiwa
 */

function initEPsychoeducation() {
  renderNurseJiwaEduList();
}

function renderNurseJiwaEduList() {
  const grid = document.getElementById("nj-edu-grid");
  if (!grid) return;

  grid.innerHTML = PSYCH_EDU_DATA.map(
    (item) => `
        <div class="card" onclick="openEduArticle('${item.id}')" style="cursor: pointer; transition: all 0.3s ease; border: 1px solid var(--border); padding: 1.5rem; position: relative; overflow: hidden;">
            <div style="position: absolute; top: 1rem; right: 1rem; font-size: 0.65rem; padding: 0.2rem 0.6rem; border-radius: 20px; background: ${item.color}20; color: ${item.color}; font-weight: 700;">${item.category}</div>
            <div style="background: ${item.color}15; color: ${item.color}; width: 45px; height: 45px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
                <i data-lucide="${item.icon}"></i>
            </div>
            <h4 style="margin-bottom: 0.5rem; color: var(--text-main);">${item.title}</h4>
            <p style="font-size: 0.8rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.5;">${item.content}</p>
        </div>
    `,
  ).join("");

  if (typeof lucide !== "undefined") lucide.createIcons();
}

function openEduArticle(id) {
  const article = PSYCH_EDU_DATA.find((a) => a.id === id);
  if (!article) return;

  Swal.fire({
    title: article.title,
    html: `
            <div class="clinical-content" style="text-align: left; max-height: 60vh; overflow-y: auto; padding-right: 0.5rem; line-height: 1.6;">
                <p>${article.content}</p>
                <div style="margin-top: 1.5rem; padding: 1rem; background: #f8fafc; border-radius: 8px; border: 1px dashed ${article.color};">
                    <strong>Catatan Edukasi:</strong> Gunakan informasi ini untuk memberikan HE (Health Education) kepada pasien atau keluarga saat melakukan intervensi keperawatan.
                </div>
            </div>
        `,
    confirmButtonText: "Selesai Membaca",
    confirmButtonColor: article.color,
    width: "80%",
  });
}
