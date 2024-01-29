import 'bootstrap/dist/css/bootstrap.min.css';
import blood_aid from '../../assets/blood_aid.png'
import chatbot from '../../assets/chatbot.png'
import contxt from '../../assets/Context diagram.png'
import easy_leave from '../../assets/easy_leave.jpeg'
import marz_place from "../../assets/Marz'_Place.png"
import nlp from '../../assets/nlp.png'

import "./projects.css";


export default function Projects(){
    const galleryData = [
        { id: 1, imageUrl: chatbot, title: 'Mental Health Chatbot', text: 'Chatbot that aims at improving the mental well-being of individuals',link: 'https://github.com/Njambi-M/Mental-health-chatbot' },
        { id: 2, imageUrl: marz_place, title: 'Resturant Website', text: 'Website that allows one to order food and have the order processed', link: 'https://github.com/Njambi-M/online-resturant' },
        { id: 3, imageUrl: blood_aid, title: 'Blood Donation Website', text: 'Website that automates the blood donation process', link: 'https://github.com/Njambi-M/Blood-Donation-System' },
        { id: 4, imageUrl: contxt, title: 'System Analysis Project', text: 'System analysis project for an online thrift store' },
        { id: 5, imageUrl: easy_leave, title: 'Leave Request Website', text: 'Website that automates the leave request process' },
        { id: 6, imageUrl: nlp, title: 'NLP Classification Pipeline', text: 'NLP text classification pipelines', link: 'https://github.com/Njambi-M/NLP-model' },
        
      ];
    
    return(
        <div className="container">
        <div className="row">
          {galleryData.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={item.imageUrl} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                  <a href={item.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    );
}