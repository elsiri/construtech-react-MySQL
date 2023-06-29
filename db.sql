/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : constru-tech

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2023-06-29 02:28:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for categoria
-- ----------------------------
DROP TABLE IF EXISTS `categoria`;
CREATE TABLE `categoria` (
  `idcat` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `estado` int(1) DEFAULT NULL,
  PRIMARY KEY (`idcat`)
) ENGINE=InnoDB AUTO_INCREMENT=6005 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of categoria
-- ----------------------------
INSERT INTO `categoria` VALUES ('6000', 'Ceramica', '1');
INSERT INTO `categoria` VALUES ('6001', 'Tuberia', '1');
INSERT INTO `categoria` VALUES ('6002', 'Pintura', '1');
INSERT INTO `categoria` VALUES ('6003', 'ceramica', '1');
INSERT INTO `categoria` VALUES ('6004', 'vidriedia', '1');

-- ----------------------------
-- Table structure for cliente
-- ----------------------------
DROP TABLE IF EXISTS `cliente`;
CREATE TABLE `cliente` (
  `idCli` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(70) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `cedula` varchar(10) NOT NULL,
  `fecha_nac` date DEFAULT NULL,
  `estado` int(1) DEFAULT NULL,
  PRIMARY KEY (`idCli`)
) ENGINE=InnoDB AUTO_INCREMENT=22003 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of cliente
-- ----------------------------
INSERT INTO `cliente` VALUES ('22000', 'José Hernandez', 'hernanjo324@gmail.com', 'cra 5 b #2 a', '3225771077', '1924612312', '1998-05-12', '1');
INSERT INTO `cliente` VALUES ('22001', 'Santiago Sanchez', 'Santisanchez225@gmail.com', 'cll 6 c #25 b', '3297928732', '1235174219', '2000-02-19', '1');
INSERT INTO `cliente` VALUES ('22002', 'Kevin Fernandez', 'Kafz56@hotmail.com', 'cll2 aa #33 a', '3139821231', '1518231231', '1999-04-30', '1');

