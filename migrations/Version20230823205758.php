<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230823205758 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pprelevement ADD dossier_id INT DEFAULT NULL, DROP montant_total');
        $this->addSql('ALTER TABLE pprelevement ADD CONSTRAINT FK_BCD09168611C0C56 FOREIGN KEY (dossier_id) REFERENCES pdossier (id)');
        $this->addSql('CREATE INDEX IDX_BCD09168611C0C56 ON pprelevement (dossier_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pprelevement DROP FOREIGN KEY FK_BCD09168611C0C56');
        $this->addSql('DROP INDEX IDX_BCD09168611C0C56 ON pprelevement');
        $this->addSql('ALTER TABLE pprelevement ADD montant_total DOUBLE PRECISION DEFAULT NULL, DROP dossier_id');
    }
}
