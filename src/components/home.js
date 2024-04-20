import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../images/image_1.png';
import image2 from '../images/image_2.png';
import image3 from '../images/image_3.png';
import image4 from '../images/image_4.png';
import image5 from '../images/image_5.png';

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const images = [image1, image2, image3, image4, image5];//

  return (
    <div className="image-slider">
      <h1> Content based Image Retrieval System</h1>
      <a href='https://aaai.org/aaai-conference/'><h2>AAAI</h2></a>
      <ul className='d-flex'>
        <a href="https://www.linkedin.com/in/avadhut-jadhav-9b5884258/"><li>Avadhut Jadhav</li></a>
        <a href="https://www.linkedin.com/in/preet-savalia-a06b3b258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><li>Preet Savalia</li></a>
        <a href="https://www.linkedin.com/in/vedant-funde-aba919258"><li>Vedant Funde</li></a>
        <a href="https://www.linkedin.com/in/harshit-raj-9bb2911b0/"><li>Harshit Raj</li></a>
        <a href="https://www.linkedin.com/in/malhargadge/"><li>Malhar Gadge</li></a>
      </ul>
      <h2>| Paper | Code | Dataset | Poster | Slides | Short Talk</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
      <h2>Abstract</h2>
      <p>In the realm of computer vision, efficient image retrieval stands as a cornerstone for various applications, ranging from content-based search engines to medical diagnostics. This project, titled ”Image Retrieval,” endeavors to craft a robust system capable of swiftly locating similar images given an input query. Utilizing relevant techniques, including Convolutional Neural Networks (CNNs) for feature extraction and advanced dimensionality reduction techniques such as Principal Component Analysis (PCA) and Linear Discriminant Analysis (LDA), alongside a number of machine learning classifiers, the project delves into the intricate realm of image classification and retrieval. The CIFAR-10 dataset serves as the bedrock for training and validation.
        We begin our project with the acquisition and preprocessing of the CIFAR-10 dataset, splitting images into their constituent red, green, and blue channels. Employing a pre-trained ResNet-50 model, features are extracted , while PCA and LDA are used to reduce the high-dimensional data, distilling crucial insights while mitigating computational overhead.
        A collection of classifiers, including Decision Trees, K-Nearest Neighbors (KNN), Random Forests, Logistic Regression, Support Vector Machines (SVM), and Gaussian Naive Bayes, is applied with the reduced-dimensional feature vectors, each having a different accuracy on the test dataset.
        The deployment of the project lies in the realm of image retrieval, where an SVM classifier with a RBF kernel emerges as the most accurate and able classifier. Predicting the label of the input images, similar images are produced through the use of Nearest Neighbors (NN). These retrieved images, serve as a testament to the efficacy and prowess of the retrieval system.
        In conclusion, the project not only highlights the viability of CNNs and machine learning do- mains in the domain of image retrieval but also lays the cornerstone for further explorations and advancements in the ever-evolving landscape of computer vision and image processing.</p>
        <h2>Keywords:</h2>
        <p>CNN,KNN, SVM, PCA,LDA,Naive Bayes, Decision Trees</p>
        <div className="links">
          <h2>Links:</h2>
          <a href="https://github.com/vedantfunde/supreme-giggle">Code Link, </a>
          <a href="https://www.overleaf.com/8823481134kffwdphgsnsx#497c35">Report Link,</a>
          <a href="https://docs.google.com/presentation/d/1TsOftL0aE4uKKje-xW4Bg0LNwqW71GmgFuyIYiNuKLg/edit?usp=sharing">Slides</a>
        </div>
        <div>
          <div>
        <h2>Cifer dataset image</h2>
        <img src="https://samyzaf.com/ML/cifar10/cifar1.jpg" alt="" />
        </div>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zN9ZINn7g24?si=DBgpZ-saGQCz02Nf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
          <h2>Team</h2>
        </div>
        </div>
    </div>
  );
}

export default ImageSlider;