-- ----------------------------
-- Table structure for compras
-- ----------------------------
DROP TABLE IF EXISTS `compras`;
CREATE TABLE `compras` (
  `idCom` int(11) NOT NULL AUTO_INCREMENT,
  `idProveedor` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `total_compra` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCom`),
  KEY `idProveedor` (`idProveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=3004 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of compras
-- ----------------------------
INSERT INTO `compras` VALUES ('3000', '500', '2023-05-17', '   ', '249900');
INSERT INTO `compras` VALUES ('3001', '501', '2023-05-02', '     ', '190400');
INSERT INTO `compras` VALUES ('3002', '502', '2023-05-01', '     ', '29750');
INSERT INTO `compras` VALUES ('3003', '503', '2023-05-02', '       ', '476000');

-- ----------------------------
-- Table structure for compras_detalle
-- ----------------------------
DROP TABLE IF EXISTS `compras_detalle`;
CREATE TABLE `compras_detalle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompra` int(11) DEFAULT NULL,
  `idMat` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `subtotal` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idCompra` (`idCompra`),
  KEY `idMat` (`idMat`),
  CONSTRAINT `compras_detalle_ibfk_1` FOREIGN KEY (`idCompra`) REFERENCES `compras` (`idCom`),
  CONSTRAINT `compras_detalle_ibfk_2` FOREIGN KEY (`idMat`) REFERENCES `materiales` (`idMat`)
) ENGINE=InnoDB AUTO_INCREMENT=30004 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of compras_detalle
-- ----------------------------
INSERT INTO `compras_detalle` VALUES ('30000', '3000', '500', '24', '249900');
INSERT INTO `compras_detalle` VALUES ('30001', '3001', '501', '202', '190400');
INSERT INTO `compras_detalle` VALUES ('30002', '3002', '502', '405', '29750');
INSERT INTO `compras_detalle` VALUES ('30003', '3003', '503', '202', '476000');

-- ----------------------------
-- Table structure for empleado
-- ----------------------------
DROP TABLE IF EXISTS `empleado`;
CREATE TABLE `empleado` (
  `idEmp` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `estado` int(1) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `cedula` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`idEmp`)
) ENGINE=InnoDB AUTO_INCREMENT=2005 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of empleado
-- ----------------------------
INSERT INTO `empleado` VALUES ('2000', 'Mario Ortiz', 'cr5 #7b sur 205', '1', 'ortizmario623@gmail.com', '3225478898', '9823122');
INSERT INTO `empleado` VALUES ('2001', 'Fausto Flores', 'cr9 #8aa norte 101', '1', 'Flfaust88@gmail.com', '3058447152', '9852412');
INSERT INTO `empleado` VALUES ('2002', 'Belarmino Zea', 'cr10 # 7b sur 405', '1', 'Zeabelar414@gmail.com', '3201547854', '9823123');
INSERT INTO `empleado` VALUES ('2003', 'Marcos David', 'cll 58b # 7aa 201', '1', 'DavMarc223@gmail.com', '3256985251', '9862412');
INSERT INTO `empleado` VALUES ('2004', 'Marcela henao', 'cll 44 ff # 3b 402', '1', 'Henmarce445@gmail.com', '3105475210', '3246584');

-- ----------------------------
-- Table structure for empleado_especialidad
-- ----------------------------
DROP TABLE IF EXISTS `empleado_especialidad`;
CREATE TABLE `empleado_especialidad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idEmp` int(11) DEFAULT NULL,
  `idEsp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idEmp` (`idEmp`),
  KEY `idEsp` (`idEsp`),
  CONSTRAINT `empleado_especialidad_ibfk_1` FOREIGN KEY (`idEmp`) REFERENCES `empleado` (`idEmp`),
  CONSTRAINT `empleado_especialidad_ibfk_2` FOREIGN KEY (`idEsp`) REFERENCES `especialidad` (`id`),
  CONSTRAINT `empleado_especialidad_ibfk_3` FOREIGN KEY (`idEmp`) REFERENCES `empleado` (`idEmp`),
  CONSTRAINT `empleado_especialidad_ibfk_4` FOREIGN KEY (`idEsp`) REFERENCES `especialidad` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1810 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of empleado_especialidad
-- ----------------------------
INSERT INTO `empleado_especialidad` VALUES ('1800', '2001', '1500');
INSERT INTO `empleado_especialidad` VALUES ('1801', '2001', '1501');
INSERT INTO `empleado_especialidad` VALUES ('1802', '2001', '1502');
INSERT INTO `empleado_especialidad` VALUES ('1803', '2002', '1501');
INSERT INTO `empleado_especialidad` VALUES ('1804', '2002', '1502');
INSERT INTO `empleado_especialidad` VALUES ('1805', '2001', '1503');
INSERT INTO `empleado_especialidad` VALUES ('1806', '2001', '1500');
INSERT INTO `empleado_especialidad` VALUES ('1807', '2003', '1500');
INSERT INTO `empleado_especialidad` VALUES ('1808', '2003', '1501');
INSERT INTO `empleado_especialidad` VALUES ('1809', '2003', '1502');

-- ----------------------------
-- Table structure for empleado_obra
-- ----------------------------
DROP TABLE IF EXISTS `empleado_obra`;
CREATE TABLE `empleado_obra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idEmp` int(11) DEFAULT NULL,
  `idObra` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idEmp` (`idEmp`),
  KEY `idObra` (`idObra`),
  CONSTRAINT `empleado_obra_ibfk_1` FOREIGN KEY (`idEmp`) REFERENCES `empleado` (`idEmp`),
  CONSTRAINT `empleado_obra_ibfk_2` FOREIGN KEY (`idObra`) REFERENCES `obras` (`idObra`),
  CONSTRAINT `empleado_obra_ibfk_3` FOREIGN KEY (`idEmp`) REFERENCES `empleado` (`idEmp`),
  CONSTRAINT `empleado_obra_ibfk_4` FOREIGN KEY (`idObra`) REFERENCES `obras` (`idObra`)
) ENGINE=InnoDB AUTO_INCREMENT=903 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of empleado_obra
-- ----------------------------
INSERT INTO `empleado_obra` VALUES ('900', '2001', '4000');
INSERT INTO `empleado_obra` VALUES ('901', '2002', '4001');
INSERT INTO `empleado_obra` VALUES ('902', '2003', '4002');

