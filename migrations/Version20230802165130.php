<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230802165130 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE pbareme_cimr (id INT AUTO_INCREMENT NOT NULL, rubrique_id INT DEFAULT NULL, bareme_id INT DEFAULT NULL, taux DOUBLE PRECISION DEFAULT NULL, categorie VARCHAR(255) DEFAULT NULL, taux_cotis VARCHAR(255) DEFAULT NULL, INDEX IDX_278A04CE3BD38833 (rubrique_id), INDEX IDX_278A04CE5F49EAAD (bareme_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE pbareme_cimr ADD CONSTRAINT FK_278A04CE3BD38833 FOREIGN KEY (rubrique_id) REFERENCES prubrique (id)');
        $this->addSql('ALTER TABLE pbareme_cimr ADD CONSTRAINT FK_278A04CE5F49EAAD FOREIGN KEY (bareme_id) REFERENCES pbareme (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pbareme_cimr DROP FOREIGN KEY FK_278A04CE3BD38833');
        $this->addSql('ALTER TABLE pbareme_cimr DROP FOREIGN KEY FK_278A04CE5F49EAAD');
        $this->addSql('DROP TABLE pbareme_cimr');
    }
}
