<template >
  <div class="conferences">
    <header-components 
      class="conferences__header"
      title="Конференции" 
    />    
    <div class="conferences__description">
      <span class="conferences__title">Совершенные условия для организации ваших мероприятий</span>
      <span class="conferences__subtitle">
        Ежедневно, открывая свои двери тысячам посетителей, представителям международных организаций,
        жителям и гостям города, центр стал не только платформой для межнационального культурного обмена.
      </span>
    </div>
    <div class="conferences__hall hall">
      <div class="hall__aditional-info">
        <div class="hall__aditional-info-photo-wrapper">
          <hover-btn>
            <img class="hall__aditional-info-photo" src="../img/photo-1607128295148-ec1ddc314455.png" alt="">    
          </hover-btn> 
          <span class="slash">01</span>      
        </div>   
      </div>
      <div class="hall__info">
        <div class="hall__info-photo-wrapper">          
          <hover-btn>
            <img class="hall__info-photo" src="../img/photo-1607128295148-ec1ddc314455.png" alt="">
          </hover-btn>
          <span class="slash">01</span> 
        </div>
        <div class="hall__title">
          Зал «Синай»
        </div>
        <div class="hall__short-description">
          Современная кухня - оригинальное меню с креативной подачей и необычными вкусовыми качествами.
        </div>
        <div class="hall__roominess">
          <value-per-unit
            value="329"
            unit="чел."
          />
          <value-per-unit
            value="452.9"
            unit="м<sup>2</sup>"
          />
        </div>
        <selector-btn class="hall__selector"/>        
      </div>      
    </div> 
  </div>
</template>

<script>
export default {
  name: 'conferences',
}
</script>

<style lang="scss" scoped>
 .conferences{
    padding: 28.986vw 4.831vw;

    @media screen and (min-width: 768px) {
      padding: 26.042vw 0 26.042vw 4.427vw;
    }

    @media screen and (min-width: 1440px) {
      padding: 13.889vw 5.139vw 11.111vw 12.639vw;
    }

    @media screen and (min-width: 1920px) {
      padding: 10.417vw 15.469vw 8.333vw 21.979vw;
    }

    &__header{
      display: flex;
      align-items: center;

      @media screen and (min-width: 768px) {
        padding: 0 16.67vw 0 12.24vw;
      }

      @media screen and (min-width: 1440px) {
        padding: 0;
      }
    }    

    &__description{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 20px;

      @media screen and (min-width: 768px) {
        margin-top: 30px;
        padding: 0 16.67vw 0 12.24vw;
      }

      @media screen and (min-width: 1440px) {
        flex-direction: row;
        padding: 0;
        margin-top: 0;
      }
    }

    &__title{
      font-family: 'TTRamillas-ExtraLight';
      font-style: normal;
      font-weight: 300;
      font-size: 10.14vw;
      line-height: 11.11vw;
      color: #09192F;
      
      @media screen and (min-width: 768px) {
        font-size: 48px;
        line-height: 54px;
      }
      
      @media screen and (min-width: 1440px) {
        width: 37.29vw; 
        margin-top: 30px;
        line-height: 54px;
      }

      @media screen and (min-width: 1920px) {
        width: 27.97vw;          
      }
    }

    &__subtitle{
      margin-top: 30px;
      font-family: Gilroy;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 140%;
      color: #09192F;
      opacity: 0.7;        
      
      @media screen and (min-width: 1440px) {
        width: 29.72vw;
        margin-top: 38px;
        padding-right: 3.82vw;
      }

      @media screen and (min-width: 1920px) {
        width: 22.29vw;
          padding-right: 2.81vw;
      }
    }

    &__hall{
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 120px;
      }

      @media screen and (min-width: 1440px) {
      }

      @media screen and (min-width: 1920px) {
      }
    } 
    
    .hall{
      &__aditional-info{
        width: 82.13vw;  
        height: 108.70vw;
        margin-top: 60px;        
        
        @media screen and (min-width: 768px) {
          width: 46.88vw;
          height: 610px;
          margin-top: 0;
          order: 2;
        }
        
        @media screen and (min-width: 1440px) {
          width: 33.47vw;
        }
        @media screen and (min-width: 1920px) {
          width: 25.10vw;
        }
        
        &-photo-wrapper{
          position: relative;
          height: 108.70vw;

          @media screen and (min-width: 768px) {
            height: 610px;
          }
          .hall__aditional-info-photo{
            width: 100%;
            height: 100%;
            object-fit: cover;            
          }

          .slash{
            position:absolute;
            top: 27px;
            right: -35px;
            font-family: Gilroy;
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 12px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #C48F65;

            @media screen and (min-width: 768px) {
              display: none;
            }

            &::before{
              position: absolute;
              top: -27px;
              right: 5px;
              content: url(../svg/slech-bronze.svg);        
            }
          }
        }
      }

      &__info{
        padding-right: 8.21vw;

        @media screen and (min-width: 768px) {
          width: 42.45vw;
          order: 1;
        }
        
        @media screen and (min-width: 1440px) {
          width: 29.72vw;
        }

        @media screen and (min-width: 1920px) {
          width: 22.29vw;
        }

       &-photo-wrapper{
          display: none;          

          @media screen and (min-width: 768px) {
            position: relative;
            display: block;
            width: 29.95vw;
            height: 23.44vw;
           }
        
          @media screen and (min-width: 1440px) {
            width: 29.72vw;
            height: 20.83vw;
          }     
          @media screen and (min-width: 1920px) {
            width: 22.29vw;
            height: 15.63vw;
          } 
          
          .slash{
            @media screen and (min-width: 768px) {
              position:absolute;
              top: 27px;
              right: -35px;
              font-family: Gilroy;
              font-style: normal;
              font-weight: 300;
              font-size: 12px;
              line-height: 12px;letter-spacing: 0.12em;
              text-transform: uppercase;
              color: #672940;
            }
            
            &::before{
              position: absolute;
              top: -27px;
              right: 5px;
              content: url(../svg/test.svg);        
            }
          }

          .hall__info-photo {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }        
      }

      &__title{
        margin-top: 60px;
        font-family: 'TTRamillas-Light';
        font-style: normal;
        font-weight: 300;
        font-size: 6.76vw;
        line-height: 120%;
        color: #09192F;          

        @media screen and (min-width: 768px) {            
          margin-top: 67px;
          font-size: 36px;
        }
      
        @media screen and (min-width: 1440px) {
          margin-top: 48px;
        }
        @media screen and (min-width: 1920px) {
          margin-top: 43px;
        }
      }

      &__short-description{
        margin-top: 30px;
        font-family: Gilroy;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 140%;
        color: #09192F;
        opacity: 0.7;          
      }

      &__roominess{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 40px;
      }
      
      &__selector{
        margin-top: 40px; 
      }
      
    }
  }
</style>