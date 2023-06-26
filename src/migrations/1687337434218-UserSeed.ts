import { User } from '../modules/users/entities/user.entity';

import type { CreateUserDto } from '../modules/users/dtos/createUser.dto';
import type { MigrationInterface, QueryRunner } from 'typeorm';

export class UserSeed1687337434218 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    const users: CreateUserDto[] = [
      {
        email: 'victor.larson@example.com',
        password: 'worthy',
        first_name: 'Victor',
        last_name: 'Larson',
        image: Buffer.from(`/9j/4AAQSkZJRgABAQEASABIAAD/
          2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/
          2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB
          D/wAARCACAAIADASIAAhEBAxEB/8QAHQAAAgIDAQEBAAAAAAAAAAAABgcFCAEDBAIACf/
          EADwQAAIBAwIFAgIIBAUEAwAAAAECAwQFEQAGBxIhMUETUSJhCBQVMnGBkaEjUrHBFkJi0fAkM1Nys+Hx/
          8QAGwEAAgMBAQEAAAAAAAAAAAAABAUCAwYBAAf/
          xAAwEQABBAECBQMCBAcAAAAAAAABAAIDBBESIQUTMUFRImFxFPAjJIGRMjNCocHR8f/
          aAAwDAQACEQMRAD8AqPHEGVWYrjxjXq6LHJTRRqeqHqNcFMlQjKrSNyd8Hxrsm5ZgCpBI6dNIhsisrnjhdEJyca67euWbn
          BOOUgfPOtcLGMcp7ex1I2iBqiqaRV+CMDmz2xqi1CZY3NYMkoitNy5Gl52C83qnkm3LNGnNITBGfw14NrROs8o/
          BRk6lK6bLs3phckZIHfHbWhiskY6YPzGjKdHkQtZIdwh7VrnSuewbFcX1WhCnEJf/wBm7fprknlp0+GOmh/
          Ncn99SLQpkIXxzEDPgatLF9DTYktrt1Y+67zK9fAXFRTxLLFzADrhVJAPcdxjzphHWDuiG1kqoD+ifvRBPmp/
          313WulpzKk9PXRuR3jZSrD+376cm5vok7wiCy7avEFekys0EdQhp2lAJGFJ6E9OxwdKTcGwt47KqTBuTb1fb3Q4LSxHkJ
          +TD4T+uqLNQvYWq6J5icHEdEVW5oK2H1KSZJAMh+U9jjz7a+izNS0yRgArEepHgtoetd1IoJaCkhhgnI5g0ShC/
          uDjp10X0VMcNEq5ESIgK/wCbzr5/d4W+rl/v/wA/
          fP8AZa2tdbZ9I8ff37rkscCjdKN0IXqToa4jwn7UpeY45KpWA98kaNbbbZVvULuGQt00M8VYI47hS8jAMs6KR5wGXvqfDY
          iyywn2UbjswPHyt6gY175dYjGRrcE99btY4INi9OdVKn4h0OtVVEady5HR8YI8HWt6nl5QowTrpdvXiXnPUeDoJuQUSd16
          bBjUsuenfUzQz09uoESpJSSZi4jC5kcdhge3zPTXArLTQx4RWqHHNGrDIRf5z7/
          IairzfKOwUkldVyM0jdz3eRvA0bCwtOsqtzOYMdkSPcsKzGjhjTvzTuWP6DAH66HrhxA25ROYZrnTPJn7kEHOc/ln
          +uuLbmx9zcSyKq8VE9HQO3wUsRwSv+o+dOXYX0dNs2FWqVpBPUsciWb4ig9h7a8+y1nXqj63C3zY0jA8n/
          SU8O53r1DRbbuMsZ6hxSmPI/Nj/TTF2pxp4n7Poko9u7xu1FSoAqUs4V0jA8KHU4Hy6aaEnDeMLyxwghfIGoG/
          8NZZaZkpFSKXHwsV5sapF0jsjZOBNHR261030tuJ6Qi37jgtd6pwwYiSEwTD5q6nAPzxpkbe+ktwn3nZJdvb8
          +sW6SojZHSvQSQuSP8AyDIz8zy59tV83Bw9uMYKxQHPfKjzoButnv1rJWstsssY7OinI0Sy2Sc5SqajNB22/
          ddV4e3wXyvNhqGloEqZBSydQXiDHlJz8saPuGm46Wqq3sdSq80xWSF/PMO6H9M6T5u9NTEidmjHu6lcfiNS
          +3by1su1DeIuv1eZJTyno6A9cflnQluu2xGfK5WmMEgKsLNSpT3ukPKD8eD099LTjRJHTVC1pTtUAvjx1XTOnJnrKW5LLzwyyqUI8KRn
          ++lV9IHmgp5IhkczcwPnuNZ6Cu5k7XOHhPp5A6FwHuhubf1JGP4FMzfNjjUfU8RKsgiMQxfudLzlkb78rH89e1jQd
          +utZpWVymBSyqx5JRgntnXdSRI1QFeQ+nEDJIB/KP8AmPz1El2WpU8uFGpamljPMAAGkKJn3Gc/
          2GgogC8IhxK2zStl6iTAd+p+XsB8gOmgdKSbd2/
          ae3Z5qa3gO48F27aLbqzeg5CkkA9Mddd30f8Aact0vNbd6mPCy1JAYjwvQaNkfoYSiYItcjYx0VgeHO1YqeliAiwABjppq
          UVokRVCDlHuBrG2bVQ08McYdF5QASSAPw0waW2UbRCQOmB7Y66TucSVsIg1rAEHvZZZz6aHmA/
          HXiq2zEseZcKP9Wj2lhpoXeXlBGPbQLu28Vz1McVGsuVzzRJgZ9jn21XnHVTL8bYQpdrNaUDc06hvHTzoRrtuQ1hKGnGPD
          gZB0eJYIbpAz3e60sIcnKmQuwPgkjtqNqbDW23llstZHWU33XRG5hn3B8HXC4gZCH2edwk5xb4NUF52l9epqUPPRt6uAOp
          XHXVbaGlp7TUtQx1c0QDYETDmUH5eRr9AkphPSmnngZOdSpVx76pfxt2tDtredXAU9COU88TqvTr10TTsOdljilfFabGgS
          gI6sPFOOW1Wqx1lEscdGVM1Yc4cL09unTUHxkvVHuaw/
          bVsXNOy8qsQRzBWAJGdLW00tfU1UUFtjmrZCykxxpkHJ7d8D8dNHjRT1Fv20KOupIqWaOFQ0URyqH4eg1Kx/
          OZ5yEvjJ5Th2wUjPVGs+qNchk9s6yGc9lJ/
          LTfCSpvI9tbCSUqIR15nc611FztIBjlm5gcdIlwRj2OoCNYGdRIGLHySddgSJJAqqgH4azUVOXVqfIfv9U6fdiAw1gRBQx
          016p5qSCnqqjmRgZWIAjGO/TGnfw82rT2zZlvFjp19SoqXgXlHflIzpc2nam4ZOFtZuPbNsaslkqjRuY3
          +KIkAr8OPiyObt7asB9HWyVtdwst9xni56ijmqpAjDrzlsefw03mqWIIg6XJDtwVGjYbNKQ3Axsp
          +Tbc1qoEe63qipT6YyjksV+YA863Wje1roVSFLstakTAOQpU/l4Oomu4X1F
          +f67vK9vNKWLGngjJQAgjHXpnr37jAxjXTZuGVrpKgPQUBgiDMcuck56toMQa27HfwnzZXMPTbzn/CZFbuBKO2PPEF/
          ijKrjsCOmlVdEvVfNNySdJXGcn7w7/mNMW/
          Wi4QWSGsjhzCR93zgaj9vGjrpY4T6XMfh5JfOpyxASAFExhzY9QQJW8Jf8QuKir3FV00LRqDHmRmD4wWTGFXPft00Qbc2F
          TWKpWW3XOumCfe+sSFw/
          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
          V3GVXMayNZIwSMjWdP1nk06d/
          VVi6gY7ZGtuRy8wcgrrlDEMqjUiI6dkCuvXHUjS9EnqiDZfoPUCqaoKzRn4RjTCuslFWWunrJKhZa55GWQeyAYGl9spKBr
          olLImOcYBz30UXiCG2337PTOBGrAk++lll2ZtPfGf0QzM/
          WNUXfd73Ohs1PYJ6yYpASETJGFPUY9x11GbS3G1DVpLS1BjLEBj38nH5k+/
          wAtet6Wqa71cSUKq08VNzgDyBnQTDWGgVTylZkYiVj15/H5af1JRYiDij5vw34CtvYpKi/fU/
          tCTKnGec5BIOCP29tStTcdu0s8tI9HGs2GRZOXp0PfOkzsrfMFDSQTSVagUwLcjSY69vPyP6nXBuTihSNMZo5vUm78qtnk
          Hzwe+PGouY4HAR0NsMZ7rt4tV9rjSSlpEjHPG3MQw+I+G/fOkPXVDTSc7jCHGWyMlgOv7/
          11Pbr3sl2qPrSvkgOWwchiRgfpoQhWoq5uSIPLnqqn9hq5g0DdBTS85
          +yIrTWSR4pYpWGW5wyrhs46dR2Gemj7h7wmud1vCXm6R4gDqyqcEvk9B799SPCThW9wozftzwlEB+CPr26dSf11ZzY
          +yI0oFu88TCHHLRxkYJH8/wDt8tLLdrlghnVNKVPmYdJ0Q/
          XbdY0lPaIU5hGoLnxnVdeN9h2xY6h6emurLcpCPVo4cMgB8v8AyH/mNNjjrxsptotPs/ZsqT3ojkqqtTlaTP8AlX3f
          +n46q3VLPLNLV1byTTyEu7yMWLOepJPvq3hXC5XfjS7Dx5XOL8TixyIhk+fCHZtvQyOZIpii5
          +5jONaZtuzq2Ipkb8emiOOB2bLA8oHY6yQoJDIOnc4/prRGozus1rypJXD8pHfOu1pVGCehA651FQyEYPKRg66ZpGnT
          +Hkn2xrNYRfdEez3Em46FFDPmTry+2jDedRT028hDHLnNOnc+fbQTsOSoo7sk0cgicdMt7aI7/Ek9
          +hnmkEjNluYeeh0usj8xqPTSVQx35ti7IKiKl3LTGaoRVmo5FYE9Ox0u7nNZ6h5IRVRrIXyWB9vGpffbAyUMgJHNBzfh30
          sqagNXUtUVCssQYsAehcf7aa8LiL4xp6ou27TK4/CMPsGvFClRDUO8DEvE69VHXDf2/XUGaaqmc0cUbsx
          +JvfHtqz30VtrUu89oXq3VEcQqKCrjmhVlDFFdT7
          +PgGmMvCqzWa7PcJ9rxCYtjnVeZT88eNFzzfTuLXBWw1uewOaeqpjt/h3uXdVesVDaZVAYZLxkKPlp7bD4F2/
          b9SbnuNo6iRRmJCOir8/GnU9tqRA8NDZljBwQeTHUdBnRBY9nQwr9rX6QM4AKR/
          5E6dz740psXi70tTavQbH6nLl2hsU3f0aq4QJDbIcFI8Y9Qe5+Xy86DPpG/
          SAodlUcmyNlVCveXT05ZkORQxkf8AyHwPHf21B8bfpO0lqjfavDOpFRWojQzVqHMEPvyjs7jHfsPnqqzvNNUS1de7Szuxl
          eSUl2dz1JOe/vpjwvhT5CJrA27BBcS4q1gMMB+StDvUSSM85kknmcnLHPU92J7k6w8Ts/pK7co7/M
          ++t6Ru59cPnJxjzrbGqR80hyGPUYPXWp0YGFmQ7O61pEsYKs5GO2vXoRsD8JbIyTzdBroPKwHpqWYjrnxrw8al+QjAUEqT0xqWld1L/9k=`),
      },
      {
        email: 'roy.mcdonalid@example.com',
        password: 'nextel',
        first_name: 'nextel',
        last_name: 'Mcdonalid',
        image: Buffer.from(`/9j/4AAQSkZJRgABAQEASABIAAD/
        4gKgSUNDX1BST0ZJTEUAAQEAAAKQbGNtcwQwAABtbnRyUkdCIFhZWiAH3gABAAgAFgAhAA9hY3NwQVBQTAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAtkZXNjAAABCAAAADhjcHJ0AAABQAAAAE53dHB0AAABkAAAABRjaGFkAAABpAAAACxyWFlaAAAB0AAAABRiWFlaAAAB
        5AAAABRnWFlaAAAB
        +AAAABRyVFJDAAACDAAAACBnVFJDAAACLAAAACBiVFJDAAACTAAAACBjaHJtAAACbAAAACRtbHVjAAAAAAAAAAEAAAAMZW5V
        UwAAABwAAAAcAHMAUgBHAEIAIABiAHUAaQBsAHQALQBpAG4AAG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAMgAAABwATgBvACAA
        YwBvAHAAeQByAGkAZwBoAHQALAAgAHUAcwBlACAAZgByAGUAZQBsAHkAAAAAWFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAA
        AAABDEoAAAXj///zKgAAB5sAAP2H///7ov///
        aMAAAPYAADAlFhZWiAAAAAAAABvlAAAOO4AAAOQWFlaIAAAAAAAACSdAAAPgwAAtr5YWVogAAAAAAAAYqUAALeQAAAY3nBhc
        mEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltwYXJhAAAAAAADA
        AAAAmZmAADypwAADVkAABPQAAAKW2Nocm0AAAAAAAMAAAAAo9cAAFR7AABMzQAAmZoAACZmAAAPXP/
        bAEMABQMEBAQDBQQEBAUFBQYHDAgHBwcHDwsLCQwRDxISEQ8RERMWHBcTFBoVEREYIRgaHR0fHx8TFyIkIh4kHB4fHv/
        bAEMBBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/
        AABEIAIAAgAMBIgACEQEDEQH/xAAdAAABBAMBAQAAAAAAAAAAAAAAAwYHCAIEBQkB/
        8QAPhAAAQMDAgMGBAMFBgcAAAAAAQIDBAAFEQYhBxIxE0FRYXGBCBQikTJCoRUjM2KxCSRygpLBFlJTg6Ky0f/
        EABoBAAIDAQEAAAAAAAAAAAAAAAAEAQIFAwb/xAAkEQACAgICAgICAwAAAAAAAAAAAQIDBBESMSFBEyJhoQVRcf/
        aAAwDAQACEQMRAD8AuXRRRQAUUUUAFRnxl4zaa4aJaizW3rhdX0do1DYUE4T3KWo7JBxt1J8KcPFnWEbQmg7lqaQ2HjFbAZa
        Jx2rqiEoT6ZO/kDXnPrjUNy1PfJd5ustyROmqLj7ysqCR3JA/KB0AFAEv6w+LLW9xlLb0/
        Ft1ljpBGAz8w57rXt9k1Ft41rqzVRDt91Vd5PMei5K1IH+UYHf0FM2G02t1wlXKhHcVDJV5+lbl1D/IhTDTzmdylrKE9O8
        +PpUbS7LJb6R0tPaqvmmrkmXZLzNt8lB/
        iRnCgkeB8fepr4PfEte7ZqVqNrG4yJtrdUQ7kBakZ6KBPTfzx6VWmW3cmytcmE8wDvkpOPvWva5JS4eZWCdiTvtQpJ9BKLXa
        PS+x8c9AXRxDZnSYhWQlKnmCpBJ6DnQVJB9SKkeFMjzGyuO6hYBwcHcHwI6g+teUDXbM57MkJI
        +pKVdfarKfDjxzmW29W7TOq5/
        zlteLcePOdOXIudkoWTupvOBvkpO4OMipKl0qKKKACiiigAooooAKKKKAKjf2gernW0WHSMR7KfqnS0JPfulvm9uc486qQqQ
        p5kt/Ob74CUFRJ9TU2/HIiSrjnNbcThLsCMpjB6pCMb+/NtUf8KtMIuL7kyayFIQrlQM7E1yttVceR3opd0+KFeHWhpNycS
        +83yJz1Weg8PM+VTXY9HW6JynsQtY71DO/
        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
        jWTkY7iuUejYxclTajPsiF2e
        +61j5qa5kdDgf0FazcWVKeSnCgCdk7lSqeDdndUsNpy4pRwlKEZUrwGKmXhPwybtTrd7vjSTNH1MRjhQZ/
        mUe9Xl0Hr0Woi7HqIzkSjUuUhuQuHzWmuC+qJ14aAnzbRI7RBH8Brs1Hk9ScE+gHdVLNF6y1Rou4ftDS96lWyQtCQ4WV/
        S4BuAtJ+lQz3EVfP4sdRo09wSvxCsP3BtNvYHip04UfZPMa88HBucY22reorUY6R5
        +6yU5cmWd0J8X16iobj6x07HuiRsqTAX2DvmShWUE+hTU0aT+JbhNfuRDt7eszysDs7lHU2M/4xzI/
        WvO10lt3IGB30shSiARtXT4kyOTR6x2W8Wq9RBLtFyh3COejsV9Lqfukmt6vKCxXu7WKYJlluU23SBuHYr6mlfdJGamfh58U
        PEPTzrbN8fZ1NBGykS0ht8D+V1I6/4ga5uponmiJr5drpfLo9c7zcJM
        +a8cuPvuFa1e57vIbVpY7sH719zXzrk52phJIWPigAPetR5sLURjO2wpZx0doEEgZ6Z76Tlghv92fqUeUY8/
        CpLIyiMhMNtPfyiujp+QqHc40lK8KZeQ4CDunCga1wN
        +QZIA2xQ2eVZA6H9KjQb8nppoi4i7aatt1bI5n2EqXg7FWMH9az4i6siaR06q4vhLsh1QZiR
        +bBedPQeg3JPcAajr4Qr4LzwlYZWvndgPFhYzuNtv0plcbdQSp3GyPbX+ZMCBbnG4WDst5WC4v1/
        KPJPdmkbG4pscqSlJJmDPEHVzN2iXOMq1tpYUt
        +Wx8mlAmoIOUleOZJGBgpPXGcjarD6K1LbdW6XhagtK1GNLbCwlYwttX5kKHcoHIIqs2nLc3c7nBtq2iWZkpDKlYwOUq
        +pIGdh9ONvGpC4VB/QHESRpGW4f2ZeiXICifpS+lOSn1Un/1FL4/LjtjWZGCnqJG/
        x66g7SZp3SrbmQ2hy4Ppz3n6EZ9gv71VFeN8VLPxTagGoeNF/
        kNLBYhrTBZKTtytDlUf9XNUTlJyEnPStStaRlSfk1HEBSzk5rJpBAxWT30OpHf4dTS6UADJGAfarg2J8m/
        SgJyOuKV5R0Sc7UHGADU6I2bAUCkEHPhijO24O/
        nWlZ3g7GwOqSRg91bQVuEgZFRHytlWtM1bg2pTYcTsts86SD4UshLT7SXT9QUMjBwR70qpPMOnTurWgfSlxn/
        prOB5HcUa8kp+DYQl1AyHAsfzbEe4pVHcrHpSat9gceJpRIGMDY9
        +anRUsL8Fuq5Fp1Vd7EQpyPPihxKeYDkdScJVjwIUQfanzxps6F39V1kqCEwmHHVKzg7YI39ar5wEun7L4t2JalcqJD3yyzn
        /AJxgf+WKn74lpxVHbtjJV2spAS6EpJJQVpH/AN69cUlktR2x3FTm0jmaYmIau9mvDay20iay643kHlTkIOTgY6n7/
        Z1fEzO/ZNktd6ZeWzNgTQ/FcSdwtIBz+gpn2/5xywuR2wtKlMDH0DCSn8JG252PkceRxwPiO1j
        +3dAabYWCmYXXG5SSMHmQkAnHnsfelMZ7XEdzVqSkiA7lKdmyn5clRcefdU64rvKlEkn7mtJaASCpSgcYwNqWXtt09qTxlQx
        githLRj72fWGkI3QgDbr3k+ta0k874TnYda3TsjfwrTaGVKXjrQH5MmxjbJrIg9P6UAdDShGcHpQQz//Z`),
      },
      {
        email: 'jesse.alvarez@example.com',
        password: 'quick',
        first_name: 'Jesse',
        last_name: 'Alvarez',
        image: Buffer.from(`/9j/4AAQSkZJRgABAQEASABIAAD/
          2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/
          2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/
          wAARCACAAIADASIAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABQYDBAcCAAEI/
          8QANRAAAQMDAwIEBQMDBAMAAAAAAQIDBAAFEQYSITFBBxNRYRQicYGRMqGxFSNCCGLR4YLB8f/
          EABoBAAIDAQEAAAAAAAAAAAAAAAMEAQIFBgD/xAAmEQACAgEEAAcBAQEAAAAAAAABAgARAwQSITEFEyIyQVFhgbEV/
          9oADAMBAAIRAxEAPwDQI85tjKHMc96ikXiLHSVAgmlSW884kKSshX1qv8E
          +615jrhrnUwr7jBljD6L6mWsobOOaNWmQlvkg/elKxxGzcghSgB1+tNxSywfkOU+melVzEKaWERGI3Qg/dE7PkRk
          +uK4akIdTuWjr3qFpxiQ3tAAIojEtztwQWITCnnAMnbxtHqT0H3oPns/HzCKl2ZGGt
          +ABwe1edhMJCVrxxzQy9XW26feVEuF9iCS2M+RHCnVZ9CQMUHc1jCNwchOSWy60grU2lWVYACjgdzg9M56+lF/
          5usU7tpAMkNjPUYpjBLKVRx+1dNW1E1kodT82OhrmwXqx3kIYXc24bijgJlJLQ/KsU1ydOzLYyZram5UUdXWDlI9/
          ce4yKHk0erwHcy9SyupNmZ+/YW2pRSEYGa4dsrSmyjPNNTwS
          +veBmhz0R1DhXnipXxJrHME2EXwIMhWlqGzkcn1qy3I2JUdo6dcVXmKksnodvcV0XCmJzjJFGfUFqJMgBV4nCJiC
          +VLc2jPSrab3ESfJLieaSL67JjoUWyo57CloS5qH0lRVk9qaTAMgu4IuVjGkBbe8q/6rhU5GfLz
          +K9awl4rStXA4q4i2NIf8wnODmgNkUNRkyuw3J2l1tBHcVOxOmIWUvhWDwTRVL7LbO1AGAKCypqXZBSkDihJkbISCvE8wo
          cGMliYEuegKkpZaJG91XRA7k1b1BrJUiCu36UdeYtKMhUltOXH8HBUB6nHX8cUkTZka3WLz5KyClRe2lWN3GAP5rB9V6
          +vjl1VLg3CRFUFDy0xlYBA6Z7mtTQ4/
          KtwPUfmMLjFAtNWf1LJsjzrcOztqKlbit9zzHV57qBHFU7VrS6v39LciyQFPAlbY8ryljg8pUR1rKGtSa0kxG35Lb0kOg4
          WtJ5q4zqXWkFjLrQU2kY+ZGCke4pl23G2PMYXG1cDibXc4Vyv8fzVTJceMtJKo7jIO1YHylKuvX9qIeHniHrrw/
          ujduuy3ZtmWUhaH0FxvB4ITjlNYUvWfifFZU5GceLQAKU7Aof8AyjWndc3+7ynF3aKpG5AStEfISojPOOx
          +lWTK1UeRB5MQvgET9Q3fUdkmXbzdPKd8t1AeVGW2UloHg4V0I3cfg96nRLDzKdwGay/
          Sk9M0sLgSjHnYXmLIVuQ6AOnXjjn7EU/PTm4zwbOMnsOmfb2rA8Q0o3bkHc8AV7PEIpbbkBQUPbNDZ1vcStJB
          +UGr8WTHdAVuAJ689KKlEWRH2gg8Vl7irUZZsO8RJuEFpzaFJBoNNtUVspWEgqFNlybDLiiEkpHpS85IjuKOSNw9a1dO5A
          sRJ1rgyQafagQy4pWVHPOaGPuuNo65AqS46ibU1scWMDtmhgu0Z87d6TRFwu3LQLZgOBI3rgpCSM4oWt99bgLQ6nr2q89H
          akOFRUAPaq7yY7Cm0k8bx0+tN48QWU8zdxM78T9RyXJCrXACiprCFunok+gHrV3w/
          wDDdl2Am6Xtv4iQ8NyQ5zgUo6hmCdfYyQRmTLUooT1ICtozX6Ms0ZLdqZZCQnagDHpxXsrlVCidRosCsSx
          +IOFggtxm20st7UdEpA/
          aqcywQ3GFAsowpJByBTYtlIVwcH8ZqB1CQgg4I9xUhRNIKOoCTY4ghbUIRgJwOKzbVcR2wPOTYzA8rad4Snoa2ZsNEEDHv
          kdqo3O0Qp8B1lxlK0qBByKIorqKZ0UijMR03qaG7KavMFaY8yKsKWyo7d3PY/v9q2O8asck26NLabSo7Q4VDuknB
          +4P8ivzPqaxStGeIfwzqdsOQVeWcZCk9cfkVqOhrk1c9OSiXHCiPlBbwTtS4EkEfRSFfmr5UujMVj6WUx/t
          +pw6sAukHuKZYupjHSfmKsDjFZEiHLYfVIQSEZ4NEYd4WlZZWOvfNJZdIjG4iuUgzWmr
          +i4tlOzBIoIqJtmreWMpJyMUtRrwIgGVkE1eRfXHykKGEnvQ1xeX7Zd8m73RHelSH15yT2r4hchKwQSBXxqU0lkHjOK89L
          BQMcVqAfEz+5eVcXUbUeYal89Tq2tx3fMPlz15oS3/AHFDOau22A9N1JDYClBCnkZx6Zyf2zXqAl0XcwCxIs9qE/
          xug2ry/wCzGWtwnHCtpKv5rZrxe7vb9zNvixWWW
          +FSpjm1GfYDk0LiaaEHxXtd4Q2hDEpp0jb2VgnBH0NNt109Buj7bj7DckoJUlDnKQfXFIO
          +5gana4tO2INjPdzMmtdaievKI7t0sshJVgiPvBPsCeK0MsSndOmSXcOFJVycj6VUb0hDZk/
          ELixkbTlKW2gkZ7UyNx0f0ZUcAdDgetFFl+YZQyp3zMNmTtUKuikTLxcg0nJ2QGQnAz6nJNGdPSZbs1JjXC/
          tuHlKbgghDnqORWhC0w3V7lEhXbCtpFFYNpabTuSsrX1/
          uHdRPUIo2In1GZx4raVRqDw7cnIQn4uHh9tQHI7KH4pd8ILU98G+/MS80zKbEYKR
          +ncropWewIH5Narqd9CdNz2FgAqYUnH1GKE6aYch25yw+QylCW0LjuNg5UnAI3Huc5qWc7KgsekXLltuq5/
          yCn3kojrjLTtWklCkkdxxS6tK2pZUpJAHtxUl6vjadVzHkEFoyFn689amFwYuLW1pOcDtU7Svc5tiLr6k79whvxwnOFgY9
          MV03N3tBCDgetBTBBUtTiyPYcZqGI/
          5MlTalnaDxmvFARxKEnuQySWn9oPHrXt6Vs5zgjvQt6atb2FevWvPS0pb2pOCab2mLhSYWZnBsgZzij9uu6Ik
          +PKTyW1pX9R3/akZp8BWSfrRaM6n4feD0oeRB8y6kobE1
          +8R3PiYN1iqR8LEKF7887SQPxtNHXZaI7GUgepx3rLbJrRLFjkWi4JK2VtKQy5jJbJ6D3H8U3wpS7haWypQC/
          LAz6Ejis3Ihxm522m1yaqmHdczyr+XZD6sAttHoeAo+lCZHiC5GjlpcVtcnJwlnKkj06jNUGYV7g3OIw7FaXDkuKEics5
          +G7geX3z602s6VtCmUKk6jUCSCryW0o4x249aulk3GHaxzx/
          IoN325XKMJshPkvNAgFDZQlQznnPf3o9ZtTPzIu5BwpHBHcGq9707HkW1cGxXi4IkKwDIWoFKfX5T1HeobfaY9nYfcacU4
          ogJKl/5bR1
          +5NEyWCCIAOQCpkurLkpyzqaBHmLwVZ6dRRmfNi2fSQuiQ0pSWsNFPVRI4GfQHnFJTYGptTtWTeAZbgSQOqE45P8AFWvFW
          4R4lqtdhgkeWw2E8HqAAOam/WqD5mVn1LYlYr2Zlc6Stx488k9auWe5OQQpO0nd3qBqIl5z3IqcRFsgjZn3p9qIqc/
          ZHUIO3BTwKtxHfFQx3wuSM4xnmqbW8A+YCBXQQpJC2+ntQ9okiVXnRkJKSCO9VVZWvIPfpmiTEJy4/
          I0g7s9T2q61ppbeA67z3xRmyKvcgiL4WpCwDVtqUtCylIP0pnjabiF1LrqyojnFW5Ma3xjhLIKiMA45oLZweAJ6ri4Gn3G
          w4lpRHsOlaTpia63Fbak78DhB9eOn/FKcBx5L/
          lmN8hPFadpu1pdtb8h5LQacAQlsn5lkHkgeg9fU0pqGLCiI74bkdNQoHzK8K+NzJDrDqAgbto3c/
          mhV5mXNmUERo5UgnkhzCU5NDb9p28WuU5Ks6zJaKt/kqOFJPsehpF1Jd9XSghkWichW4ZUlPBx9KFiX6M6R9SyA/
          c1ZqUqHBJcCEvKHCAc5P1oKvUjCG3GpA24ISQTk80hRXtZTXmvMiFjZ3dXg0zWDSbof
          +IuUoyVlQVtI4zRiABzFDlZ2sRk8N7SoX5d
          +kIwtxRSykjBCM8H70r6otDsryNQplqmWyWVCNJA2gFJwptQ7KSevr1rV7O2mIhCwAEpwSaHeEEE6h8IdU6auLAegxr1NL
          JxlTJDhWlSe/AWfsaLgG5v2I
          +IY6QTI41olqCXmmjgdwOtGP6bJSwCtkj7UxqMiz3JdrnQltKazhakEBYHRSc9QfWuTf4S1
          +S6gJxxkiqPkybqqZBoRBnthpRTtrhljbG9N3NFr4hEmckxGysnskZqolC0ANqbKSnqFUyvI5kSla7h8GSAkZ61ejTJb8l
          S1hZT1GKhmW9tiKh1sJB4otYZbCh5DgG4D0qcqjsCeqfYr77b391CsZFHHYyVwBKW2kDrg
          +lR2623G5zXxHguKjtEb3lDCEfVX/rrR27NT7XoqRMDURmCwyXFzJxwk+gQ3ySc4wVfihY9K+VuB/
          ZKj7ge12G53Nz4qJHUYaFJDj3RKcnA69T7CmNN4aZ8YIWmmeG2ra8vbnoAUgfc8mvng5a5
          +o3DfdRTXEMhneyyV7UpSeEkDoOpP4oGzaxI/1RXG42t1TsWJBUjnkqCilPB9Mgmj59MMeNwvJjmjcLmS4/
          SY6VKIxwetBZdpbcyoJpkJChhQ+9QONYB7isNbBnTtRiqizNIXu2gnNEY0BCDuI96I+TleAKkUjYjFH3QQQXB81/
          4e3OEHACaW/Au6TUr1KI8pxptd0W4kJ/ScgIJx3/TTBeoMt2ySHkgNtIbUouOcJAAyaVfA266Lj2u12OXqaFAv89hUpyI/
          8m9TjqnEDccAqKSOM56Vo6BaO5upk+KZB6VTnnmPdu1vb3UT7ZqWzLu6rc15ymUtbiEhSmyW/
          wDIYKcnHTIpIkz9Caynra088qDKVnyo0xYSpfsFdCfY0wv21/T3jq62
          +Ult5DzSSOMhS0Lxj2JNLS9HaduuryJcJIK5UkLWyotq4xjp6E1tPpcWSyR/RMF8uzapHc9Z9KzYFxe
          +NbXkII2LGFV8dsDcm6uFxRSBgAYximmHqy0aQ1expbVUqdcrY7GS6y6tAW4zyRgkDJHA5HPsabXtM6N1bbXJehNTLXMIO
          yLKAIXjryMKT9SMVk6jR515XkfcOWULRmNI0jdL2GIVvb3uLI5UoJCR3KlHgD3NPelfCm0RL42iROVfpSWy44iFlEdrHq4
          eXOeOMD3qZ25w7fb/AIS3xvP2JytW3O4+pHf2Bo74eTrrJtk6e4HAXHENjEfGEgZI6/
          SmRpyibsncoMi3UuXS33ORJTbWIrUOK38gYaIQlKQMqIA7kYGfc1kPigLtf75a9LriSGYa3fPeQlBx5SOnPTk579hWwJlz
          ntSSXHVqQwgbFKWjKFAcqIxyP+qxrWviNJVenpMcMsJwSFkk7G08J4IwKcwqxahVCCxZFNk9n/
          Jqehob0XT13lycRWWWENtgADbwcAdcdqr6ctcRjU0h9LO2QlBZLw6rCXFY/
          k1j8rxhccs8DTmmob9zdwmTNmSCUNKIwV4HVWOmeBx3rZNJ3D+qhczaE7ufryTn9xS
          +Qggj9h0SsgP5GWTa2HslTPzHo40cH7iqirOlXCX1Af7kUZAOBtJH0rvKiQk8/
          Wkm06NzU0U1ORBQMBJsaErBU8Sn2TVxu2Rm/mS1yP8AJYyaJho8kq5r4tJOMDNQunRTwJLajI/BaZp4zXNux+CuoJas
          +a5GMVs56F0hH8KNfka+2c3HS1s1EmO6qQYzTbziASApACACO3yBBBHqfSv0R/qclPvaTsWmIhJeulySNo7hA/
          5WPxUdi0Fb2vC5/
          ZIWpmQhb7SgsLSlKUJSlQzxyBn700tCg3UUyswFqIA8Cdb3S4XVNrv78i4OwmvMivSBvcSgFKSgqPJGNuCemK3YR7NB1im
          axDTvdkOnG3P6kJV9BWE+E8LTVs108l55DanGHCht0kqwNpI44ODW2G92CbfgkrKPh3WicpKUnKCBx36UzjHY/
          JnarfakfcDeI12iM62ZcRDQlQjJUV7UnABOf05JoHC1SUSQpUVnag7kONpWhSc/+PFDvGPxAtVn1fGRGgOu
          +bEQVqSAjCSo/npSRH8Xo620NqtD5CRtCg8kZx68Uxj9o9MMUcm90//Z`),
      },
    ];

    for (let i = 0; i < users.length; i++) {
      await queryRunner.manager.save(
        queryRunner.manager.create<User>(User, users[i]),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(User, {});
  }

}
