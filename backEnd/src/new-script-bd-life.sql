-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema lifestory
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema lifestory
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lifestory` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema bancodh
-- -----------------------------------------------------
USE `lifestory` ;

-- -----------------------------------------------------
-- Table `lifestory`.`contato`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lifestory`.`contato` ;

CREATE TABLE IF NOT EXISTS `lifestory`.`contato` (
  `contato_id` INT NOT NULL AUTO_INCREMENT,
  `contato_telefone` VARCHAR(12) NOT NULL,
  `contato_email` VARCHAR(256) NOT NULL,
  `contato_telefone2` VARCHAR(12) NOT NULL,
  PRIMARY KEY (`contato_id`),
  UNIQUE INDEX `contato_email_UNIQUE` (`contato_email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lifestory`.`endereco`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lifestory`.`endereco` ;

CREATE TABLE IF NOT EXISTS `lifestory`.`endereco` (
  `endereco_id` INT NOT NULL AUTO_INCREMENT,
  `endereco_cep_casa` CHAR(8) NULL,
  `endereco_cep_impresa` CHAR(8) NULL,
  `endereco_numero_casa` VARCHAR(100) NULL,
  `endereco_numero_impresa` VARCHAR(100) NULL,
  `endereco_estado` VARCHAR(35) NOT NULL,
  `endereco_cidade` VARCHAR(45) NOT NULL,
  `endereco_bairro` VARCHAR(45) NOT NULL,
  `endereco_rua` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`endereco_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lifestory`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lifestory`.`usuario` ;

CREATE TABLE IF NOT EXISTS `lifestory`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuario_primeiro_nome` VARCHAR(45) NOT NULL,
  `usuariocol_cpf` VARCHAR(20) NOT NULL,
  `usuario_senha` VARCHAR(20) NOT NULL,
  `contato_contato_id` INT NULL,
  `endereco_endereco_id` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `usuariocol_cpf_UNIQUE` (`usuariocol_cpf` ASC) VISIBLE,
  INDEX `fk_usuario_contato_idx` (`contato_contato_id` ASC) VISIBLE,
  INDEX `fk_usuario_endereco1_idx` (`endereco_endereco_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_contato`
    FOREIGN KEY (`contato_contato_id`)
    REFERENCES `lifestory`.`contato` (`contato_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_endereco1`
    FOREIGN KEY (`endereco_endereco_id`)
    REFERENCES `lifestory`.`endereco` (`endereco_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lifestory`.`formaDePagamento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lifestory`.`formaDePagamento` ;

CREATE TABLE IF NOT EXISTS `lifestory`.`formaDePagamento` (
  `id_formaDePagamento` INT NOT NULL AUTO_INCREMENT,
  `pagamento_cartao` CHAR(1) NULL,
  `pagamento_boleto` CHAR(1) NULL COMMENT '1-debito -2 credito ',
  `pagamento_pix` CHAR(1) NULL,
  `pagamento_paypal` CHAR(1) NULL,
  PRIMARY KEY (`id_formaDePagamento`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lifestory`.`formaDeenvio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lifestory`.`formaDeenvio` ;

CREATE TABLE IF NOT EXISTS `lifestory`.`formaDeenvio` (
  `id_envio` INT NOT NULL,
  `envio_correio` CHAR(1) NULL COMMENT 'Cada opição pode  recebe somente 1 valor caso 1 delas tenha essa valor, é estão a forma de pagamento escolhida.',
  `envio_sedex` CHAR(1) NULL,
  `envio_retirada` CHAR(1) NULL,
  PRIMARY KEY (`id_envio`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lifestory`.`produto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lifestory`.`produto` ;

CREATE TABLE IF NOT EXISTS `lifestory`.`produto` (
  `id_produto` INT NOT NULL AUTO_INCREMENT,
  `produto_nome` VARCHAR(45) NOT NULL,
  `produto_qtd` VARCHAR(6) NOT NULL,
  `produto_valor` VARCHAR(10) NOT NULL,
  `produto_descricao` VARCHAR(300) NOT NULL,
  `produto_img` VARCHAR(500) NOT NULL,
  `produto_nome_vendedor` VARCHAR(45) NOT NULL,
  `formaDePagamento_id_formaDePagamento` INT NOT NULL,
  `formaDeenvio_id_envio` INT NOT NULL,
  `data_postada` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_produto`),
  INDEX `fk_produto_formaDePagamento1_idx` (`formaDePagamento_id_formaDePagamento` ASC) VISIBLE,
  INDEX `fk_produto_formaDeenvio1_idx` (`formaDeenvio_id_envio` ASC) VISIBLE,
  CONSTRAINT `fk_produto_formaDePagamento1`
    FOREIGN KEY (`formaDePagamento_id_formaDePagamento`)
    REFERENCES `lifestory`.`formaDePagamento` (`id_formaDePagamento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_produto_formaDeenvio1`
    FOREIGN KEY (`formaDeenvio_id_envio`)
    REFERENCES `lifestory`.`formaDeenvio` (`id_envio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lifestory`.`pontuacao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lifestory`.`pontuacao` ;

CREATE TABLE IF NOT EXISTS `lifestory`.`pontuacao` (
  `id_pontuacao` INT NOT NULL,
  `pontuacao_valor` VARCHAR(45) NOT NULL,
  `produto_produto_id` INT NOT NULL,
  `usuario_id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_pontuacao`),
  INDEX `fk_pontuacao_produto1_idx` (`produto_produto_id` ASC) VISIBLE,
  INDEX `fk_pontuacao_usuario1_idx` (`usuario_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_pontuacao_produto1`
    FOREIGN KEY (`produto_produto_id`)
    REFERENCES `lifestory`.`produto` (`id_produto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pontuacao_usuario1`
    FOREIGN KEY (`usuario_id_usuario`)
    REFERENCES `lifestory`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lifestory`.`carrinho`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lifestory`.`carrinho` ;

CREATE TABLE IF NOT EXISTS `lifestory`.`carrinho` (
  `id_carrinho` INT NOT NULL AUTO_INCREMENT,
  `usuario_id_usuario` INT NOT NULL,
  `produto_produto_id` INT NOT NULL,
  PRIMARY KEY (`id_carrinho`),
  INDEX `fk_carrinho_usuario1_idx` (`usuario_id_usuario` ASC) VISIBLE,
  INDEX `fk_carrinho_produto1_idx` (`produto_produto_id` ASC) VISIBLE,
  CONSTRAINT `fk_carrinho_usuario1`
    FOREIGN KEY (`usuario_id_usuario`)
    REFERENCES `lifestory`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carrinho_produto1`
    FOREIGN KEY (`produto_produto_id`)
    REFERENCES `lifestory`.`produto` (`id_produto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
