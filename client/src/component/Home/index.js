import React, { Component } from "react";
import RoomCell from "./RoomCell";

import {
  Grid,
  Image,
  Button,
  Container,
  Icon,
  Divider,
  Header
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};

  renderListRoom() {
    const content = [];
    content.push(<div>
      <Grid column={3}>
        <Grid.Column width={3}>
          <Image
            src="https://www.hotel-icon.com/public/room/images/2/Hotel_ICON_36type_Harbour.jpg"
            size="large"
            fluid
          />
        </Grid.Column>
        <Grid.Column width={3}>
          <Container fluid>
            <p>
              <Icon name="home" />City View
              </p>
            <p>
              <Icon name="resize horizontal" />20 m²/215 ft²
              </p>
            <p>
              <Icon name="ban" />Free cancellation
              </p>
          </Container>
        </Grid.Column>
        <Grid.Column width={3}>
          <Container fluid>
            <p>
              <Icon name="hotel" />1 king bed or 2 single beds
              </p>
            <p>
              <Icon name="privacy" />Separate shower/bathtub
              </p>
          </Container>
        </Grid.Column>
        <Grid.Column width={1} verticalAlign="middle">
          <Button.Group>
            <Button>2.5 ETH</Button>
            <Button.Or text="&" />
            <Link to="/book">
              <Button positive>Book</Button>
            </Link>
          </Button.Group>
        </Grid.Column>
      </Grid>
      <Divider />
    </div>);

    content.push(<div>
      <Grid column={3}>
        <Grid.Column width={3}>
          <Image
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExMVFhUXFxcXFxgXGBYXFhUXFxUXFxUXGBgYHSggGholHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGi4lHyYtLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALEBHAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEQQAAEDAgMDCQQGCAYDAQAAAAEAAhEDIQQSMQVBUQYTImFxgZGhsTKywfAUQlJictEHI3OSorPC4RUkM2OC8UNToxb/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/xAAuEQACAgEDAgUCBQUAAAAAAAAAAQIRAxIhMTJBBBMiUWFx8BRCUpGxBTOBweH/2gAMAwEAAhEDEQA/AM9yxb7H4D77FmcLXNN7Xjcb9i1fLRt2/gd77FkqzbfPz896w4Y+ij0Jy9S++5u6pD2tqDQj585VDgr8O0Mq1MPuID2d4Bc354BVkbllqi9lBUCrXBVuCNDJkVIKMLy4YkuLkrq448uri7KBx3KuQpSvSus48F2F1elcceAUgF4KYROIgKQapgKQahuCysBTCsDFIMXWdZWGroarMi7CILK8q8QrIXObK44pJVTnIl1NVOaidYO5VuVlV4GphKsVtqi360nquiot8HOaXIY5ype5IsTyhJ9hsdZ/IJZXx9R+rj3WHkrRwSfJGXiIrg0tfGMbq4D1S2vtpv1QT5BJAJ+etWNw7jujtVViiuSXnTl0ovrbUqO3wOr81S1xNySVL6MBq7wUmtb1p7iuAxhO7kb3lsOk39m7+YxZCuOifn53fMTseW46Tf2bv5jOGnashW9k/Pz87tJYehiz6l99zYbdJbXzN9pmRw/cbI70RiCHZajfZeJ/MfPBUbdP693Yz3GqrZ9SzqR63s7frt+PioyWyZSL3om8KsqZKrJUy6OQpBqiSpNegxiYprhYpCoFPO2N8yZ4RaO/XyQAUZFzKrSQorgkYXQuqQC4J4BdyqQarGtXAsryKTWK1oVgpogsqDFNtNWtYrWMROKRTU20yjqGFuJBjfFjHUYMeCsqZWCSFwLAmYclXswJK4dssbo3N3rv+O1D7FNjesy4+CANwqlssnchMc6lSsXAu4C/ihcVXqPE1aro4Tlb4BLKuPw7LAgng0ZvMWQsKTBttbebSjoOM6aALNYrlJWd7IDfM+JTHbgFdzbOYAJuLnXQCUJR2W3dTe7rcMo/iM/wrRjlBLdbk548kns9hLVrvqHpOc7xPku0sDUcYDT8fDVaWhgTwps8Xn+keSd7L2UxxAe+oRvAdzbfCnl8yjLxSXAF4T9TMjS5OVIzVHMpt41HNpj+I5j3BG0eTYiRzlXrp0nlndUqZGr7FyfwGBojM2lTa7e5rA6p+/BPirtsHnR0Q4/eflFu4eoWeXipNXf39/IYwipVR8ipbEcNKTW/tH5j+5TAHmjG7NLWPPOx0HWpsYwHonWQT5rb0OS+e5fP4Yt1Tf0ROM5MMZQqmCSKVQySfsHcLKTzNst6UfF8DhA7UImrgYOiJ2DTkHt+CYYhl1rlJ2BIY8t/ab+zPH/2M4adqx9XT5+fhwjRa3lnLnMDbnmz77eCx9R27Q+fX8jvCrhfoZjmvUvvubPbonEP/wCH8tqF5rQtNwZHbw79O9XcrqZIqEEgg0zI19kBZBuIrjSo7vM+spYrVEa1FmrdtBu9r29rHR4gKP06l9to7THqs7S2tim/WB7WtPwU/wDGcRvaw9x/NTeBlVmiaNrmnQg9hBXeaWZO059rDsPz2KQ2nT/9T2/hc4fEJfJkP5kfc0Ro9a5zRSzA1+cBLHVBBi5B9ZRZNQaVCfxNb36QkaaHtMIyu4LoJQoxtQa5D3Ob8SraeLe4O/ViwvDr79AW30Q3CEAqQclxx9OYLnNPWHD4LrcWw6VW/vD4ptLOGjXKwPHFLA4nRwPeuOc4bl2lCjUVwpNrhKW1z2dqTbT2jXLyym4BtrjLwE9I9fBPHGn3ElKuxsXbQpsEuMDrgDzU9ncqsOX5GUzUdE6wPGCsDS2PVqGXOJPeT3E2TvZmxDSe05i3MDcEZoidIICMljS5tgSm3uqRvX7bqkdEU6LeoZnd7n28gs/j8fRLpdUNRx6y8nwsoYehDjYPg2LwHkdEGxdpqvbDwXOVSIuXun94yoRep0WcFFWUOxTvqUj2ut5ISrjq+8hokWaOJ4m4X0ja3JlraOZuoHivnmMp9ID7zfeCdxoWElIsZTabmmHHi8uqH+KylsgDITAnPUkx/uOTRuDMxCV7NHReOFWr/McpY90WyvsQx0mq2PsH3grKVAkidJE9ihinRVH4D7wUm1Cd6E+TocGqpbMwbNco63En1KNoYrBM0q0exhBd4NWDxWxw2m95e8lrSdRFh2J9tGiG1KeUBvRfpbezgkaES1OmzU0ds0T/AKdKvU/DTLQe+plCsq7YrgS3CNb11aot3U2u9Vk881GNqO6Mm+8dF0R3gJhU2hQYxpqOqZYF3B8EkfaLb+KXetjnGKdchtXbmLNucoUx9ymXHxe74JdtHF1XUqmfFVndB9gWsaeibQ1osof/AKPBDSmXduZ3qVVi+VLHU3sp4eJY4SGhurSNQEqU2x6guImI5ODou7fgjcSLobYLYa7t+CIxR6S9CXUSF3K7Fv5yx0FtDvB39iWMxjnsdmiRlvxue9FcrT+s8EtwFQc3Wn7LI/eutGJLQmY8jp0Oxt91Zpp1RLnZRnbAmPtN7typOxa+59E7/aM+iUYJwzjtW7/xKjaXt0AMgrZhxY97MWbJNVRmzsjFfYY7scPiVVXw9enGeiQDYXaZtO6eC1f0rDnfT8P7IHabqX6vJknNfLGmUqmTDjUW1/JOGXI5JMTCjXH/AIKh7G5vQKBrOvNF1teibbrrdbPGGJl9WnoIBeGxrMQQk2JLIcA8wdwdIdBtI38UPw8HdMbz5LkD5P4c824gRLzbeOi3VM+ZMIzkjhg5lWLjnT7jVon7PYAA4gE2E7+xeVlh62ejjy+hWYarQV+AbZ3YPinO1cBlSzAj2+74qLVGiMrB9l4FlQ1i9hcRUgEFwjoNMWKPbsjC5HF4e0NaXOIvZolxEg7ty7yZptJxEtBPOi5AOrG28k2xOzGPbBYLXESIMG4jQqliyMptXk3QyB9B5PSAvldILM0gtA4gEbjISvZmC/W1Kbi4hrQR0nC5PUQnfIjDmqXudcxHXuVlDCRjK44MZ8EzdJo6LvcEpbPZY5Qe2/qku0qf+aNtCz3WrajCrKbVp/5x3az3WoK0NF2x1stozOm8U6hHbkJHmjsaHDmxmcRmMAxbonqQWzh7R/26nmwpxtVgil+M+4VkitymaVsL2Fs7nGOP+5H8DCp8jMNGIqA/VqVB4VHLOY7lBi8K57MO4NECoZa11zzdMe0D9taHkzWc17nOOZxc4uNhmcXEuMC1zJtZWhDTv7ksk7VH0bajhzRHUvjm0mRVHAPb4B4X0XaO0ZYvne2xOY/OqrklYmGNH0CtRwrHE1MRQYPvVGN3dZXz7DATVLSC016xaQZBaari0g7wRBWd2a2a2DJEl1Q5us/SX3Kfcn2/5dvek8tQVIKk23Za3CmpVgbqZ99qsOzHt3b0y2DVa2u4u/8AUffaitpbQZuhTktx1N8AO1KP6ir+zf7pR20sJmqUx9yofOmPirMZQmhVH+2/3Srtu1uafSdxY9vjzZ/pR07CqTtUU7I2Q6o9zgTNM2iNS1+sjqVe3cMTQY2oIh8dwpkj1V/JHbrW1K4c4CSwgbzarMDwVfK/GZ8KKnCowf8AygpOQ7qYiw9GmGjpga2G66sbUo5XA1Pquiew9S9sHpUBO8u9V8+pmCr48Wq9+ATnTof7HENd2/BdxXtKvYrui7t+Clij0kX1FBRys9vwSnAjoVexvqnHK1vTPclWEacruBbA42M6d604f7aMWXrI4P2h2hfTWMoupi94+w7rOuhvZfPdmbMq1Hfq2F0XO4ADUkmwWgrbdaBLKlwyIh1y2YFni3XErVimk3uZMsG0tjSGjS4fwE9+iTbeY0c0WgDWYbl3a3aEuo8o6jmyAM0iZj8kzGFq4qmx1KKkOcC3osc2LSZNx2EpsuZOLtiY8VS4H+zqeH5tocxpMa8zM678l0hdgWubVOVsiMkB0XfBzQ21kyxW1BgwynVa8WsQGEO4i5EEH1SVu18PJcBVdM/+KnvBGs9aeOSFXYrhK+BvyYeWUMQAQ13OkCxgHIzTeqcayq/IKjiXQ1o6TpuZmSDPWu7A2kzLXeRlDqpdDrEdBndu3WRe0MXiC6n9Hp0Xi0l78pYdekJmI4Arzpu5s2RTSQTjcXc0SCSymwl+5xIII4g2lJ8Cfb7vigdsbeNKtUp1Mr3w2XU5a0mJiHE/a18lXyZxxq86SAIyxv1zb1HJjdajRhkro0HJFkuxH7Qe6tizDAgjqMd27zXznZu2jQfWa1md7qogTb2QItvlabYnKSpWqOpvpBpFMkS7JJLmty5nCJgz3LtLoab3FX6OgJqfhP8ASr8MycfiPwM/pUeTGF+j4irTE5clsxaXfUn2dRJ1gdg0V+zROOr/AIGf0pZdTCuj/H+xn9H17fgFg+UNOMXW6gw//Nq+mhlz2/AL5zyqb/msT1Mb/KYmBifqBtl4wy4fcf7hWnpU6lXmobYkkGxnoE+hWD2RU6ZH3H+4V9h5INbTpscQCRRphs7i9tz4NI70FitnZslbmdxPJ7D1qxFetUpugNIZlFoa76wM3a0+KtwdMUy4AkgOeATEkB5AJi0kBNtuUMPUq85zfTjpODngWEDogxoNyIpbOpZGyCJuYJ6yfgioPi9hPNjVivEYqyS4lmYxxIHiQFpMVgKEWdUB7WkeED1QFDZtN2Zzqj2taRBDQ4ucDJsSIGnj1LnB1sPDLGxrS5FbPbUBPOENILIqOBY4uLjEbiSI4HjNs3hKLWioxlmMrVmt39FtRzW332ATQ7SBbUcXEAGGzEmACSY9kAQlDcXTLC5h6JeZvJzudJJG4EuHcQprXXqGpJumL9r1yx7SN7SPMJb9LcSJO8equ5R1YcyeB9QllKsJHaPVdRRcH1PEmKNT8DvdKW8v3w2h+I+6ETtCpGHrfs3+6Ut/SFVhtCTvd6NR7EsfUiHIhwGPokaxU/lPWi/SfVnDD9oPQrHcnKxpVWYrovYwPJaypS5z2HN9hzhe+9PeVu08PiaTGMrsBL7CxdLW3blmZGYaJalpoaUo+amIOSuKkFhIDWu1+zIkkwsltXA8zVyZ2vs10tmL6i+8GQtzghh6VINdiriTAoPykmYBIPnEpW/YeBq85V+luzQTlbTqEeza7mjWFSE9LYJJPcV7EqdF3b8FPFu6SB2Ieie34IjFnpIteoqd5WUOmJ0cIngTIB8YSLCVINx3AbpuL9/itdy1p3aPuj3jwus3SwjnHK0SeA9SN3fJ7FbE/QY5q5I+gGgKdBtKA1pBzjNYzuzQCR3BI6mz8MTlZTbPUB5WQvKDH1KlctohzxA6IaXGwAsG3j80y2LsDGuN8M5ttXFrfeIPkpKEqspqitmZvH4T6PUDAZDm5hNyLkET3J5yF2jFRzODg4d+vomGL5DYkk1ajGuMRDH3gXi8T3JRgqNNpzUgWmCCRLdbEEhUnL00+ScYpytcGv5Y4+hUpljHAVgMzd0kC7e8SO0hfN6mKxbh7LwOuR5GE6qVItHgB+aXbfo/qxUBcHNs5p3t+0OsGLcDO5ThzTKONLYXYZlXnGmoDlBk3nS4EAzrC1mycTXe61B4aJvlfBGsyQBv8lgfpDhcOIPEEg+SIO0KuTKatQt4F7iPAmFaWOycZ1sGco8LW5+o9zYDnWOZl4ECwMj2d6O5K4hlPOKjmtLsuW4OmbhYahZx9Q2uV5jriJJ3dqaUHKOkEWoy1D7aWGqurVHUyQA/dOsA6gW3IDFYeufb5x/bmcIHXJ4LV8nsPWNE530ml7i453NL9ANLxoh8Hykr4es9oIcxryIFhYxIPWlTa2KT0y3RXyJp1KdUuNJzQWOGYtIBl7SLxwCfVMdUw9arWFFzw7m2C4AkwNddYEAb9yLobbweIjOBTefrN6Lp64s7vlW4vk4a7MtHFNNwRmBaQWmRcSCZA4KbVyti6qjRRS5U1yTGGO82a87gTqRpZCjYmJxtSs8Uubc5uUl5imIaGDi76u5pQVfkTjmaveRxaa75tGlOqY04BX7Ew1agXAYgknUZnBwjtcXb96LUEhY6r2Dtifo2qsdNWrTm/sZ3WIIjpBvGVqKGxK2FZkL6lcWhwouhrQIawBmawG8mTKT09vYpn/lkcHAO89fNH0OXFZntU2O/CSz1lHXEEsc27OuaXEjKSZEgAyB2bkVi8TAgDq7Bv7P7LreXlN1nB7O0SP4b+S7VxGHrdMsY4H6zbE/8mkFdtWzF0y7ilzjB1lQFUNpa3ufgmFanhQLZh1F5d78pVXp4fcXfvGPNI9ikEZjbeJy0al4kQP8Alb4oHYFUig4by90CdXBjSPRamoMOei6m17Z0cAR23WQ5VVW0XRQAaw5XQ0mA+XAkXsYA0XQ3WlclJuvUW8oXGWdjvUJVSPSHaPVdGLdVawuMnpdwkABciDPApWqdGmG8LPpe063+Wr/s3+6Uq/SVjSxlF0Tdw1j6oSR3K6nUpvpZHgvY5o9kiSCL3nyVvL3abKlOiaVVroLpLHAkdERMG2hTRg1JJoyOSa2+TKV9o842MsHjM/BEMrVg0N58AHpZS9wgka6RoUubiHO1M9oa71apVz7P4W+gWprsiEeLaD6mIxJEc813/JhPibqiniK43yN9mGyCK4NUNH0/YdSXz+//AA0ewz0XdvwRGL9pC7D0d2/BGYkXWSXUbLHfKWk2pUAz5WhgDiNQc0wONkvdXbTHN0m5AYvBLn2N3EDqNk5wWHwWIaHAT/zfY8CJse0KG0OR7HgmjWcwwRD4c2+6QMw7bp8bitpGScn2EmBa05muqNaTBaXODSbaDMQZBT+ly0GFpc29+eq2wFyQIBE8N2vHgsHt/Zhw7gxzSH6knRw4t3EJdiapeR91rW6zZui0qN7kNR9VpfpNphvSuTp0YgdYHwSLlHy1oV5LKAa4x0yOnbhu7zuWEZRJ3Kz6OeCOhdwKT7F9TaX2RlNoO8RpckyB8Su1Nq16xa2pULssxMaG7tLnvQjqSrpGHA/Mb0dKDqZY/DuGu4+McPneuO9larY9am0dNoInLJE3A6PiLdyZO2jh26MHc1rfRZsmZwlVGzDhjONpmIp4UuA103CVfQwYDhM+QTrHY5jtGnxS+nDjYC3el82TXsW8nHH5GOzqYE9Rtc/BBYm1V07zI65+fJFYap7Xb88FVtc/qg4RIeB1wWukeQ8EIN3uJkS07F9Oi139kRhalWkZY63AW8tPRK8DjgbaHh+SZ03yFRqiA4wfLasyxv3kHwNvNN2ct8PVGXEsBH32zHYdx7FiarJneltd5a0xMTC5AZtNuBtMtqUXZqNQS0zmjfEnURxSl+PPFdo1s+zmzcsdHZDiB/CQkRelcdx03QwrY/rRnJ3aRzvZNnDN3iB6HyCz7mko/ZFJ7amYi0EeP/S7SqDZp34goeriTxVFTEhBV8UG3JAHEpaGBuUVUlrACZLxpbcUnx4LYGZxmZzGYg27ohW4/abXOblk5XTO6yDqYrO5xdExaNJzNv4BXjFqiLcX3C8HXqOBaHAZW8ATA3Xt5K3CEuYHEyTPqhtmm1Q/dd6I3Z9BxpMgdfmp5O6+TRhajTfs/wCQAYF7YMGyqykNcOwi2uo9HeS1LaFYi7ZHEiPCFVUwgHtsJ7DZIvEO9w/h4NbWjL0JLgIEkgbhqeNoVzgwxL4MCxB4cQn7sLSP1YPDRDVNksKf8TF82hV4XtFpiV1MbnNPf+aiKTuCa1thiJa6e4hAv2a5pVI5oS4Yr8POP5f2Y62EOi7t+CMxGqC2Eei7t+CNxGqzS6ionwdVzTnY6HDwPURvC2mwdttqC5IePab/AFDiPRYPLB4hG4dpkOYYcND87lWcTKnZ9G2rgqWKpc1V7WOHtMdxHxG9fOsVs11B7qVRozCL7nNvDm8Qf7blsNh7T55uXR7bOHDrHUUdtrZ4r08ojnGg824xr9kz9U+WqXHkcHT4FnC9z523hCk7Dv8Asx229VwY17CWkXBIINoIMEEC0yFM4qubCW/hAaPIBazPYHicM4a/PwS4psdmVn7ifEq2nyef9Yx3geklc5JcsKUn2LNjOD2lh3tg9RbofQrgw8SCLgwb7x2I/CYDmxAIHGAT+StcwEzodJ3W0tChNp8GnDqixYKI4eU+ZXqRiUfUoobmwos02wem7XtVePxALMl5DgerQj4qwOAlL67pJVIoVlD47EVhdpltnXHHf/dDOVZCts+SMo+xoBiQ72TYqnatOA2Ov4JNSe5plpRdfHZ9RB8kNNPYW/c0OwKWfD1GGf8AUt3tE9+niot2awe24/PYk2H24+mzm2hsSTvmTqTe9gPBC19qVn6ugfdt56pXCTY2uKRpK1fD0hqAf4j8SltfbzPqtce2APz8kjFOVMUk2iK5Oub4Cq21qrtIaOoSfEoN2Zxkkk8Tf4q5tNWtprtSXAywt9TBRRO4Su59zsw/DAHeN6YU6IspmgN4/NL5w78MnwCYAmHNabOBEQSXA2sNy1WxK3M02NOUkTY6i5jq0hLMGwZHQMsA6a9qrZVAAF5Uck3Lg0YfC3xubzD7fgRp5jwMhTxGNpVB0qbD1gZT/CY8lhW7QI/7I+CZYTHh0AWPme9ZZY1zRqeLLDfn7+BliMPQOjiw8DDh3aHyQVXDRvBHV+SaUap0c0EKFehRI0LPL0skWxCU7e6Ej6XAoarRsb7jqm78DPsvDh1wfMIarg3gGRAg3mR4ap1IGqPZ0ZvBY7mxETKJqbUBMwUocYsbFclei8absxeYFU6iLwdYA3NksBVrDxTyjZni6NJSJa7naLocNx0cN4K02ydqtqtnRw9pp1afy61gcFiiLSjm1i13O0z0hrOjhvBHBZ5QK3Zrts4VgPPBgJNn+gdHl4JaH8AB3JlsvbVB7Axzg0vbDmusRO4Ei/clWJo5SWkzBi2/ge9JvwwxSOvrHih31SouqQhqlc6opDF5BnUqmpiIMDvsqX1ZGvz3KpjuuU6RwYx0iPnrVbm2VDa0EWTAUszZmyGwysSVXQVRUpkjMO9MMRSaEK5+4I6vYooAfNrmQK8sJXRh+KbWN5YMoupEo7mgF5DzPYLwp8gLcOd6uFEK+FyV2ts5YoxKRSUubG5Xcyd9ldSphK5jaUUU6CKZTAU4jQLrG8RKRts7ZBOH2eXXLgwdd3HsH/SrrYRoJAcT1mL90WR9Yg3kGTPbv4ISvG78vJKhJSZXR6IIAmbXQ7sNVaM5bLDMEEcd4Fxpqrzf5Kk7aQY3KaeYz0SHZZHDQyUafZCLxOXE9UGLfpQJ0Fp9d5XnOGm/tUsNVZUqE1gI3AW7p1lXVaTWgtaD0iBe51sJ7YTuk67l4/1Sf5o2zb8iKX0lhBMuZAPGNxPHQozb2ziw5Ur/AEY1WUK9V1ZrwQGsF4AzEl0jf7LbzHktxykfSq0y6m5rh92/ceCw5FplsTeXXLUlR82c2CfVD4is49GbdfFM67YKXYhuqdFOeRFjcLmvv9Usdhjw9E+cgq4krXiytbEJ4IPcV0zxVwehipsK1mEIJ3/JRmDFU+y3Xe7RA03XWk2dVztnfoR18VLI6VlMasH/AMNzGatQnqFkZmgACwFh3blc9h36KmtA3+ChqbL6Ugd1aDoomqFGq4/BRLZ4JgUVuqzuROF1VDSBZEUagBhFsKRY+hOi41zh0fDgeKLzWVVUz27lPUUSAqlGdVVzICsq4gA3KHfiHHQR1lD1MsnFFpjs60O+sN11wU51kq+nhXGwC7ZcjbvgoJUDO4Ji3Z53qw4WOrq3pfMiPpYDQwZdcmPMq4lrNB371J5doBCpNLj3rrb5BxwcfUJRey8JnPFDc0fnRN9ighyOyRN2HYvZYaxKaNMB0da02PcMvd1eqzBPTQTAke2lh3UqxYR0HgVGa6OmY/5Bype+BuPWjOUNUubSfvYcvcb+o80DUEid58+0J7EcCD6mpGltdUFi3Zh8NO9XvpSDBAI3ExOmh0PYYPUgKxIMEQqwW9meYO8uT3k5g2vIqFxJaZAIsCLgnWRolLkw2FWh5ECDe54f9o5W3B0JBVLc3OHxFocGzxgad/qovcRJBAG+Ii/Z6Qg2V2mMzRI/eEd8H19TKtVEZrkGYv8AH62q85x3NZ6tUDj17omD4oPEssrW1gWmZH2bHXWbGNfVV4avnZ1iQfUHvBBTU0FMSVrSUAjMa68IErTjWxzYtC6ogqdNpNgJW5nmrcsY8BNtiYmHEC8j009UFS2Y46mEzwOGbTmLk6kqGScaotDHK7GTp1J8EM8K7N3yqnNJM71mNFFbqdhZQLVY8mSpA9SNhoDylWMarwCvNtfijqOovptXatHeu5rLrha6UehfjKU9Id/z86qGHwpPZxKJPC/eLFXsdoSfCJKE20imNJncPhm77ox4iBZvVr/0qqLnaaDfGp70bRw8jgOPFZ2/c1KJWyg42Hp8VH6Hu379JTSm3oi5+KupYSez8kl0NpQgqYJR/wAL4iFpeYAMAGeO/u4KBw06juTKbFaTM0/CRoFyk3Ibp9iMNH9krxFOE8Z2TcDmJxMiyVusURVB3IVzTqVSyek7jnzTI7D4FQpnoquseiR1Feov6KbsK+QavIuHQQhKtY8I6vq9w3IrEReD2hAVSVpxmPJycFUbwe78j+aJwb2ZgcwHb0T4kZfNAPUFVwTRDW0bXDYqmdXAdnSaeGkj53InnsOL873XcD3HT5ssCFKVB+FXuVWf4NnjNvsEBu6wDQ0E9pC7hi5rXFwhziXEfZkWHkkvJzCZnGodG6fi/sPUJ8d54LNlUYPSjTi9StiTFm5QhCZYlgKE+j9YVISVBaEabbO9leXlrzdJgw9QxZorNy8vLGbC5vz4rm9eXkAleI+I9VNn1vncuLyJx5uir4Lq8uOLqX5Kfz6rq8uGKzr88VXh9fnivLyWfSUxdQyo6DuTEb/ncvLyzSNqDMJqe38003fu/FeXkjBMjh9fnqU6u/8ACvLyVirkUn2SluM18PQLy8qRGFzkP/deXldEZANbf2KLfYXl5V7EHyL3/wCt3KqovLy1rt9DB+r6sHcoLy8qEGeUl5eRCavk3/oH8Z9Gpg/TxXl5eVm639T08PQhXX1QlT58SvLyeAWf/9k="
            size="large"
            fluid
          />
        </Grid.Column>
        <Grid.Column width={3}>
          <Container fluid>
            <p>
              <Icon name="home" />Sea View
              </p>
            <p>
              <Icon name="resize horizontal" />40 m²/431 ft²
              </p>
            <p>
              <Icon name="car" />Free transportation
              </p>
          </Container>
        </Grid.Column>
        <Grid.Column width={3}>
          <Container fluid>
            <p>
              <Icon name="hotel" />1 double bed
              </p>
            <p>
              <Icon name="s15" />Shower
              </p>
          </Container>
        </Grid.Column>
        <Grid.Column width={1} verticalAlign="middle">
          <Button.Group>
            <Button>3.1 ETH</Button>
            <Button.Or text="&" />
            <Link to="/book">
              <Button positive>Book</Button>
            </Link>
          </Button.Group>
        </Grid.Column>
      </Grid>
      <Divider />
    </div>);

    return content;
  }

  render() {
    return (
      <Container textAlign="justified" style={{ marginTop: 100 }}>
        <Header as="h1">OUR DISCOUNTS NOW</Header>
        {this.renderListRoom()}
      </Container>
    );
  }
}

export default Home;
