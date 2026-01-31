// ==========================================
// 1. DONNÉES DES PROJETS (DÉTAILS)
// ==========================================
const projectsData = [
    {
        id: 1,
        title: "Détection de Fraude Bancaire (Temps Réel)",
        tech: "Python | SQL | FastAPI | Scikit-Learn",
        description: "Développement d'une architecture complète de détection d'anomalies pour sécuriser les transactions bancaires. Le système score chaque transaction en moins de 100ms pour bloquer les fraudes instantanément.",
        details: [
            "Création d'un pipeline de Machine Learning (Random Forest & Isolation Forest).",
            "Développement d'une API REST avec FastAPI pour recevoir les transactions.",
            "Visualisation des risques via un dashboard Streamlit connecté à la base SQL.",
            "Gestion des faux positifs pour améliorer la précision du modèle."
        ]
    },
    {
        id: 2,
        title: "ChatBot IA d'Orientation",
        tech: "Python | NLP | NLTK | TensorFlow",
        description: "Un assistant virtuel intelligent conçu pour aider les étudiants à trouver leur voie. Il utilise le Traitement du Langage Naturel (NLP) pour comprendre les questions ouvertes et proposer des parcours adaptés.",
        details: [
            "Analyse des intentions utilisateurs (Intent Recognition) avec des réseaux de neurones.",
            "Système de recommandation basé sur les compétences et intérêts de l'utilisateur.",
            "Interface interactive simple et conversation fluide.",
            "Entraînement du modèle sur un dataset de questions/réponses académiques."
        ]
    },
    {
        id: 3,
        title: "Analyse de Données Aériennes",
        tech: "Clustering | K-Means | SQL | Matplotlib",
        description: "Étude approfondie du marché mondial de l'aviation. L'objectif était de segmenter les compagnies aériennes selon la modernité et l'efficacité de leurs flottes.",
        details: [
            "Nettoyage et préparation d'un grand jeu de données (Data Cleaning).",
            "Utilisation de l'algorithme K-Means pour créer des groupes (clusters) de compagnies.",
            "Analyse statistique pour définir un 'Indice de Modernité'.",
            "Visualisation des parts de marché et des tendances géographiques."
        ]
    },
    {
        id: 4,
        title: "Pipeline de Données & Web Scraping",
        tech: "Python | BeautifulSoup | Selenium | Pandas",
        description: "Mise en place d'un flux automatisé (ETL) pour récupérer des données concurrentielles sur le web sans intervention humaine.",
        details: [
            "Scripts d'automatisation pour extraire les prix et descriptions produits.",
            "Nettoyage automatique des données brutes et stockage structuré (CSV/SQL).",
            "Contournement des protections anti-bot basiques.",
            "Génération de rapports hebdomadaires sur les tendances de marché."
        ]
    },
    {
        id: 5,
        title: "Système de Réservation TGV",
        tech: "HTML/CSS/JS | UX Design | Gestion de Projet",
        description: "Conception et développement d'une application web simulant un système de billetterie ferroviaire, axée sur l'expérience utilisateur.",
        details: [
            "Gestion des flux utilisateurs : Recherche, Sélection, Paiement.",
            "Design responsive adapté aux mobiles et tablettes.",
            "Logique JavaScript pour le calcul des prix et la gestion des places.",
            "Simulation de base de données en local Storage."
        ]
    },
    {
        id: 6,
        title: "Marketplace Intelligente (Hackathon)",
        tech: "Firebase | MySQL | Stripe API | Node.js",
        description: "Projet intensif réalisé en équipe lors d'un Hackathon. Une plateforme de vente avec estimation dynamique des prix.",
        details: [
            "Implémentation de l'authentification et base de données temps réel avec Firebase.",
            "Intégration de l'API Stripe pour gérer les paiements sécurisés.",
            "Algorithme simple d'estimation de prix selon l'offre et la demande.",
            "Architecture Backend robuste connectée à une base MySQL."
        ]
    },
    {
        id: 7,
        title: "Déploiement Cloud & Jeux Interactifs",
        tech: "AWS (EC2/S3) | JavaScript Avancé",
        description: "Série de projets visant à maîtriser l'infrastructure Cloud et la logique de programmation complexe.",
        details: [
            "Déploiement de projets Web sur instances AWS EC2 et stockage S3.",
            "Création de clones de jeux (PacMan, Scrabble) en Vanilla JS.",
            "Gestion des événements clavier et logique de collision.",
            "Optimisation des performances pour le web."
        ]
    }
];

// ==========================================
// 2. LOGIQUE MODALE (POPUP)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("project-modal");
    const closeBtn = document.querySelector(".close-btn");
    const modalTitle = document.getElementById("modal-title");
    const modalTech = document.getElementById("modal-tech");
    const modalDesc = document.getElementById("modal-desc");
    const modalDetails = document.getElementById("modal-details");
    const openButtons = document.querySelectorAll(".open-modal");

    // Ouvrir la modale au clic sur un bouton
    openButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const projectId = parseInt(btn.getAttribute("data-id"));
            const project = projectsData.find(p => p.id === projectId);

            if (project) {
                // Remplir les infos
                modalTitle.textContent = project.title;
                modalTech.textContent = project.tech;
                modalDesc.textContent = project.description;
                
                // Remplir la liste des détails
                modalDetails.innerHTML = "";
                project.details.forEach(detail => {
                    const div = document.createElement("div");
                    div.classList.add("detail-item");
                    // Ajout de l'icône check et du texte
                    div.innerHTML = `<i class="fas fa-check-circle" style="color:var(--secondary); margin-top:5px;"></i> <span style="margin-left:10px;">${detail}</span>`;
                    modalDetails.appendChild(div);
                });

                // Afficher la modale
                modal.style.display = "block";
                document.body.style.overflow = "hidden"; // Bloquer le scroll derrière
            }
        });
    });

    // Fermer avec le bouton X
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        });
    }

    // Fermer en cliquant en dehors de la fenêtre
    window.addEventListener("click", (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});


// ==========================================
// 3. ANIMATION TYPEWRITER (MACHINE À ÉCRIRE)
// ==========================================
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 50;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialisation TypeWriter
document.addEventListener('DOMContentLoaded', () => {
    const txtElement = document.querySelector('.txt-type');
    if (txtElement) {
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        new TypeWriter(txtElement, words, wait);
    }
});


// ==========================================
// 4. SCROLL REVEAL (ANIMATION D'APPARITION)
// ==========================================
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
// Déclencher une fois au chargement
revealOnScroll();


// ==========================================
// 5. MOBILE MENU
// ==========================================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if(hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
    });
}

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("nav-active");
    });
});
// --- BOUTON RETOUR HAUT ---
const scrollTopBtn = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add("active");
    } else {
        scrollTopBtn.classList.remove("active");
    }
});