-- ----------------------------
-- Table structure for especialidad
-- ----------------------------
DROP TABLE IF EXISTS `especialidad`;
CREATE TABLE `especialidad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `especialidad` varchar(30) DEFAULT NULL,
  `estado` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1505 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of especialidad
-- ----------------------------
INSERT INTO `especialidad` VALUES ('1500', 'Pintor', '1');
INSERT INTO `especialidad` VALUES ('1501', 'Plomero', '1');
INSERT INTO `especialidad` VALUES ('1502', 'Drywall', '1');
INSERT INTO `especialidad` VALUES ('1503', 'Electricista', '1');
INSERT INTO `especialidad` VALUES ('1504', 'Instalador de redes', '0');

-- ----------------------------
-- Table structure for materiales
-- ----------------------------
DROP TABLE IF EXISTS `materiales`;
CREATE TABLE `materiales` (
  `idMat` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `idProveedor` int(11) DEFAULT NULL,
  `estado` int(1) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `idCategoria` int(11) DEFAULT NULL,
  PRIMARY KEY (`idMat`),
  KEY `idProveedor` (`idProveedor`),
  KEY `idCategoria` (`idCategoria`),
  CONSTRAINT `materiales_ibfk_1` FOREIGN KEY (`idProveedor`) REFERENCES `proveedor` (`idProv`),
  CONSTRAINT `materiales_ibfk_2` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idcat`)
) ENGINE=InnoDB AUTO_INCREMENT=506 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of materiales
-- ----------------------------
INSERT INTO `materiales` VALUES ('500', 'Baldosas test', '700', '0', '7000', '20', '6000');
INSERT INTO `materiales` VALUES ('501', 'Arena', '700', '1', '16000', '10', '6000');
INSERT INTO `materiales` VALUES ('502', 'Tubo pvc', '701', '1', '150000', '5', '6001');
INSERT INTO `materiales` VALUES ('503', 'Galón de pintura', '703', '1', '80000', '10', '6002');
INSERT INTO `materiales` VALUES ('504', 'Tornillo pequeño', '700', '1', '3000', '20', '6000');

