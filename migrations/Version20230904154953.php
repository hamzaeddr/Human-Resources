<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230904154953 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pbordereau DROP valider, DROP flag');
        $this->addSql('ALTER TABLE pdossier ADD abreviation2 VARCHAR(255) DEFAULT NULL, ADD abreviation_ugouv VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pbordereau ADD valider TINYINT(1) DEFAULT NULL, ADD flag TINYINT(1) DEFAULT NULL');
        $this->addSql('ALTER TABLE pdossier DROP abreviation2, DROP abreviation_ugouv');
    }
}
