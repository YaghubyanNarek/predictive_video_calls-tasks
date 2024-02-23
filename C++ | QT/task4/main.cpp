#include <QCoreApplication>
#include <QDebug>

int add (int a, int b) {
    return a + b;
}
int sub (int a, int b) {
    return a - b;
}

int dividie (int a, int b) {
    return a / b;
}
int mul (int a, int b) {
    return a * b;
}


int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);
    qDebug () << add(5,6);
    qDebug () << sub(10,13);
    qDebug () << dividie(10,3);
    qDebug () << mul(5,10);

    return a.exec();
}
