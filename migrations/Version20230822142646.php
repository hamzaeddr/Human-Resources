<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230822142646 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE tbulletin ADD piece_id INT DEFAULT NULL, DROP p_piece_id');
        $this->addSql('ALTER TABLE tbulletin ADD CONSTRAINT FK_519D05CC40FCFA8 FOREIGN KEY (piece_id) REFERENCES ppiece (id)');
        $this->addSql('CREATE INDEX IDX_519D05CC40FCFA8 ON tbulletin (piece_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE tbulletin DROP FOREIGN KEY FK_519D05CC40FCFA8');
        $this->addSql('DROP INDEX IDX_519D05CC40FCFA8 ON tbulletin');
        $this->addSql('ALTER TABLE tbulletin ADD p_piece_id INT NOT NULL, DROP piece_id');
    }
}
