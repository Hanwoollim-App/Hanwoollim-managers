import {isUndefined} from 'lodash';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentage,
  widthPercentage,
  fontPercentage,
  color,
} from '../../../../../utils';
import {IReservationGettingDataByDay} from '../../../../../utils/api/axios/type';
import {convertOneDigitToTwoDigit} from '../../../../../utils/constant/reservation/timeTable/timeTable';
import {customBtnType} from '../../../../../utils/types/custom-modal.type';
import {Modal} from '../../../../layout';
import {LoadingPage} from '../../../../layout/loading-page/loading-page.layout';

const styles = StyleSheet.create({
  timeTable: {
    width: widthPercentage(336),
  },
  dayColumns: {
    height: heightPercentage(20),
    flexDirection: 'row',
  },
  cornerBox: {
    width: widthPercentage(14),
    borderWidth: 1,
    borderColor: '#cdcdcd',
    backgroundColor: color.mainColor,
  },
  day: {
    width: widthPercentage(46),
    alignItems: 'center',
    borderTopWidth: widthPercentage(1),
    borderRightWidth: widthPercentage(1),
    borderBottomWidth: widthPercentage(1),
    borderColor: '#cdcdcd',
    backgroundColor: color.mainColor,
  },
  dayText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(10),
    includeFontPadding: false,
    color: 'white',
  },
  timeIndex: {
    flexDirection: 'row',
  },
  time: {
    width: widthPercentage(14),
    height: heightPercentage(46),
    alignItems: 'flex-end',
    borderRightWidth: widthPercentage(1),
    borderBottomWidth: widthPercentage(1),
    borderLeftWidth: widthPercentage(1),
    borderColor: '#cdcdcd',
  },
  timeText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(10),
    includeFontPadding: false,
  },
  blankBox: {
    width: widthPercentage(46),
    height: heightPercentage(46),
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#cdcdcd',
  },
  reserveBox: {
    position: 'absolute',
    width: widthPercentage(46),
    alignItems: 'center',
    justifyContent: 'center',
  },
  reserveTitle: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: fontPercentage(9),
  },
  reserveText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(9),
  },
});

type ITimeTableProps = {
  reservationData: IReservationGettingDataByDay;
  isLoading: boolean;
};

