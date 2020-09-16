
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `ulearn`
--

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
CREATE TABLE IF NOT EXISTS `categorie` (
                                           `categorie_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
                                           `titre` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
                                           `description` char(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                                           PRIMARY KEY (`categorie_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`categorie_id`, `titre`, `description`) VALUES
(1, 'Bricolage', 'Description de bricolage'),
(2, 'Langues', 'Description de bricolage'),
(3, 'Cuisine', 'Description de cuisine'),
(4, 'Programmation', 'Description de programmation');

-- --------------------------------------------------------

--
-- Structure de la table `cours`
--

DROP TABLE IF EXISTS `cours`;
CREATE TABLE IF NOT EXISTS `cours` (
                                       `cours_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
                                       `users_id` int(10) UNSIGNED DEFAULT NULL,
                                       `titre` char(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                                       `texte` longtext COLLATE utf8mb4_unicode_ci,
                                       `video` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                                       `image` longblob,
                                       `categorie_id` smallint(5) UNSIGNED NOT NULL,
                                       `lien_marchand` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                                       PRIMARY KEY (`cours_id`),
                                       KEY `fk_users_id` (`users_id`),
                                       KEY `fk_categorie_id` (`categorie_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `progression`
--

DROP TABLE IF EXISTS `progression`;
CREATE TABLE IF NOT EXISTS `progression` (
                                             `score_parcours` int(3) DEFAULT NULL,
                                             `users_id` int(10) UNSIGNED NOT NULL,
                                             `cours_id` int(10) UNSIGNED NOT NULL,
                                             KEY `fk_cours_id` (`cours_id`),
                                             KEY `fk_users_id` (`users_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
                                          `id` int(11) NOT NULL AUTO_INCREMENT,
                                          `value` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                                          `cours_id` smallint(5) UNSIGNED NOT NULL,
                                          PRIMARY KEY (`id`),
                                          KEY `cours_id` (`cours_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `reponse`
--

DROP TABLE IF EXISTS `reponse`;
CREATE TABLE IF NOT EXISTS `reponse` (
                                         `id` int(11) NOT NULL AUTO_INCREMENT,
                                         `value` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
                                         `etat` tinyint(1) NOT NULL,
                                         `question_id` int(11) NOT NULL,
                                         PRIMARY KEY (`id`),
                                         KEY `question_id` (`question_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
                                      `users_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
                                      `nom` char(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                                      `prenom` char(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                                      `email` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                                      `password` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                                      `createur` tinyint(1) DEFAULT NULL,
                                      `score_global` int(11) DEFAULT NULL,
                                      PRIMARY KEY (`users_id`),
                                      UNIQUE KEY `users_users_id_uindex` (`users_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `reponse`
--
ALTER TABLE `reponse`
    ADD CONSTRAINT `reponse_question_id_fk` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
