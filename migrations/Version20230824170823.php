<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230824170823 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE lcontract ADD fonction_id INT DEFAULT NULL, ADD salairegrille VARCHAR(255) DEFAULT NULL, ADD salaireaffecte VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE lcontract ADD CONSTRAINT FK_D0F3912E57889920 FOREIGN KEY (fonction_id) REFERENCES pfonction (id)');
        $this->addSql('CREATE INDEX IDX_D0F3912E57889920 ON lcontract (fonction_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE lcontract DROP FOREIGN KEY FK_D0F3912E57889920');
        $this->addSql('DROP INDEX IDX_D0F3912E57889920 ON lcontract');
        $this->addSql('ALTER TABLE lcontract DROP fonction_id, DROP salairegrille, DROP salaireaffecte');
    }
}
