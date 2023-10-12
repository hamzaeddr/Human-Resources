<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230829152702 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE journal_paie_dossier (id INT AUTO_INCREMENT NOT NULL, rubrique_id INT DEFAULT NULL, bordereau_id INT DEFAULT NULL, dossier_id INT DEFAULT NULL, nature_contract_id INT DEFAULT NULL, user_id INT DEFAULT NULL, piece_id INT DEFAULT NULL, rubrique_desgiation VARCHAR(255) DEFAULT NULL, montant DOUBLE PRECISION NOT NULL, code_comptable VARCHAR(255) DEFAULT NULL, sens VARCHAR(255) DEFAULT NULL, dossier_abreviation VARCHAR(255) DEFAULT NULL, created DATETIME DEFAULT NULL, flag_regularisation TINYINT(1) DEFAULT NULL, tier1 VARCHAR(255) DEFAULT NULL, tier2 VARCHAR(255) DEFAULT NULL, INDEX IDX_A2D885E3BD38833 (rubrique_id), INDEX IDX_A2D885E55D5304E (bordereau_id), INDEX IDX_A2D885E611C0C56 (dossier_id), INDEX IDX_A2D885E4BF198A9 (nature_contract_id), INDEX IDX_A2D885EA76ED395 (user_id), INDEX IDX_A2D885EC40FCFA8 (piece_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE journal_paie_dossier ADD CONSTRAINT FK_A2D885E3BD38833 FOREIGN KEY (rubrique_id) REFERENCES prubrique (id)');
        $this->addSql('ALTER TABLE journal_paie_dossier ADD CONSTRAINT FK_A2D885E55D5304E FOREIGN KEY (bordereau_id) REFERENCES pbordereau (id)');
        $this->addSql('ALTER TABLE journal_paie_dossier ADD CONSTRAINT FK_A2D885E611C0C56 FOREIGN KEY (dossier_id) REFERENCES pdossier (id)');
        $this->addSql('ALTER TABLE journal_paie_dossier ADD CONSTRAINT FK_A2D885E4BF198A9 FOREIGN KEY (nature_contract_id) REFERENCES pnature_contract (id)');
        $this->addSql('ALTER TABLE journal_paie_dossier ADD CONSTRAINT FK_A2D885EA76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE journal_paie_dossier ADD CONSTRAINT FK_A2D885EC40FCFA8 FOREIGN KEY (piece_id) REFERENCES ppiece (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE journal_paie_dossier DROP FOREIGN KEY FK_A2D885E3BD38833');
        $this->addSql('ALTER TABLE journal_paie_dossier DROP FOREIGN KEY FK_A2D885E55D5304E');
        $this->addSql('ALTER TABLE journal_paie_dossier DROP FOREIGN KEY FK_A2D885E611C0C56');
        $this->addSql('ALTER TABLE journal_paie_dossier DROP FOREIGN KEY FK_A2D885E4BF198A9');
        $this->addSql('ALTER TABLE journal_paie_dossier DROP FOREIGN KEY FK_A2D885EA76ED395');
        $this->addSql('ALTER TABLE journal_paie_dossier DROP FOREIGN KEY FK_A2D885EC40FCFA8');
        $this->addSql('DROP TABLE journal_paie_dossier');
    }
}
