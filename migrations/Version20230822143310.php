<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230822143310 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pbordereau ADD piece_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE pbordereau ADD CONSTRAINT FK_47E3C21C40FCFA8 FOREIGN KEY (piece_id) REFERENCES ppiece (id)');
        $this->addSql('CREATE INDEX IDX_47E3C21C40FCFA8 ON pbordereau (piece_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pbordereau DROP FOREIGN KEY FK_47E3C21C40FCFA8');
        $this->addSql('DROP INDEX IDX_47E3C21C40FCFA8 ON pbordereau');
        $this->addSql('ALTER TABLE pbordereau DROP piece_id');
    }
}
