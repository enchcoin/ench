package nxt;

import nxt.db.DbClause;
import nxt.db.DbIterator;
import nxt.db.DbKey;
import nxt.db.VersionedEntityDbTable;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public final class CurrencyBuyOffer extends CurrencyExchangeOffer {

    private static final DbKey.LongKeyFactory<CurrencyBuyOffer> buyOfferDbKeyFactory = new DbKey.LongKeyFactory<CurrencyBuyOffer>("id") {

        @Override
        public DbKey newKey(CurrencyBuyOffer offer) {
            return offer.dbKey;
        }

    };

    private static final VersionedEntityDbTable<CurrencyBuyOffer> buyOfferTable = new VersionedEntityDbTable<CurrencyBuyOffer>("buy_offer", buyOfferDbKeyFactory) {

        @Override
        protected CurrencyBuyOffer load(Connection con, ResultSet rs) throws SQLException {
            return new CurrencyBuyOffer(rs);
        }

        @Override
        protected void save(Connection con, CurrencyBuyOffer buy) throws SQLException {
            buy.save(con, table);
        }

    };

    public static int getCount() {
        return buyOfferTable.getCount();
    }

    public static CurrencyBuyOffer getOffer(long offerId) {
        return buyOfferTable.get(buyOfferDbKeyFactory.newKey(offerId));
    }

    public static DbIterator<CurrencyBuyOffer> getAll(int from, int to) {
        return buyOfferTable.getAll(from, to);
    }

    public static DbIterator<CurrencyBuyOffer> getOffers(Currency currency, int from, int to) {
        return buyOfferTable.getManyBy(new DbClause.LongClause("currency_id", currency.getId()), from, to, " ORDER BY rate DESC, creation_height ASC, transaction_index ASC ");
    }

    public static DbIterator<CurrencyBuyOffer> getOffers(Account account, int from, int to) {
        return buyOfferTable.getManyBy(new DbClause.LongClause("account_id", account.getId()), from, to, " ORDER BY rate DESC, creation_height ASC, transaction_index ASC ");
    }

    public static CurrencyBuyOffer getOffer(Currency currency, Account account) {
        return getOffer(currency.getId(), account.getId());
    }

    static CurrencyBuyOffer getOffer(final long currencyId, final long accountId) {
        DbClause dbClause = new DbClause(" currency_id = ? AND account_id = ? ") {
            @Override
            protected int set(PreparedStatement pstmt, int index) throws SQLException {
                pstmt.setLong(index++, currencyId);
                pstmt.setLong(index++, accountId);
                return index;
            }
        };
        return buyOfferTable.getBy(dbClause);
    }

    public static DbIterator<CurrencyBuyOffer> getOffers(DbClause dbClause, int from, int to) {
        return buyOfferTable.getManyBy(dbClause, from, to);
    }

    public static DbIterator<CurrencyBuyOffer> getOffers(DbClause dbClause, int from, int to, String sort) {
        return buyOfferTable.getManyBy(dbClause, from, to, sort);
    }

    static void addOffer(Transaction transaction, Attachment.MonetarySystemPublishExchangeOffer attachment) {
        buyOfferTable.insert(new CurrencyBuyOffer(transaction, attachment));
    }

    static void remove(CurrencyBuyOffer buyOffer) {
        buyOfferTable.delete(buyOffer);
    }

    static void init() {}

    protected final DbKey dbKey;

    private CurrencyBuyOffer(Transaction transaction, Attachment.MonetarySystemPublishExchangeOffer attachment) {
        super(transaction.getId(), attachment.getCurrencyId(), transaction.getSenderId(), attachment.getBuyRateNQT(),
                attachment.getTotalBuyLimit(), attachment.getInitialBuySupply(), attachment.getExpirationHeight(), transaction.getHeight(),
                transaction.getIndex());
        this.dbKey = buyOfferDbKeyFactory.newKey(id);
    }

    private CurrencyBuyOffer(ResultSet rs) throws SQLException {
        super(rs);
        this.dbKey = buyOfferDbKeyFactory.newKey(super.id);
    }

    protected void save(Connection con, String table) throws SQLException {
        super.save(con, table);
    }

    @Override
    public CurrencySellOffer getCounterOffer() {
        return CurrencySellOffer.getOffer(id);
    }

    void increaseSupply(long delta) {
        super.increaseSupply(delta);
        buyOfferTable.insert(this);
    }

    void decreaseLimitAndSupply(long delta) {
        super.decreaseLimitAndSupply(delta);
        buyOfferTable.insert(this);
    }

}
