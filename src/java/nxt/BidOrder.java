package nxt;

public class BidOrder implements Comparable<BidOrder> {

    public final long id;
    final long height;
    public final Account account;
    public final long asset;
    // writes protected by blocksAndTransactions lock
    public volatile int quantity;
    public final long price;

    BidOrder(long id, Account account, long asset, int quantity, long price) {

        this.id = id;
        this.height = Nxt.lastBlock.get().height;
        this.account = account;
        this.asset = asset;
        this.quantity = quantity;
        this.price = price;

    }

    @Override
    public int compareTo(BidOrder o) {

        if (price > o.price) {

            return -1;

        } else if (price < o.price) {

            return 1;

        } else {

            if (height < o.height) {

                return -1;

            } else if (height > o.height) {

                return 1;

            } else {

                if (id < o.id) {

                    return -1;

                } else if (id > o.id) {

                    return 1;

                } else {

                    return 0;

                }

            }

        }

    }

}
