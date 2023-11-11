<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231104173213 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE ptype_contract (id INT AUTO_INCREMENT NOT NULL, designation VARCHAR(255) DEFAULT NULL, abreviation VARCHAR(70) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tcnss_a00 (id INT AUTO_INCREMENT NOT NULL, type_enreg VARCHAR(3) DEFAULT NULL, identi_transfert VARCHAR(14) DEFAULT NULL, cat VARCHAR(2) DEFAULT NULL, filler VARCHAR(241) DEFAULT NULL, periode INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tcnss_a01 (id INT AUTO_INCREMENT NOT NULL, cnssa00_id INT DEFAULT NULL, type_enreg VARCHAR(3) DEFAULT NULL, num_affilie VARCHAR(7) DEFAULT NULL, periode VARCHAR(6) DEFAULT NULL, raison_sociale VARCHAR(40) DEFAULT NULL, activite VARCHAR(40) DEFAULT NULL, adresse VARCHAR(120) DEFAULT NULL, ville VARCHAR(20) DEFAULT NULL, code_postal VARCHAR(6) DEFAULT NULL, code_agence VARCHAR(2) DEFAULT NULL, date_emission VARCHAR(8) DEFAULT NULL, date_exig VARCHAR(8) DEFAULT NULL, INDEX IDX_A98C7BCDB906510C (cnssa00_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tcnss_a02 (id INT AUTO_INCREMENT NOT NULL, contract_id INT DEFAULT NULL, cnssa00_id INT DEFAULT NULL, type_enreg VARCHAR(3) DEFAULT NULL, num_affilie VARCHAR(7) DEFAULT NULL, periode VARCHAR(6) DEFAULT NULL, num_assure VARCHAR(9) DEFAULT NULL, nom_prenom VARCHAR(60) DEFAULT NULL, enfants VARCHAR(2) DEFAULT NULL, af_apayer VARCHAR(6) DEFAULT NULL, af_adeduire VARCHAR(6) NOT NULL, af_net_apayer VARCHAR(6) DEFAULT NULL, af_areverser VARCHAR(6) DEFAULT NULL, n_jours_declares VARCHAR(2) DEFAULT NULL, n_salaire_reel VARCHAR(13) DEFAULT NULL, n_salaire_plaf VARCHAR(9) DEFAULT NULL, l_situation VARCHAR(2) DEFAULT NULL, l_situation_num INT DEFAULT NULL, s_ctr VARCHAR(19) DEFAULT NULL, filler VARCHAR(155) DEFAULT NULL, site VARCHAR(60) DEFAULT NULL, statut VARCHAR(60) DEFAULT NULL, INDEX IDX_30852A772576E0FD (contract_id), INDEX IDX_30852A77B906510C (cnssa00_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tcnss_a03 (id INT AUTO_INCREMENT NOT NULL, cnssa00_id INT DEFAULT NULL, type_enreg VARCHAR(3) DEFAULT NULL, num_affilie VARCHAR(7) DEFAULT NULL, periode VARCHAR(6) DEFAULT NULL, nbr_salaries VARCHAR(6) DEFAULT NULL, t_enfants VARCHAR(6) DEFAULT NULL, t_af_apayer VARCHAR(12) DEFAULT NULL, t_af_adeduire VARCHAR(12) DEFAULT NULL, t_af_net_apayer VARCHAR(12) DEFAULT NULL, t_num_imma VARCHAR(15) DEFAULT NULL, t_af_areverser VARCHAR(12) DEFAULT NULL, t_jours_declares VARCHAR(6) DEFAULT NULL, t_salaire_reel VARCHAR(15) DEFAULT NULL, t_salaire_plaf VARCHAR(13) DEFAULT NULL, t_ctr VARCHAR(19) DEFAULT NULL, filler VARCHAR(116) DEFAULT NULL, INDEX IDX_47821AE1B906510C (cnssa00_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tcnss_b00 (id INT AUTO_INCREMENT NOT NULL, cnssa00_id INT DEFAULT NULL, type_enreg VARCHAR(3) DEFAULT NULL, identi_transfert VARCHAR(14) DEFAULT NULL, cat VARCHAR(2) DEFAULT NULL, filler VARCHAR(241) DEFAULT NULL, periode VARCHAR(6) DEFAULT NULL, UNIQUE INDEX UNIQ_DCCDF502B906510C (cnssa00_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tcnss_b01 (id INT AUTO_INCREMENT NOT NULL, cnssb00_id INT DEFAULT NULL, type_enreg VARCHAR(3) DEFAULT NULL, num_affilie VARCHAR(7) DEFAULT NULL, periode VARCHAR(6) DEFAULT NULL, raison_sociale VARCHAR(40) DEFAULT NULL, activite VARCHAR(40) DEFAULT NULL, adresse VARCHAR(120) DEFAULT NULL, ville VARCHAR(20) DEFAULT NULL, code_postal VARCHAR(6) DEFAULT NULL, code_agence VARCHAR(2) DEFAULT NULL, date_emission VARCHAR(8) DEFAULT NULL, date_exig VARCHAR(8) DEFAULT NULL, INDEX IDX_ABCAC5943F9223A2 (cnssb00_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tcnss_b02 (id INT AUTO_INCREMENT NOT NULL, contract_id INT DEFAULT NULL, cnssb00_id INT DEFAULT NULL, type_enreg VARCHAR(3) DEFAULT NULL, num_affilie VARCHAR(7) DEFAULT NULL, periode VARCHAR(6) DEFAULT NULL, num_assure VARCHAR(9) DEFAULT NULL, nom_prenom VARCHAR(60) DEFAULT NULL, enfants VARCHAR(2) DEFAULT NULL, af_apayer VARCHAR(6) DEFAULT NULL, af_adeduire VARCHAR(6) DEFAULT NULL, af_net_apayer VARCHAR(6) DEFAULT NULL, af_areverser VARCHAR(6) DEFAULT NULL, n_jours_declares VARCHAR(2) DEFAULT NULL, n_salaire_reel VARCHAR(13) DEFAULT NULL, n_salaire_plaf VARCHAR(9) DEFAULT NULL, l_situation VARCHAR(255) DEFAULT NULL, l_situation_num INT DEFAULT NULL, s_ctr VARCHAR(19) DEFAULT NULL, filler VARCHAR(155) DEFAULT NULL, site VARCHAR(60) DEFAULT NULL, statut VARCHAR(60) DEFAULT NULL, INDEX IDX_32C3942E2576E0FD (contract_id), INDEX IDX_32C3942E3F9223A2 (cnssb00_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tcnss_b03 (id INT AUTO_INCREMENT NOT NULL, cnssb00_id INT DEFAULT NULL, type_enreg VARCHAR(3) DEFAULT NULL, num_affilie VARCHAR(7) DEFAULT NULL, periode VARCHAR(6) DEFAULT NULL, nbr_salaries VARCHAR(6) DEFAULT NULL, t_enfants VARCHAR(66) DEFAULT NULL, t_af_apayer VARCHAR(12) DEFAULT NULL, t_af_adeduire VARCHAR(12) DEFAULT NULL, t_af_net_apayer VARCHAR(12) DEFAULT NULL, t_num_imma VARCHAR(15) DEFAULT NULL, t_af_areverser VARCHAR(12) DEFAULT NULL, t_jours_declares VARCHAR(6) DEFAULT NULL, t_salaire_reel VARCHAR(15) DEFAULT NULL, t_salaire_plaf VARCHAR(13) DEFAULT NULL, t_ctr VARCHAR(15) DEFAULT NULL, filler VARCHAR(120) DEFAULT NULL, INDEX IDX_45C4A4B83F9223A2 (cnssb00_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tcnss_b04 (id INT AUTO_INCREMENT NOT NULL, contract_id INT DEFAULT NULL, cnssb00_id INT DEFAULT NULL, type_enreg VARCHAR(3) DEFAULT NULL, num_affilie VARCHAR(7) DEFAULT NULL, periode VARCHAR(6) DEFAULT NULL, num_assure VARCHAR(9) DEFAULT NULL, nom_prenom VARCHAR(60) DEFAULT NULL, num_cin VARCHAR(8) DEFAULT NULL, nbr_jours VARCHAR(2) DEFAULT NULL, sal_reel VARCHAR(13) DEFAULT NULL, sal_plaf VARCHAR(9) DEFAULT NULL, s_ctr VARCHAR(19) DEFAULT NULL, filler VARCHAR(124) DEFAULT NULL, site VARCHAR(60) DEFAULT NULL, INDEX IDX_DBA0311B2576E0FD (contract_id), INDEX IDX_DBA0311B3F9223A2 (cnssb00_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tcnss_b05 (id INT AUTO_INCREMENT NOT NULL, cnssb00_id INT DEFAULT NULL, type_enreg VARCHAR(3) DEFAULT NULL, num_affilie VARCHAR(7) DEFAULT NULL, periode VARCHAR(6) DEFAULT NULL, nbr_salaries VARCHAR(6) DEFAULT NULL, t_num_imma VARCHAR(15) DEFAULT NULL, t_jours_declares VARCHAR(6) DEFAULT NULL, t_salaire_reel VARCHAR(15) DEFAULT NULL, t_salaire_plaf VARCHAR(13) DEFAULT NULL, t_ctr VARCHAR(13) DEFAULT NULL, filler VARCHAR(176) DEFAULT NULL, INDEX IDX_ACA7018D3F9223A2 (cnssb00_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tcnss_b06 (id INT AUTO_INCREMENT NOT NULL, cnssb00_id INT DEFAULT NULL, type_enreg VARCHAR(3) DEFAULT NULL, num_affilie VARCHAR(7) DEFAULT NULL, periode VARCHAR(6) DEFAULT NULL, nbr_salaries VARCHAR(6) DEFAULT NULL, t_num_imma VARCHAR(15) DEFAULT NULL, t_jours_declares VARCHAR(6) DEFAULT NULL, t_salaire_reel VARCHAR(15) DEFAULT NULL, t_salaire_plaf VARCHAR(13) DEFAULT NULL, t_ctr VARCHAR(19) DEFAULT NULL, filler VARCHAR(170) DEFAULT NULL, INDEX IDX_35AE50373F9223A2 (cnssb00_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE tcnss_a01 ADD CONSTRAINT FK_A98C7BCDB906510C FOREIGN KEY (cnssa00_id) REFERENCES tcnss_a00 (id)');
        $this->addSql('ALTER TABLE tcnss_a02 ADD CONSTRAINT FK_30852A772576E0FD FOREIGN KEY (contract_id) REFERENCES lcontract (id)');
        $this->addSql('ALTER TABLE tcnss_a02 ADD CONSTRAINT FK_30852A77B906510C FOREIGN KEY (cnssa00_id) REFERENCES tcnss_a00 (id)');
        $this->addSql('ALTER TABLE tcnss_a03 ADD CONSTRAINT FK_47821AE1B906510C FOREIGN KEY (cnssa00_id) REFERENCES tcnss_a00 (id)');
        $this->addSql('ALTER TABLE tcnss_b00 ADD CONSTRAINT FK_DCCDF502B906510C FOREIGN KEY (cnssa00_id) REFERENCES tcnss_a00 (id)');
        $this->addSql('ALTER TABLE tcnss_b01 ADD CONSTRAINT FK_ABCAC5943F9223A2 FOREIGN KEY (cnssb00_id) REFERENCES tcnss_b00 (id)');
        $this->addSql('ALTER TABLE tcnss_b02 ADD CONSTRAINT FK_32C3942E2576E0FD FOREIGN KEY (contract_id) REFERENCES lcontract (id)');
        $this->addSql('ALTER TABLE tcnss_b02 ADD CONSTRAINT FK_32C3942E3F9223A2 FOREIGN KEY (cnssb00_id) REFERENCES tcnss_b00 (id)');
        $this->addSql('ALTER TABLE tcnss_b03 ADD CONSTRAINT FK_45C4A4B83F9223A2 FOREIGN KEY (cnssb00_id) REFERENCES tcnss_b00 (id)');
        $this->addSql('ALTER TABLE tcnss_b04 ADD CONSTRAINT FK_DBA0311B2576E0FD FOREIGN KEY (contract_id) REFERENCES lcontract (id)');
        $this->addSql('ALTER TABLE tcnss_b04 ADD CONSTRAINT FK_DBA0311B3F9223A2 FOREIGN KEY (cnssb00_id) REFERENCES tcnss_b00 (id)');
        $this->addSql('ALTER TABLE tcnss_b05 ADD CONSTRAINT FK_ACA7018D3F9223A2 FOREIGN KEY (cnssb00_id) REFERENCES tcnss_b00 (id)');
        $this->addSql('ALTER TABLE tcnss_b06 ADD CONSTRAINT FK_35AE50373F9223A2 FOREIGN KEY (cnssb00_id) REFERENCES tcnss_b00 (id)');
        $this->addSql('ALTER TABLE lcontract ADD matricule_ancien VARCHAR(70) DEFAULT NULL');
        $this->addSql('ALTER TABLE pnature_contract ADD type_id INT DEFAULT NULL, DROP type');
        $this->addSql('ALTER TABLE pnature_contract ADD CONSTRAINT FK_FB2076E2C54C8C93 FOREIGN KEY (type_id) REFERENCES ptype_contract (id)');
        $this->addSql('CREATE INDEX IDX_FB2076E2C54C8C93 ON pnature_contract (type_id)');
        $this->addSql('ALTER TABLE prubrique ADD imposable TINYINT(1) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pnature_contract DROP FOREIGN KEY FK_FB2076E2C54C8C93');
        $this->addSql('ALTER TABLE tcnss_a01 DROP FOREIGN KEY FK_A98C7BCDB906510C');
        $this->addSql('ALTER TABLE tcnss_a02 DROP FOREIGN KEY FK_30852A772576E0FD');
        $this->addSql('ALTER TABLE tcnss_a02 DROP FOREIGN KEY FK_30852A77B906510C');
        $this->addSql('ALTER TABLE tcnss_a03 DROP FOREIGN KEY FK_47821AE1B906510C');
        $this->addSql('ALTER TABLE tcnss_b00 DROP FOREIGN KEY FK_DCCDF502B906510C');
        $this->addSql('ALTER TABLE tcnss_b01 DROP FOREIGN KEY FK_ABCAC5943F9223A2');
        $this->addSql('ALTER TABLE tcnss_b02 DROP FOREIGN KEY FK_32C3942E2576E0FD');
        $this->addSql('ALTER TABLE tcnss_b02 DROP FOREIGN KEY FK_32C3942E3F9223A2');
        $this->addSql('ALTER TABLE tcnss_b03 DROP FOREIGN KEY FK_45C4A4B83F9223A2');
        $this->addSql('ALTER TABLE tcnss_b04 DROP FOREIGN KEY FK_DBA0311B2576E0FD');
        $this->addSql('ALTER TABLE tcnss_b04 DROP FOREIGN KEY FK_DBA0311B3F9223A2');
        $this->addSql('ALTER TABLE tcnss_b05 DROP FOREIGN KEY FK_ACA7018D3F9223A2');
        $this->addSql('ALTER TABLE tcnss_b06 DROP FOREIGN KEY FK_35AE50373F9223A2');
        $this->addSql('DROP TABLE ptype_contract');
        $this->addSql('DROP TABLE tcnss_a00');
        $this->addSql('DROP TABLE tcnss_a01');
        $this->addSql('DROP TABLE tcnss_a02');
        $this->addSql('DROP TABLE tcnss_a03');
        $this->addSql('DROP TABLE tcnss_b00');
        $this->addSql('DROP TABLE tcnss_b01');
        $this->addSql('DROP TABLE tcnss_b02');
        $this->addSql('DROP TABLE tcnss_b03');
        $this->addSql('DROP TABLE tcnss_b04');
        $this->addSql('DROP TABLE tcnss_b05');
        $this->addSql('DROP TABLE tcnss_b06');
        $this->addSql('ALTER TABLE lcontract DROP matricule_ancien');
        $this->addSql('DROP INDEX IDX_FB2076E2C54C8C93 ON pnature_contract');
        $this->addSql('ALTER TABLE pnature_contract ADD type VARCHAR(255) DEFAULT NULL, DROP type_id');
        $this->addSql('ALTER TABLE prubrique DROP imposable');
    }
}
