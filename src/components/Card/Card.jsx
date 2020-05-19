import React from 'react';
import './Card.css';
// import Circle from '../Circle/Circle';

const Card = () => {

    return (
        <div className="container">
            <p className="title">Selamat Datang di E-Complaint Politeknik Negeri Indramayu</p>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>

            <div className="content">
                <p className="isi">Penjaminan mutu (quality assurance) pendidikan tinggi sebagai proses penetapan</p>
                <p className="isi">dan pemenuhan standar mutu pendidikan secara konsisten dan berkelanjutan dimaksudkan</p> 
                <p className="isi">agar pelanggan memperoleh kepuasan serta menghasilkan pengembangan berkelanjutan (continous improvement) di</p> 
                <p className="isi">perguruan tinggi. Agar perbaikan dan pengembangan dapat dilakukan dengan cepat dan terus-menerus serta kepuasan</p>
                <p className="isi">pelanggan senantiasa terpenuhi, keluhan yang disampaikan oleh pelanggan merupakan masukan yang sangat berharga dan harus</p>
                <p className="isi">ditindaklanjuti.</p> 
                <p className="isi">Keluhan pelanggan juga merupakan salah satu instrumen untuk melakukan evaluasi dan</p> 
                <p className="isi">deteksi dini terhadap kelemahan sistem ataupun penyimpangan</p> 
                <p className="isi">pelaksanaan manual mutu.</p>
            </div>
        </div>
    )
}

export default Card;