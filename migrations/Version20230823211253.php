<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230823211253 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pprelevement ADD piece_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE pprelevement ADD CONSTRAINT FK_BCD09168C40FCFA8 FOREIGN KEY (piece_id) REFERENCES ppiece (id)');
        $this->addSql('CREATE INDEX IDX_BCD09168C40FCFA8 ON pprelevement (piece_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pprelevement DROP FOREIGN KEY FK_BCD09168C40FCFA8');
        $this->addSql('DROP INDEX IDX_BCD09168C40FCFA8 ON pprelevement');
        $this->addSql('ALTER TABLE pprelevement DROP piece_id');
    }
}
