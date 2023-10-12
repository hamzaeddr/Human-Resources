<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230803140548 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE lelement_fixe DROP FOREIGN KEY FK_1E723F4ACEC0FEF');
        $this->addSql('DROP INDEX IDX_1E723F4ACEC0FEF ON lelement_fixe');
        $this->addSql('ALTER TABLE lelement_fixe CHANGE rubrique_id_id rubrique_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE lelement_fixe ADD CONSTRAINT FK_1E723F43BD38833 FOREIGN KEY (rubrique_id) REFERENCES prubrique (id)');
        $this->addSql('CREATE INDEX IDX_1E723F43BD38833 ON lelement_fixe (rubrique_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE lelement_fixe DROP FOREIGN KEY FK_1E723F43BD38833');
        $this->addSql('DROP INDEX IDX_1E723F43BD38833 ON lelement_fixe');
        $this->addSql('ALTER TABLE lelement_fixe CHANGE rubrique_id rubrique_id_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE lelement_fixe ADD CONSTRAINT FK_1E723F4ACEC0FEF FOREIGN KEY (rubrique_id_id) REFERENCES prubrique (id)');
        $this->addSql('CREATE INDEX IDX_1E723F4ACEC0FEF ON lelement_fixe (rubrique_id_id)');
    }
}
