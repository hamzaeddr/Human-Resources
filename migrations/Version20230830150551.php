<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230830150551 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE pstatut (id INT AUTO_INCREMENT NOT NULL, designation VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE pbordereau ADD statut_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE pbordereau ADD CONSTRAINT FK_47E3C21F6203804 FOREIGN KEY (statut_id) REFERENCES pstatut (id)');
        $this->addSql('CREATE INDEX IDX_47E3C21F6203804 ON pbordereau (statut_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pbordereau DROP FOREIGN KEY FK_47E3C21F6203804');
        $this->addSql('DROP TABLE pstatut');
        $this->addSql('DROP INDEX IDX_47E3C21F6203804 ON pbordereau');
        $this->addSql('ALTER TABLE pbordereau DROP statut_id');
    }
}
