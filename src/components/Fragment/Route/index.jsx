import Paragraf from "../../Element/Paragraf";
import Anchor from "../../Element/Anchor";

const Route = function () {
  return (
    <>
      <div className="col">
        <Anchor
          aLink="https://www.google.com/maps/place/Tegalrejo,+Kec.+Gedang+Sari,+Kabupaten+Gunung+Kidul,+Daerah+Istimewa+Yogyakarta/@-7.8130735,110.6200084,14z/data=!3m1!4b1!4m6!3m5!1s0x2e7a48c2aacc8d5b:0x46e7be0babac3368!8m2!3d-7.8076343!4d110.6466895!16s%2Fg%2F122x846h?entry=ttu"
          aText="Lihat Lokasi"
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31622.24183357403!2d110.62000835962279!3d-7.813073501266306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a48c2aacc8d5b%3A0x46e7be0babac3368!2sTegalrejo%2C%20Kec.%20Gedang%20Sari%2C%20Kabupaten%20Gunung%20Kidul%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1722033186009!5m2!1sid!2sid"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Paragraf sentence="Dusun Tegalrejo, Kelurahan Tegalrejo, Kecamatan Gedangsari, Kabupaten Gunungkidul, Provinsi Daerah Istimewa Yogyakarta, Indonesia" />
      </div>
    </>
  );
};

export default Route;
