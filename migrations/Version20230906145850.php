<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230906145850 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE cab (id INT AUTO_INCREMENT NOT NULL, nature_piece_id INT DEFAULT NULL, type_piece VARCHAR(255) DEFAULT NULL, date_operation DATETIME DEFAULT NULL, autre_information VARCHAR(255) DEFAULT NULL, type_paiement VARCHAR(255) DEFAULT NULL, type_banque INT DEFAULT NULL, cheq_num VARCHAR(255) DEFAULT NULL, cheq_type VARCHAR(255) DEFAULT NULL, cheq_bnq VARCHAR(255) DEFAULT NULL, id_local INT DEFAULT NULL, id_systeme INT DEFAULT NULL, id_site INT DEFAULT NULL, description_site VARCHAR(255) DEFAULT NULL, id_operation VARCHAR(255) DEFAULT NULL, description_operation VARCHAR(255) DEFAULT NULL, id_piece INT DEFAULT NULL, date_piece DATETIME DEFAULT NULL, montant_initial DOUBLE PRECISION DEFAULT NULL, montant_remise DOUBLE PRECISION DEFAULT NULL, montant_retenu DOUBLE PRECISION DEFAULT NULL, montant_net DOUBLE PRECISION DEFAULT NULL, montant_autre1 DOUBLE PRECISION DEFAULT NULL, montant_autre2 DOUBLE PRECISION DEFAULT NULL, flag1 INT DEFAULT NULL, flag2 TINYINT(1) DEFAULT NULL, flag3 TINYINT(1) DEFAULT NULL, flag4 TINYINT(1) DEFAULT NULL, flag5 TINYINT(1) DEFAULT NULL, id_doc1_asso VARCHAR(255) DEFAULT NULL, id_doc2_asso VARCHAR(255) DEFAULT NULL, date_interf DATETIME DEFAULT NULL, description_piece VARCHAR(255) DEFAULT NULL, date_creation_piece DATETIME DEFAULT NULL, description_tier_piece VARCHAR(255) DEFAULT NULL, id_piece_liee VARCHAR(255) DEFAULT NULL, id_tier_piece VARCHAR(255) DEFAULT NULL, id_grpt_ops VARCHAR(255) DEFAULT NULL, description_grpt_ops VARCHAR(255) DEFAULT NULL, id_grpt_financier VARCHAR(255) DEFAULT NULL, date_grpt_financier DATETIME DEFAULT NULL, description_systeme VARCHAR(255) DEFAULT NULL, devise VARCHAR(255) DEFAULT NULL, designiation_piece VARCHAR(255) DEFAULT NULL, INDEX IDX_6A8AF6F932AE6AB8 (nature_piece_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE det (id INT AUTO_INCREMENT NOT NULL, cab_id INT DEFAULT NULL, rassembleur_id INT DEFAULT NULL, description_rassembleur VARCHAR(255) DEFAULT NULL, montant_initial_rassembleur DOUBLE PRECISION DEFAULT NULL, montant_retenu_rassembleur DOUBLE PRECISION DEFAULT NULL, montant_remise_rassembleur DOUBLE PRECISION DEFAULT NULL, montant_net_rassembleur DOUBLE PRECISION DEFAULT NULL, montant_autre1_rassembleur DOUBLE PRECISION DEFAULT NULL, montant_autre2_rassembleur DOUBLE PRECISION DEFAULT NULL, quantite_rassembleur DOUBLE PRECISION DEFAULT NULL, compte_comptable VARCHAR(255) DEFAULT NULL, autre_information VARCHAR(255) DEFAULT NULL, sens INT DEFAULT NULL, montant_mad DOUBLE PRECISION DEFAULT NULL, INDEX IDX_FF7D902993DFA100 (cab_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE nature_piece (id INT AUTO_INCREMENT NOT NULL, designation VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ua_technique_det (id INT AUTO_INCREMENT NOT NULL, det_id INT DEFAULT NULL, quantite DOUBLE PRECISION DEFAULT NULL, prix_unitaire DOUBLE PRECISION DEFAULT NULL, tva DOUBLE PRECISION DEFAULT NULL, remise DOUBLE PRECISION DEFAULT NULL, article VARCHAR(255) DEFAULT NULL, observation VARCHAR(255) DEFAULT NULL, INDEX IDX_8A117534E283F3B (det_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE cab ADD CONSTRAINT FK_6A8AF6F932AE6AB8 FOREIGN KEY (nature_piece_id) REFERENCES nature_piece (id)');
        $this->addSql('ALTER TABLE det ADD CONSTRAINT FK_FF7D902993DFA100 FOREIGN KEY (cab_id) REFERENCES cab (id)');
        $this->addSql('ALTER TABLE ua_technique_det ADD CONSTRAINT FK_8A117534E283F3B FOREIGN KEY (det_id) REFERENCES det (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cab DROP FOREIGN KEY FK_6A8AF6F932AE6AB8');
        $this->addSql('ALTER TABLE det DROP FOREIGN KEY FK_FF7D902993DFA100');
        $this->addSql('ALTER TABLE ua_technique_det DROP FOREIGN KEY FK_8A117534E283F3B');
        $this->addSql('DROP TABLE cab');
        $this->addSql('DROP TABLE det');
        $this->addSql('DROP TABLE nature_piece');
        $this->addSql('DROP TABLE ua_technique_det');
    }
}
