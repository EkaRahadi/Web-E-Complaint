import React from "react";
import StudentImg from "../../images/student-images.jpg";
import lodash from 'lodash';
import { Modal} from 'antd';
// import Select from 'react-select';
import "./Form.css";
import { useState } from "react";

const Form = (props) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [data, setData] = useState({
    nim : '',
    email: '',
    keluhan: '',
    jurusan: 'default',
    image: null
  })

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   props.onButtonClick();
  //   event.target.reset();
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data.jurusan);
    if (data.nim !== '' && data.email !== '' && data.keluhan !== '' && data.jurusan !== '' && data.jurusan !== 'default') {
      setVisible(true);
    } else {
      Modal.error({
        title: 'Error',
        content: 'Mohon isi semua bidang !',
      });
    }
    event.target.reset();
  }

  const handleChange = (event) => {
    if (event.target.name === 'image') {
      setData({
        ...data,
        [event.target.name] : event.target.files[0]
      })
    }
    else {
      setData({
        ...data,
        [event.target.name] : event.target.value
      })
    }
}

const success = () => {
  Modal.success({
    content: 'Berhasil',
  });
}

const error = () => {
  Modal.error({
    title: 'Error',
    content: 'Tidak dapat mengirim keluhan',
  });
}

const handleCancel = () => {
  setVisible(false);
}

const complaint = (data) => {
  let formData = new FormData();
  formData.append('keluhan', data.keluhan);
  formData.append('nim', data.nim);
  formData.append('email', data.email);
  formData.append('jurusan', lodash.startCase(data.jurusan));

  if (data.image !== null) {
    formData.append('path', data.image)
  }
  return new Promise(async (resolve, reject) => {

    await fetch('https://api.elbaayu.xyz/api-mobile/complaint-create/', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      //do here
      console.log(data);
      if (data.success === true) {
        resolve(data)

      }
      else {
        reject('error')
      }
    })
    .catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

const rawComplaint = (data) => {
  return new Promise(async (resolve, reject) => {
    await fetch('https://api.elbaayu.xyz/api-web/complaint/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "keluhan" : data.keluhan,
        "nim": data.nim,
        "email": data.email
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success === true) {
        resolve(data)
      }
      else {
        reject('error')
      }
    })
    .catch(err => {
      reject(err)
    })
  })
}

const handleOk = async () => {
  setConfirmLoading(true);

  Promise.all([rawComplaint(data), complaint(data)])
  .then(response => {
    console.log(response);
    setConfirmLoading(false);
    setVisible(false);
    //Show modal success
    success();
  })
  .catch(err => {
    console.log(err)
    setVisible(false);
    setConfirmLoading(false);
    //Show modal error
    error();
  })
}

  return (
      <div className="container-form">
        <div className="form-add-keluhan">
          <form onSubmit={handleSubmit}>
            <label htmlFor="nim">NIM</label>
            <input
              type="text"
              name="nim"
              placeholder="Masukkan NIM"
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Masukkan Email"
              onChange={handleChange}
              required
            />

            <label htmlFor="select">Jurusan</label>
            <select value={data.jurusan} name="jurusan" id="jurusan" required onChange={handleChange}>
              <option value="default">Pilih Jurusan</option>
              <option value="teknik-mesin">Teknik Mesin</option>
              <option value="teknik-informatika">Teknik Informatika</option>
              <option value="teknik-pendingin-dan-tata-udara">Teknik Pendingin dan Tata Udara</option>
              <option value="keperawatan">Keperawatan</option>
            </select>

            <label htmlFor="keluhan">Masukkan keluhan anda disini :</label>
            <textarea
              name="keluhan"
              id="body-keluhan"
              cols="20"
              rows="5"
              onChange={handleChange}
              required
            ></textarea>

            <label htmlFor="image">Pilih Gambar : </label>
            <input type="file"
              id="image" name="image"
              onChange={handleChange}
              accept="image/png, image/jpeg"/>

            <input type="submit" value="Kirim" />
          </form>
        </div>
        <img className="student-img" src={StudentImg} alt="student-img" />
         {/* Modal */}
         <div>
          <Modal
            title="Keluhan"
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <p>Keluhan anda akan dikirim kepihak terkait</p>
          </Modal>
        </div>
      </div>
  );
};

export default Form;
