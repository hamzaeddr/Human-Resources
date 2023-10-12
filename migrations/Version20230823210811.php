<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230823210811 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pprelevement ADD user_created_id INT DEFAULT NULL, ADD montant_echeance DOUBLE PRECISION DEFAULT NULL');
        $this->addSql('ALTER TABLE pprelevement ADD CONSTRAINT FK_BCD09168F987D8A8 FOREIGN KEY (user_created_id) REFERENCES users (id)');
        $this->addSql('CREATE INDEX IDX_BCD09168F987D8A8 ON pprelevement (user_created_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pprelevement DROP FOREIGN KEY FK_BCD09168F987D8A8');
        $this->addSql('DROP INDEX IDX_BCD09168F987D8A8 ON pprelevement');
        $this->addSql('ALTER TABLE pprelevement DROP user_created_id, DROP montant_echeance');
    }
}
