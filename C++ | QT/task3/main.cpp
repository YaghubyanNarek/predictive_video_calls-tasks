#include <QCoreApplication>
#include <QDebug>

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);
    char grade = 'A' ;
    switch (grade) {
        case 'A':
        qDebug () << "80-100";
        break;
        case 'B':
        qDebug () << "60-80";
        break;
        case 'C':
        qDebug () << "40-60";
        break;
        case 'D':
        qDebug () << "20-40";
        break;
        case 'E':
        qDebug () << "0-20";
        break;
        default:
        qDebug() << "Invalid syntax";
            break;
    }
    for (int i = 1; i <= 10; ++i) {
        qDebug() << i ;
    }

    return a.exec();
}