export function TimeTable({isLoading, reservationData}: ITimeTableProps) {
  const generateTimes = (startTime: number, endTime: number) => {
    const times = [];

    for (let i = startTime; i < endTime; i += 1) {
      times.push(i);
    }
    return times;
  };
  const times = generateTimes(0, 24);
  const week = ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'];

  const convertNumTimeToStringTime = (numTime: number) =>
    `${convertOneDigitToTwoDigit(numTime.toString(10))}:00`;

  const schedule = [
    !isUndefined(reservationData.MON)
      ? [
          ...reservationData.MON.map((data) => ({
            isMine: data.isMine,
            name: data.name,
            startTime: convertNumTimeToStringTime(data.startTime),
            endTime: convertNumTimeToStringTime(data.endTime),
            session1: data.session1,
          })),
        ]
      : [],
    !isUndefined(reservationData.TUE)
      ? [
          ...reservationData.TUE.map((data) => ({
            isMine: data.isMine,
            name: data.name,
            startTime: convertNumTimeToStringTime(data.startTime),
            endTime: convertNumTimeToStringTime(data.endTime),
            session1: data.session1,
          })),
        ]
      : [],
    !isUndefined(reservationData.WEN)
      ? [
          ...reservationData?.WEN.map((data) => ({
            isMine: data.isMine,
            name: data.name,
            startTime: convertNumTimeToStringTime(data.startTime),
            endTime: convertNumTimeToStringTime(data.endTime),
            session1: data.session1,
          })),
        ]
      : [],
    !isUndefined(reservationData.THUR)
      ? [
          ...reservationData.THUR.map((data) => ({
            isMine: data.isMine,
            name: data.name,
            startTime: convertNumTimeToStringTime(data.startTime),
            endTime: convertNumTimeToStringTime(data.endTime),
            session1: data.session1,
          })),
        ]
      : [],
    !isUndefined(reservationData.FRI)
      ? [
          ...reservationData.FRI.map((data) => ({
            isMine: data.isMine,
            name: data.name,
            startTime: convertNumTimeToStringTime(data.startTime),
            endTime: convertNumTimeToStringTime(data.endTime),
            session1: data.session1,
          })),
        ]
      : [],
    !isUndefined(reservationData.SAT)
      ? [
          ...reservationData.SAT.map((data) => ({
            isMine: data.isMine,
            name: data.name,
            startTime: convertNumTimeToStringTime(data.startTime),
            endTime: convertNumTimeToStringTime(data.endTime),
            session1: data.session1,
          })),
        ]
      : [],
    !isUndefined(reservationData.SUN)
      ? [
          ...reservationData.SUN.map((data) => ({
            isMine: data.isMine,
            name: data.name,
            startTime: convertNumTimeToStringTime(data.startTime),
            endTime: convertNumTimeToStringTime(data.endTime),
            session1: data.session1,
          })),
        ]
      : [],
  ];

  const colorGenerator = (num: number) => {
    const colorList = [
      'rgba(246,206,218,1)',
      'rgba(250,227,209,1)',
      'rgba(248,238,207,1)',
      'rgba(224,245,214,1)',
      'rgba(215,235,252,1)',
      'rgba(235,217,244,1)',
      'rgba(228,223,217,1)',
      'rgba(212,196,251,1)',
      'rgba(193,225,197,1)',
      'rgba(190,211,243,1)',
      '#81E1B8',
      'rgba(190,218,220,1)',
      'rgba(254,243,189,1)',
      'rgba(247,141,167,1)',
      'rgba(196,222,246,1)',
      'rgba(250,208,195,1)',
      '#cc9af4',
      '#f8b3eb',
      '#ff8080',
      '#9af49f',
      '#9aeff4',
      '#a8e6cf',
      '#fdffab',
      'rgba(0,208,132,0.9)',
      'rgba(217,227,240,0.9)',
      'rgba(105,108,137,0.8)',
      'rgba(142,209,252,0.9)',
      'rgba(6,147,227,0.8)',
      'rgba(153,0,239,0.9)',
      'rgba(235,20,76,0.9)',
      'rgba(83,0,235,1)',
      'rgba(18,115,222,1)',
      'rgba(0,107,118,1)',
      'rgba(129,199,132,1)',
      'rgba(184,0,0,1)',
    ];

    return colorList[num % colorList.length];
  };

  function xPosGenerator(day: number): number {
    return widthPercentage(46 * day) + 14;
  }
  function yPosGenerator(time: string): number {
    return heightPercentage(
      parseInt(time.slice(0, 2), 10) * 46 +
        (parseInt(time.slice(3), 10) / 30) * 23 +
        20,
    );
  }

  function heightGenerator(start: string, end: string) {
    return Math.abs(parseInt(start.slice(3), 10) - parseInt(end.slice(3), 10))
      ? heightPercentage(23)
      : heightPercentage(46);
  }

  const [mdVisible, setMdVisible] = React.useState(false);
  const [mdTitle, setMdTitle] = React.useState('');
  const [mdText, setMdText] = React.useState('');

  function changeVisible() {
    setMdVisible(!mdVisible);
  }
  const mdBtn: Array<customBtnType> = [
    {
      buttonText: '확인',
      buttonClickListener: changeVisible,
    },
  ];

  if (isLoading)
    return (
      <View
        style={{width: widthPercentage(340), height: heightPercentage(600)}}>
        <LoadingPage />
      </View>
    );
  return (
    <View style={styles.timeTable}>
      <Modal
        mdVisible={mdVisible}
        title={mdTitle}
        subtitle={mdText}
        buttonList={mdBtn}
      />
      <View style={styles.dayColumns}>
        <View style={styles.cornerBox} />
        {week.map((day) => (
          <View key={day} style={styles.day}>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>
      {times.map((time) => (
        <View key={time} style={styles.timeIndex}>
          <View style={styles.time}>
            <Text style={styles.timeText}>{time}</Text>
          </View>
          {week.map((index) => (
            <View key={index} style={styles.blankBox} />
          ))}
        </View>
      ))}
      {schedule.map((day, i) =>
        day.map((reserve, k) => (
          <TouchableOpacity
            key={reserve.startTime}
            onPress={() => {
              changeVisible();
              setMdTitle(reserve.name);
              setMdText(reserve.session1);
            }}
            style={[
              styles.reserveBox,
              {
                height: heightGenerator(reserve.startTime, reserve.endTime),
                backgroundColor: colorGenerator(i * 10 + k),
                top: yPosGenerator(reserve.startTime),
                left: xPosGenerator(i),
              },
            ]}>
            <Text style={styles.reserveTitle}>{reserve.name}</Text>
            <Text style={styles.reserveText}>{reserve.session1}</Text>
          </TouchableOpacity>
        )),
      )}
    </View>
  );
}
