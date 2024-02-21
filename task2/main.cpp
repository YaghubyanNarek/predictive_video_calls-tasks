#include <QCoreApplication>
#include <QDebug>

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);
    int typeInt = 5;
    float typeFloat = 3.14;
    char typeChar = 'a';
    bool typeBool = true;

    qDebug() << typeInt;
    qDebug() << typeFloat;
    qDebug() << typeChar;
    qDebug() << typeBool;
    return a.exec();
}
