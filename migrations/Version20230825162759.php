<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230825162759 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE lelement_fixe ADD user_created_id INT DEFAULT NULL, ADD created DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE lelement_fixe ADD CONSTRAINT FK_1E723F4F987D8A8 FOREIGN KEY (user_created_id) REFERENCES users (id)');
        $this->addSql('CREATE INDEX IDX_1E723F4F987D8A8 ON lelement_fixe (user_created_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE lelement_fixe DROP FOREIGN KEY FK_1E723F4F987D8A8');
        $this->addSql('DROP INDEX IDX_1E723F4F987D8A8 ON lelement_fixe');
        $this->addSql('ALTER TABLE lelement_fixe DROP user_created_id, DROP created');
    }
}
