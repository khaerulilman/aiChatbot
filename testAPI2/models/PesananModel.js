const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database'); // Import koneksi database
const MenuModel = require('./MenuModel'); // Import model terkait jika diperlukan untuk relasi

const PesananModel = sequelize.define('Pesanan', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  nama_menu: {
    type: DataTypes.INTEGER,
    references: {
      model: MenuModel,
      key: 'id'
    },
    allowNull: false
  },
  deskripsi_tambahan: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  nama_pelanggan: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  no_meja: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  waktu_pemesanan: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'pesanan',
  timestamps: false
});

module.exports = PesananModel;