-- ----------------------------
-- Table structure for materiales_obras
-- ----------------------------
DROP TABLE IF EXISTS `materiales_obras`;
CREATE TABLE `materiales_obras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idMaterial` int(11) DEFAULT NULL,
  `idObra` int(11) DEFAULT NULL,
  `consumo` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idMaterial` (`idMaterial`),
  KEY `idObra` (`idObra`),
  CONSTRAINT `materiales_obras_ibfk_3` FOREIGN KEY (`idMaterial`) REFERENCES `materiales` (`idMat`),
  CONSTRAINT `materiales_obras_ibfk_4` FOREIGN KEY (`idObra`) REFERENCES `obras` (`idObra`)
) ENGINE=InnoDB AUTO_INCREMENT=7003 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of materiales_obras
-- ----------------------------
INSERT INTO `materiales_obras` VALUES ('7000', '500', '4000', 'metros');
INSERT INTO `materiales_obras` VALUES ('7001', '501', '4001', 'metros');
INSERT INTO `materiales_obras` VALUES ('7002', '502', '4002', 'metros');

-- ----------------------------
-- Table structure for obras
-- ----------------------------
DROP TABLE IF EXISTS `obras`;
CREATE TABLE `obras` (
  `idObra` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `fechaini` date DEFAULT NULL,
  `fechafin` date DEFAULT NULL,
  `estado` int(1) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `idCliente` int(11) DEFAULT NULL,
  `idEmpl` int(11) DEFAULT NULL,
  PRIMARY KEY (`idObra`),
  KEY `idCliente` (`idCliente`),
  CONSTRAINT `obras_ibfk_3` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`idCli`)
) ENGINE=InnoDB AUTO_INCREMENT=4007 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of obras
-- ----------------------------
INSERT INTO `obras` VALUES ('4000', 'Enchape de baño ', '2023-05-01', '2023-06-07', null, '25', '22000', '2000');
INSERT INTO `obras` VALUES ('4001', 'Revoque de habitación', '2023-02-12', '2023-04-10', null, '8', '22002', '2002');
INSERT INTO `obras` VALUES ('4002', 'Instalación de red electrica', '2023-04-10', '2023-10-22', null, '3', '22001', '2004');
INSERT INTO `obras` VALUES ('4005', 'Obra de prueba kevin', '2023-06-19', '2023-08-19', '1', '3', '22000', '2004');
INSERT INTO `obras` VALUES ('4006', 'Obra de test 34', '2023-06-19', '0000-00-00', '0', '1', null, null);

-- ----------------------------
-- Table structure for permiso
-- ----------------------------
DROP TABLE IF EXISTS `permiso`;
CREATE TABLE `permiso` (
  `idPer` int(11) NOT NULL AUTO_INCREMENT,
  `permiso` varchar(30) DEFAULT NULL,
  `estado` int(1) DEFAULT NULL,
  PRIMARY KEY (`idPer`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of permiso
-- ----------------------------
INSERT INTO `permiso` VALUES ('100', 'Usuarios', '1');
INSERT INTO `permiso` VALUES ('101', 'roles', '1');
INSERT INTO `permiso` VALUES ('102', 'empleados', '1');
INSERT INTO `permiso` VALUES ('103', 'proveedores', '1');
INSERT INTO `permiso` VALUES ('104', 'materiales', '1');
INSERT INTO `permiso` VALUES ('105', 'compras', '1');
INSERT INTO `permiso` VALUES ('106', 'obras y tiempos', '1');
INSERT INTO `permiso` VALUES ('107', 'clientes', '1');

-- ----------------------------
-- Table structure for proveedor
-- ----------------------------
DROP TABLE IF EXISTS `proveedor`;
CREATE TABLE `proveedor` (
  `idProv` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `nit` varchar(14) DEFAULT NULL,
  `tipo` varchar(10) DEFAULT NULL,
  `estado` int(1) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `nombreContacto` varchar(50) DEFAULT NULL,
  `telefonoContacto` varchar(10) DEFAULT NULL,
  `emailContacto` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idProv`)
) ENGINE=InnoDB AUTO_INCREMENT=704 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of proveedor
-- ----------------------------
INSERT INTO `proveedor` VALUES ('700', 'Corona', 'Calle 53 #50-76', '860.500.480-8', 'Acabados', '1', 'contactenoscorona@corona.com.co', '018000512030', 'Richy Fernandez', '3128030461', 'richyelmandamas200@gmail.com');
INSERT INTO `proveedor` VALUES ('701', 'Homecenter', 'Av 68 No. 80-77', '800.242.106-2', 'Arenas y g', '1', 'servicioalcliente@homecenter.co', '018000127373', 'Manuel Hernandez', '3228341212', 'herzm@gmail.com');
INSERT INTO `proveedor` VALUES ('702', 'Corona', 'Carrera 50 #53-20', '860.500.480-8', 'Sanitarios', '1', 'contactenoscorona@corona.com.co', '018000512030', 'Jhon Gallego', '3003723113', 'onjh@gmail.com');
INSERT INTO `proveedor` VALUES ('703', 'Pintuco', ' Calle 19a #43B-41', '890.900.148-2', 'Pintura', '1', 'tiendapintucoocana@hotmail.com', '3115128355', 'Carlos Ramires', '3013331212', 'carlitos@gmail.com');

-- ----------------------------
-- Table structure for rol
-- ----------------------------
DROP TABLE IF EXISTS `rol`;
CREATE TABLE `rol` (
  `idRol` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) DEFAULT NULL,
  `estado` int(1) DEFAULT NULL,
  PRIMARY KEY (`idRol`)
) ENGINE=InnoDB AUTO_INCREMENT=204 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of rol
-- ----------------------------
INSERT INTO `rol` VALUES ('201', 'Administrador', '1');
INSERT INTO `rol` VALUES ('202', 'Empleado', '1');
INSERT INTO `rol` VALUES ('203', 'Secretaria', '1');

