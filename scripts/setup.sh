cd vendor && \
tar zxf bcm2835-*.tar.gz && \
cd bcm2835-*/ && \
./configure && \
make && \
sudo make check && \
sudo make install && \
cd .. && \
npm install
