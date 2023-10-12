<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230830145327 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE pcompte_comptable (id INT AUTO_INCREMENT NOT NULL, rubrique_id INT DEFAULT NULL, nature_contract_id INT DEFAULT NULL, article_ugouv_id INT DEFAULT NULL, article_ugouv_rh VARCHAR(255) DEFAULT NULL, compte_comptable VARCHAR(255) DEFAULT NULL, sens VARCHAR(255) DEFAULT NULL, qte DOUBLE PRECISION DEFAULT NULL, INDEX IDX_D90A09CE3BD38833 (rubrique_id), INDEX IDX_D90A09CE4BF198A9 (nature_contract_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE pcompte_comptable ADD CONSTRAINT FK_D90A09CE3BD38833 FOREIGN KEY (rubrique_id) REFERENCES prubrique (id)');
        $this->addSql('ALTER TABLE pcompte_comptable ADD CONSTRAINT FK_D90A09CE4BF198A9 FOREIGN KEY (nature_contract_id) REFERENCES pnature_contract (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pcompte_comptable DROP FOREIGN KEY FK_D90A09CE3BD38833');
        $this->addSql('ALTER TABLE pcompte_comptable DROP FOREIGN KEY FK_D90A09CE4BF198A9');
        $this->addSql('DROP TABLE pcompte_comptable');
    }
}