-- ----------------------------
-- Table structure for rol_permiso
-- ----------------------------
DROP TABLE IF EXISTS `rol_permiso`;
CREATE TABLE `rol_permiso` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idRol` int(11) DEFAULT NULL,
  `idPer` int(11) DEFAULT NULL,
  `tipo` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idRol` (`idRol`),
  KEY `idPer` (`idPer`),
  CONSTRAINT `rol_permiso_ibfk_1` FOREIGN KEY (`idRol`) REFERENCES `rol` (`idRol`),
  CONSTRAINT `rol_permiso_ibfk_2` FOREIGN KEY (`idPer`) REFERENCES `permiso` (`idPer`)
) ENGINE=InnoDB AUTO_INCREMENT=337 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of rol_permiso
-- ----------------------------
INSERT INTO `rol_permiso` VALUES ('300', '201', '100', '{\"consultar\",\"agregar\",\"editar\",\"eliminar\"}');
INSERT INTO `rol_permiso` VALUES ('319', '201', '101', '{\"consultar\",\"agregar\",\"editar\",\"eliminar\"}');
INSERT INTO `rol_permiso` VALUES ('320', '201', '102', '{\"consultar\",\"agregar\",\"editar\",\"eliminar\"}');
INSERT INTO `rol_permiso` VALUES ('321', '201', '103', '{\"consultar\",\"agregar\",\"editar\",\"eliminar\"}');
INSERT INTO `rol_permiso` VALUES ('322', '201', '104', '{\"consultar\",\"agregar\",\"editar\",\"eliminar\"}');
INSERT INTO `rol_permiso` VALUES ('323', '201', '105', '{\"consultar\",\"agregar\",\"editar\",\"eliminar\"}');
INSERT INTO `rol_permiso` VALUES ('324', '201', '106', '{\"consultar\",\"agregar\",\"editar\",\"eliminar\"}');
INSERT INTO `rol_permiso` VALUES ('325', '201', '107', '{\"consultar\",\"agregar\",\"editar\",\"eliminar\"}');
INSERT INTO `rol_permiso` VALUES ('326', '202', '103', '{\"consultar\",\"agregar\"}');
INSERT INTO `rol_permiso` VALUES ('327', '202', '104', '{\"consultar\",\"agregar\",\"eliminar\"}');
INSERT INTO `rol_permiso` VALUES ('328', '202', '105', '{\"consultar\",\"agregar\",\"eliminar\"}');
INSERT INTO `rol_permiso` VALUES ('329', '202', '106', '{\"consultar\",\"agregar\",\"editar\"}');
INSERT INTO `rol_permiso` VALUES ('330', '202', '107', '{\"agregar\",\"editar\"}');

-- ----------------------------
-- Table structure for usuario
-- ----------------------------
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `idUsu` int(11) NOT NULL AUTO_INCREMENT,
  `estado` int(2) NOT NULL,
  `contrasena` varchar(20) DEFAULT NULL,
  `idRol` int(11) DEFAULT NULL,
  `idEmp` int(11) NOT NULL,
  PRIMARY KEY (`idUsu`),
  KEY `idRol` (`idRol`),
  KEY `idEmp` (`idEmp`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`idRol`) REFERENCES `rol` (`idRol`),
  CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`idEmp`) REFERENCES `empleado` (`idEmp`)
) ENGINE=InnoDB AUTO_INCREMENT=505 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of usuario
-- ----------------------------
INSERT INTO `usuario` VALUES ('500', '1', 'mario123', '201', '2000');
INSERT INTO `usuario` VALUES ('501', '0', 'flores56', '202', '2001');
INSERT INTO `usuario` VALUES ('502', '1', 'belarzea32', '202', '2002');
INSERT INTO `usuario` VALUES ('503', '0', 'DavidMar45', '202', '2003');
INSERT INTO `usuario` VALUES ('504', '1', 'marce434', '203', '2004');
